import React from 'react';
import {shallow} from 'enzyme';
import IndexComponent from './indexComponent';

it('renders without crashing', () => {
  shallow(<IndexComponent />);
  const app = renderer.create(<IndexComponent onRowClick={mockedEventhandler} columns={columnsConfig} rows={[]}/>).toJSON();
  expect(app).toMatchSnapshot();
});