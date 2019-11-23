import React, {useEffect, useState} from 'react';
import { connect } from 'react-redux';
import TableHeader from './tableHeader';
import TableBody from './tableBody';
// import './table.css'

const Table = ({columns, rows}) => {
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

  return (
    <div style={{'maxHeight': '400px', 'overflow': 'scroll', 'margin': '0 auto', 'fontSize': '10px', clear: 'both'}}>
      <table style={{width: '100%'}}>
        <TableHeader columns={columns} />
        <TableBody data={rows} columns={columns} />
      </table>
    </div>
  )
}

export default Table;