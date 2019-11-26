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
  let [currentPage, setCurrentPage] = useState(0);
  let [currentData, setCurrentData] = useState([]);
  let [isLoadingData, setIsLoadingData] = useState(false);
  let [neighbour] = useState(2);
  const numberOfEntryPerPage = 100;
  const totalNumberOfPages = Math.ceil(data.length/numberOfEntryPerPage);

  useEffect(() => {
    async function fetchData(){
      // fetch Data
      let startIndex = currentPage * numberOfEntryPerPage;
      let url = "https://jsonplaceholder.typicode.com/photos?";
      setIsLoadingData(true);
      let _data = await fetch(url + '_start='+ startIndex + '&_limit=' + numberOfEntryPerPage)
                      .then(respone => respone.json());
      setIsLoadingData(false);
      setData([...data, ..._data]);
    }
    fetchData();
  }, [currentPage]);

  useEffect(()=>{
    let startIndex = Math.max(currentPage - neighbour, 0) * numberOfEntryPerPage;
    let endIndex = Math.min(currentPage + neighbour, totalNumberOfPages) * numberOfEntryPerPage;
    let currentData = data.slice(startIndex, endIndex);
    setCurrentData(currentData);
  }, [data, currentPage, neighbour])

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
    let startIndex = currentPage * numberOfEntryPerPage;
    if(startIndex > data.length) return;
    setCurrentPage(currentPage++);
  }
  let setPreviousPage = () => {
    setCurrentPage(currentPage--);
  }
  return (
    <>
      <Table
        setNextPage={setNextPage}
        selectRows={selectRows}
        onRowClick={e => console.log(e)}
        onSelectionChanged={e => console.log(e, 'selection Changed')}
        rows={currentData}
        columns={columnsConfig}
        numberOfEntry={numberOfEntryPerPage}
      />
      {isLoadingData && <div>
        <span style={{width: '100%', textAlign: "center", fontSize: '24px'}}>...Loading</span>
      </div>}
    </>
  )
}

export default DataTable;