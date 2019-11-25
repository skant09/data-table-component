import React, {useEffect, useState} from 'react';
import TableHeader from './tableHeader';
import TableBody from './tableBody';
// import './table.css'

const Table = ({columns, rows, onRowClick, selectRows, setPreviousPage, setNextPage}) => {
  let [data, setData] = useState([]);
  useEffect(() => {
    async function fetchData(){
      // fetch Data
      let data = await fetch('https://jsonplaceholder.typicode.com/photos')
                      .then(respone => respone.json());
      setData(data);
    }
    fetchData();
  }, []);
  
  let scrollhandler = e => {
    let obj = e.target;
    if(obj.scrollTop >= (obj.scrollHeight - 2 * obj.offsetHeight)){
      setNextPage()
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