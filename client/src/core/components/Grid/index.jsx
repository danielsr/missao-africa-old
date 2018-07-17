import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import classNames from 'core/util/classNames'

class Grid extends Component {
  renderHead = () => {
    const { fields } = this.props

    return fields.map(({ name, label }) => (
      <th key={name}>
        {label}
      </th>
    ))
  }

  renderFields = (item) => {
    const { fields, keyField } = this.props

    return fields.map(({ name }) => {
      const key = `${name}_${item[keyField]}`
      const value = item[name]

      return (
        <td key={key}>
          {value}
        </td>
      )
    })
  }

  renderBody = () => {
    const {
      items, keyField, editRoute, deleteRoute, onSelect
    } = this.props

    return items.map(item => (
      <tr key={item[keyField]}>
        {onSelect && (
          <td className="text-center">
            <input type="checkbox" onChange={({ target: { checked } }) => onSelect(checked, item)} />
          </td>
        )}
        {this.renderFields(item)}
        {editRoute && (
          <td className="text-center">
            <Link to={editRoute + item[keyField]} className="fa fa-edit" />
          </td>
        )}
        {deleteRoute && (
          <td className="text-center">
            <Link to={deleteRoute + item[keyField]} className="fa fa-remove" />
          </td>
        )}
      </tr>
    ))
  }

  render() {
    const { fields, items, editRoute, deleteRoute, onSelect, className } = this.props

    return (
      <table className={classNames('table fill', className)}>
        <thead>
          <tr>
            {onSelect && (
              <th className="text-center">
                Selecionar
              </th>
            )}
            {fields && items && this.renderHead()}
            {editRoute && (
              <th className="text-center">
                Editar
              </th>
            )}
            {deleteRoute && (
              <th className="text-center">
                Excluir
              </th>
            )}
          </tr>
        </thead>
        <tbody>
          {fields && items && this.renderBody()}
        </tbody>
      </table>
    )
  }
}

Grid.propTypes = {
  fields: PropTypes.array.isRequired,
  items: PropTypes.array,
  keyField: PropTypes.string,
  editRoute: PropTypes.string,
  deleteRoute: PropTypes.string,
  onSelect: PropTypes.func,
  className: PropTypes.string
}

export default Grid
