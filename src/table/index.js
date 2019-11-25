import React, {useEffect, useState} from 'react';
import Table from './table';
import CheckboxComponent from './indexComponent';
import {startWorker, stopWorker} from './worker'
// import './table.css'

export const columnsConfig = [
  {
    id: "number",
    label : props => (<input type="checkbox" checked={props.checked} onClick={selectAllRows}/>),
    element : CheckboxComponent
  },{
    id: "albumId",
    label : "AlbumId",
    element : props => <span>{props.albumId}</span>,
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
  }
]

let selectAllRows;

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

  // let w = startWorker();  

  // console.log(w);
  selectAllRows = async function(e){
    let state = data[0].checked;
    let string = JSON.stringify(data);
    let bufView = new Int8Array(data.length);
    bufView.set(data);
    let w =  await startWorker(); 
    data.length = 10;
    w.postMessage(Buffer.from(JSON.stringify(data)));
    // w.postMessage(function(d){
    //   d.checked = Boolean(state);
    //   return d;
    // });
    // setData(data);
  }

  return (
    <Table
      onRowClick={e => console.log(e)}
      onSelectionChanged={e => console.log(e, 'selection Changed')}
      rows={data} 
      columns={columnsConfig}
    />
  )
}

export default DataTable;