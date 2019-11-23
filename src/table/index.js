import React, {useEffect, useState} from 'react';
import { connect } from 'react-redux';
import Table from './table';
// import './table.css'

const DataTable = (props) => {
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
    <Table data={data} />
  )
}

export default DataTable;