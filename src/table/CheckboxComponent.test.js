import React from 'react';
import {shallow} from 'enzyme';
import CheckboxComponent from './CheckboxComponent';
import renderer from 'react-test-renderer';
import columnsConfig from './index'

const mockedEventhandler = jest.fn(event => {
  console.log("Mocked function");
});

it('renders without crashing', () => {
  shallow(<CheckboxComponent />);
});

it('matches snapshot', () => {
  const app = renderer.create(<CheckboxComponent onChnage={mockedEventhandler} columns={columnsConfig} rows={[]}/>).toJSON();
  expect(app).toMatchSnapshot();
});
