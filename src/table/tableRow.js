
import React from 'react';
import PropTypes from 'prop-types';

const TableRow = ({row, rowIndex, columns, selectRows}) => {
  return (
  <tr onClick={selectRows({...row, rowIndex})}>
    {columns.length && columns.map(
      (column, columnIndex) => 
        (<td key={columnIndex} style={{textAlign: column.textAlign}} onClick={selectRows({...row, rowIndex})}>
          {column.element(row)}
        </td>)
    )}
  </tr>)
}

export default TableRow;
TableRow.propTypes = {
  row: PropTypes.object,
  rowIndex: PropTypes.number,
  columns: PropTypes.arrayOf(Object),
  selectRows: PropTypes.func
}