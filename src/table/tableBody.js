import React from 'react';
import TableRow from './tableRow';
import PropTypes from 'prop-types';
// import './table.css'

const TableBody = props => {
  const { rows } = props;
  return (
    <tbody>
      {rows && rows.length ? rows.map((row, rowIndex) => {
        return (<TableRow key={rowIndex} rowIndex={rowIndex}  row={row} {...props} />)
      }): null}
    </tbody>
  )
}

export default TableBody;
TableBody.propTypes = {
  rows: PropTypes.arrayOf(Object)
}