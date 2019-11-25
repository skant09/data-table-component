import React from 'react';
import {shallow} from 'enzyme';
import renderer from 'react-test-renderer';

import Table, {columnsConfig} from './table';

const mockedEventhandler = jest.fn(event => {
  console.log("Mocked function");
});

it('renders without crashing', () => {
  shallow(<Table />);
  const app = renderer.create(<Table onRowClick={mockedEventhandler} columns={columnsConfig} rows={[]}/>).toJSON();
  expect(app).toMatchSnapshot();
});
