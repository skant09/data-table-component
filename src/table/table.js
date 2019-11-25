import React, {useEffect, useState} from 'react';
import TableHeader from './tableHeader';
import TableBody from './tableBody';
// import './table.css'

const Table = ({columns, rows, onRowClick, selectRows, setPreviousPage, setNextPage}) => {
  let scrollhandler = e => {
    let ele = e.target;
    if(ele.scrollTop + 50 >= (ele.scrollHeight - ele.offsetHeight)){
      setNextPage()
    };
    if(ele.scrollHeight < 100){
      setPreviousPage()
    };
  }

  return (
    <div style={{'maxHeight': '400px', 'overflow': 'scroll', 'margin': '0 auto', 'fontSize': '10px', clear: 'both'}} onScroll={scrollhandler} >
      <table style={{width: '100%'}}>
        <TableHeader columns={columns} />
        <TableBody data={rows} columns={columns} onRowClick={onRowClick} selectRows={selectRows} />
      </table>
    </div>
  )
}

export default Table;