import React from 'react';
import {shallow} from 'enzyme';
import renderer from 'react-test-renderer';


import App from './App';
import Table from './table';

it('renders without crashing', () => {
  shallow(<App />);
  const app = renderer.create(<App />).toJSON();
  expect(app).toMatchSnapshot();
});

it('renders with header and table', () => {
  const app = shallow(<App />);
  const header = <header className="App-header">Datatable</header>;
  const table = <Table />
  expect(app).toContainReact(header);
  expect(app).toContainReact(table);
});
