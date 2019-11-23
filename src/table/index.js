import React, {useEffect, useState} from 'react';
import { connect } from 'react-redux';
import TableHeader from './tableHeader';
import TableBody from './tableBody';
// import './table.css'

const Table = (props) => {
  let [data, setData] = useState([]);
  useEffect(() => {
    async function fetchData(){
      // fetch Data
      let data = await fetch('https://jsonplaceholder.typicode.com/photos')
                      .then(respone => respone.json());
      console.log(data);
      setData(data);
    }
    fetchData();
  }, []);

  return (
    <div style={{'maxHeight': '400px', 'overflow': 'scroll', 'margin': '0 auto', 'fontSize': '10px', clear: 'both'}}>
      <table style={{width: '100%'}}>
        <TableHeader data={data} />
        <TableBody data={data} />
      </table>
    </div>
  )
}

export default Table;