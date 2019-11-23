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
      setData(data);
    }
    fetchData();
  }, []);

  return (
    <Table
      rows={data} 
      columns={[{
        id: "albumId",
        label : "AlbumId",
        element : data => <span>{data.albumId}</span>,
        width: "100px"
      }, {
        id: "id",
        label : "id",
        element : data => <span>{data.id}</span>,
        width: "100px"
      }, {
        id: "thumbnailUrl",
        label : "thumbnailUrl",
        element : data => <span>{data.thumbnailUrl}</span>,
        width: "100px"
      },{
        id: "title",
        label : "Title",
        element : data => <span>{data.title}</span>,
        width: "100px"
      }]}
    />
  )
}

export default DataTable;