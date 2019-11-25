import React, {useEffect, useState} from 'react';
import Table from './table';
import CheckboxComponent from './CheckboxComponent';
// import './table.css'

export const columnsConfig = [
  {
    id: "number",
    label : props => (<input type="checkbox" checked={props.checked} onClick={selectRows()}/>),
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

let selectRows;

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

  selectRows = selection => e => {
    data = data.map((d, i) => {
      if(selection && selection.rowIndex === i){
        d.checked = !Boolean(d.checked);
      }
      if(!selection){
        d.checked = !Boolean(d.checked);
      }
      return d
    })
    setData(data)
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