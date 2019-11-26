import React from 'react';
import PropTypes from 'prop-types';
// import './table.css'

const TableHeader = ({columns, allSelected}) => {
  return (
    <thead style={{background: '#ccc', border: 'none', position: 'sticky', top: '0px'}}>
      <tr>
        {columns && columns.length && columns.map(column => {
          return (<th key={column.id}>
            { typeof column.label === 'string' ? column.label : null }
            { typeof column.label === 'function' ? column.label({column, allSelected}) : null }
          </th>)
        })}
      </tr>
    </thead>
  )
}

export default TableHeader;
TableHeader.propTypes = {
  columns: PropTypes.arrayOf(Object),
  allSelected: PropTypes.bool
}