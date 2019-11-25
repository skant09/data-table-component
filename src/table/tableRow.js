
import React from 'react';

const TableRow = ({datum, onRowClick, columns}) => {
  return (
  <tr onClick={onRowClick}>
    {columns.length && columns.map(
      (column, columnIndex) => (<td key={columnIndex} style={{textAlign: column.textAlign}}>{column.element(datum)}</td>)
    )}
  </tr>)
}

export default TableRow;