import PropTypes from 'prop-types'
import React from 'react'
import { graphql } from 'react-apollo'
import { compose } from 'recompose'
import { Page, Grid, LinkButton } from 'core/components'
import { fields } from './SponsorsHelper'
import { getSponsors } from './graphql'

const Sponsors = ({ sponsors }) => (
  <Page title="Padrinhos">
    <LinkButton linkTo="/sponsors/import" className="btn primary mb-3" text="Importar Padrinhos" />
    {sponsors && <Grid keyField="_id" fields={fields} items={sponsors} className="mb-5" />}
  </Page>
)

Sponsors.propTypes = {
  sponsors: PropTypes.array
}

export default compose(
  graphql(getSponsors, ({
    props: ({ data }) => ({ sponsors: data.sponsors })
  }))
)(Sponsors)
