import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import { compose } from 'recompose'
import { Page, Grid } from '../../core/components'
import { fields } from './SponsorsHelper'
import { getSponsors } from './graphql'

class Sponsors extends Component {
  render() {
    const { sponsors } = this.props

    return (
      <Page title="Padrinhos">
        {sponsors
          && (
            <Grid
              keyField="_id"
              fields={fields}
              items={sponsors}
            />
          )
        }
      </Page>
    )
  }
}

Sponsors.propTypes = {
  sponsors: PropTypes.array
}

export default compose(
  graphql(getSponsors, ({
    props: ({ data: { sponsors } }) => ({ sponsors })
  }))
)(Sponsors)
