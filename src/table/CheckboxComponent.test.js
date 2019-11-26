import React from 'react';
import {shallow} from 'enzyme';
import CheckboxComponent from './CheckboxComponent';
import renderer from 'react-test-renderer';
import columnsConfig from './index'

const mockedEventhandler = jest.fn(event => {
  console.log("Mocked function");
});

it('renders without crashing', () => {
  shallow(<CheckboxComponent checked={false} />);
});

it('matches snapshot', () => {
  const app = renderer.create(<CheckboxComponent onChange={mockedEventhandler} columns={columnsConfig} checked={true} />).toJSON();
  expect(app).toMatchSnapshot();
});
