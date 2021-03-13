import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount, render, configure, ShallowWrapper, ReactWrapper } from 'enzyme';
import App from '../components/App.jsx';


// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });

// describe('My Test Suite', () => {
//   it('My Test Case', () => {
//     expect(true).toEqual(true);
//   });
// });

describe('unit tests', () => {
  // let shallowWrapper: ShallowWrapper;
  // beforeEach(() => {
  //   const shallowWrapper = shallow(<App />);
  // });
  it ('needs to do a thing', () => {
    const wrapper = shallow(<App />);
    const text = wrapper.find('p').text();
    expect(text).toEqual('hello world');
  })
  // it ('needs to do another thing')
});