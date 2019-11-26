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
const row = {
  id: '1',
  albumId: '1'
}

it('renders without crashing', () => {
  shallow(<TableRow key={rowIndex} rowIndex={rowIndex}  row={row} {...{columns: columnsConfig, selectRows}} />);
});

it('matches snapshot', () => {
  const app = renderer.create(<TableRow key={rowIndex} rowIndex={rowIndex}  row={row} {...{columns: columnsConfig, selectRows}} />).toJSON();
  expect(app).toMatchSnapshot();
});
