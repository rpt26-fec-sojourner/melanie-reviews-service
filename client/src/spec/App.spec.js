import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount, render, configure, ShallowWrapper, ReactWrapper } from 'enzyme';
import App from '../components/App.jsx';


// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });

describe('unit tests', () => {
  it ('needs to do a thing', () => {
    var wrapper = shallow(<App />);
    expect(wrapper.exists()).toBe(true);
  })
  it ('should render a header div using the header component', () => {
    var wrapper = mount(<App />);
    var text = wrapper.find('#reviewheader').text();
    expect(text).toEqual('/ Star Image Here /');
  })
  // it ('should render only 6 reviews to the page', () => {
  //   var wrapper = mount(<App />);
  //   var rendered = wrapper.find('.singlereview');
  //   console.log(rendered);
  //   expect(rendered.length).toEqual(6);
  // })

});