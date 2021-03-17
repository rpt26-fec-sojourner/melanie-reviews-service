import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount, render, configure, ShallowWrapper, ReactWrapper } from 'enzyme';
import App from '../components/App.jsx';
import jsdom from 'jsdom';
var JSDOM = jsdom
// const { JSDOM } = jsdom;
// import { expect } from 'chai';


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
    expect(text).toContain('/ Star Image Here /');
  })
  it('should receive reviews from server and render them', () => {
    var wrapper = mount(<App />);
    expect( wrapper.find('.singlereview').hostNodes().length ).to.equal(6)
    // console.log(wrapper.find('.singlereview').hostNodes())
    // expect(wrapper.find('.singlereview').hostNodes().length).toBe(6);
  })
  // it ('should render only 6 reviews to the page', () => {
  //   var wrapper = mount(<App />);
  //   var rendered = wrapper.find('.singlereview');
  //   console.log(rendered);
  //   expect(rendered.length).toEqual(6);
  // })

});