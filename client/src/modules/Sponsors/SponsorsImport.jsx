import React, { PureComponent } from 'react'
import reject from 'lodash/reject'
import { graphql } from 'react-apollo'
import { connect } from 'react-redux'
import { compose } from 'recompose'
import { Page, Grid, Button } from 'core/components'
import { actions } from '../Main/actions'
import { importSponsors, importFields } from './SponsorsHelper'
import { importSponsorsMutation } from './graphql'


class SponsorsImport extends PureComponent {
  state = {
    sponsors: [],
    selected: []
  }

  onSelect = (checked, item) =>
    this.setState(({ selected }) =>
      ({ selected: checked ? [...selected, item] : reject(selected, { id: item.id }) }))

  importFile = async ({ target: { files: [file] } }) => {
    const sponsors = await importSponsors(file)
    this.setState({ sponsors })
  }

  saveSelected = async () => {
    const { setLoading, setMsg, mutate } = this.props
    const { selected } = this.state

    setLoading(true)
    await mutate({
      variables: { input: selected }
    })
    setLoading(false)
    setMsg('Padrinhos importados com sucesso!')
  }

  render() {
    const { sponsors } = this.state

    return (
      <Page title="Importar Padrinhos">
        <input type="file" onChange={this.importFile} className="mb-4" />
        {sponsors && <Grid keyField="id" fields={importFields} items={sponsors} onSelect={this.onSelect} />}
        <Button text="Importar Selecionados" color="primary" onClick={this.saveSelected} />
      </Page>
    )
  }
}

export default compose(
  graphql(importSponsorsMutation),
  connect(null, actions)
)(SponsorsImport)
