import React from 'react';
import {shallow} from 'enzyme';
import CheckboxComponent from './CheckboxComponent';
import renderer from 'react-test-renderer';
import {columnsConfig} from './index'
import TableRow from './tableRow'

const selectRows = jest.fn(selection => event => {
  console.log("Mocked function");
});
const rowIndex = 2;
const datum = {
  id:"1"
}

it('renders without crashing', () => {
  shallow(<TableRow key={rowIndex} rowIndex={rowIndex}  datum={datum} {...{columns: columnsConfig, selectRows}} />);
});

it('matches snapshot', () => {
  const app = renderer.create(<TableRow key={rowIndex} rowIndex={rowIndex}  datum={datum} {...{columns: columnsConfig, selectRows}} />).toJSON();
  expect(app).toMatchSnapshot();
});
