import React, {useState} from 'react';


const CheckboxComponent = props => {
  const [hoverState, setHoverState] = useState(props.checked);
  const toggelCheckboxState = e => {
    setHoverState(!hoverState);
  }
  return (
    <input type="checkbox" value={props.id} checked={Boolean(props.checked)} onChange={toggelCheckboxState} />
  )
}
export default CheckboxComponent