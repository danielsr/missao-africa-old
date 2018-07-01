import React, { Component } from 'react'
import remove from 'lodash/remove'
import { graphql } from 'react-apollo'
import { connect } from 'react-redux'
import { compose } from 'recompose'
import { actions } from '../Main/actions'
import { Page, Grid, Button } from '../../core/components'
import { importSponsors, importFields } from './SponsorsHelper'
import { importSponsorsMutation } from './graphql'


class SponsorsImport extends Component {
  state = {
    sponsors: [],
    selected: []
  }

  onSelect = (checked, item) => {
    const { selected } = this.state

    if (checked) {
      selected.push(item)
    } else {
      remove(selected, listItem => listItem.id === item.id)
    }

    this.setState({ selected })
  }

  importFile = async ({ target: { files } }) => {
    const sponsors = await importSponsors(files[0])
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

const mapActions = {
  setLoading: actions.setLoading,
  setMsg: actions.setMsg
}

export default compose(
  graphql(importSponsorsMutation),
  connect(null, mapActions)
)(SponsorsImport)
