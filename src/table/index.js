import React from 'react';
import { connect } from 'react-redux';
import TableHeader from './tableHeader';
import TableBody from './tableBody';
// import './table.css'

const Table = (props) => {
  return (
    <div style={{'maxHeight': '400px', 'overflow': 'scroll', 'margin': '0 auto', 'fontSize': '10px', clear: 'both'}}>
      <table style={{width: '100%'}}>
        <TableHeader />
        <TableBody />
      </table>
    </div>
  )
}

export default Table;