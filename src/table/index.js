import React, {useEffect, useState} from 'react';
import { connect } from 'react-redux';
import Table from './table';
import IndexComponent from './indexComponent';
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
      onRowClick={e => console.log(e)}
      onSelectionChanged={e => console.log(e, 'selection Changed')}
      rows={data} 
      columns={[{
        id: "number",
        label : "#",
        element : props => <input type="checkbox" value={props.id} checked onChange={e => console.log(props)} />
      },{
        id: "albumId",
        label : "AlbumId",
        element : IndexComponent,
        width: "100px",
        textAlign: 'right'
      }, {
        id: "id",
        label : "id",
        element : data => <span>{data.id}</span>,
        width: "100px",
        textAlign: 'right'
      }, {
        id: "thumbnailUrl",
        label : "thumbnailUrl",
        element : data => <span>{data.thumbnailUrl}</span>,
        width: "100px",
        textAlign: 'left'
      },{
        id: "title",
        label : "Title",
        element : data => <span>{data.title}</span>,
        width: "100px",
        textAlign: 'left'
      }]}
    />
  )
}


export default DataTable;