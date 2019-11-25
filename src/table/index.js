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
  let [currentPage, setCurrentPage] = useState(1);
  let [currentData, setCurrentData] = useState([]);
  let [neighbour, setNeighbour] = useState(1);
  let numberOfEntry = 100;
  useEffect(() => {
    async function fetchData(){
      // fetch Data
      let data = await fetch('https://jsonplaceholder.typicode.com/photos')
                      .then(respone => respone.json());
      setData(data);
    }
    fetchData();
  }, []);

  useEffect(()=>{
    let totalNumberOfPages = Math.ceil(data.length/numberOfEntry);
    let startIndex = Math.max(currentPage - neighbour, 0) * numberOfEntry;
    let endIndex = Math.min(currentPage + neighbour, totalNumberOfPages) * numberOfEntry;
    let currentData = data.slice(startIndex, endIndex);
    setCurrentData(currentData);
  }, [data, neighbour])

  selectRows = selection => e => {
    data = data.map((d, i) => {
      if(selection && selection.rowIndex === i) {
        d.checked = !Boolean(d.checked);
      }
      if(!selection){
        d.checked = !Boolean(d.checked);
      }
      return d
    })
    setData(data)
  }

  let setNextPage = () => {
    console.log('setNextPage');
    setNeighbour(neighbour++);
    // setCurrentPage(Math.min(currentPage++, Math.ceil(data.length/numberOfEntry)));
  }
  let setPreviousPage = () => {
    console.log('setPreviousPage');
    setCurrentPage(Math.max(currentPage-- , 0));
  }

  return (
    <Table
      setPreviousPage={setPreviousPage}
      setNextPage={setNextPage}
      selectRows={selectRows}
      onRowClick={e => console.log(e)}
      onSelectionChanged={e => console.log(e, 'selection Changed')}
      rows={currentData}
      columns={columnsConfig}
      numberOfEntry={numberOfEntry}
    />
  )
}

export default DataTable;