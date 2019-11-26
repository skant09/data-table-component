
import React from 'react';

const TableRow = ({datum, rowIndex, onRowClick, columns, selectRows}) => {
  return (
  <tr onClick={selectRows({...datum, rowIndex})}>
    {columns.length && columns.map(
      (column, columnIndex) => (<td key={columnIndex} style={{textAlign: column.textAlign}} onClick={selectRows({...datum, rowIndex})}>{column.element(datum)}</td>)
    )}
  </tr>)
}

export default TableRow;