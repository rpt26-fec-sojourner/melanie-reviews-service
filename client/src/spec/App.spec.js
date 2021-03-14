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
  it ('should render reviews to the page', () => {
    var wrapper = mount(<App />);
    var text = wrapper.find('#reviewheader').text();
    expect(text).toEqual('Star Image Here');
  })

});