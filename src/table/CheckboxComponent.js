import React, {useState} from 'react';
import PropTypes from 'prop-types';

const CheckboxComponent = props => {
  const [checkedState, setcheckedState] = useState(props.checked);
  const toggelCheckboxState = e => {
    setcheckedState(!checkedState);
  }
  return (
    <input type="checkbox" value={props.id} checked={Boolean(props.checked)} onChange={toggelCheckboxState} />
  )
}
export default CheckboxComponent

CheckboxComponent.propTypes = {
  id: PropTypes.number,
  checked: PropTypes.bool,
};