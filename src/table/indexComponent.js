import React, {useState} from 'react';


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
export default IndexComponent