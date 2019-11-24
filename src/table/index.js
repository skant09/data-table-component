import React, {useEffect, useState} from 'react';
import { connect } from 'react-redux';
import Table from './table';
// import './table.css'

const IndexComponent = props => {
  const [hoverState, setHoverState] = useState();
  const setCheckboxState = state => e => {
    setHoverState(state);
  }
  if(hoverState){
    return <input type="checkbox" value={props.id} checked onChange={console.log(props) || setCheckboxState(false)} />
  }
  return (
    <span onClick={setCheckboxState(true)}>{props.albumId}</span>
  )
}


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