import 'babel-polyfill';
import Accordion from '..';
import React from 'react/addons';
import accordionData from '@economist/component-sections-card/context';
import chai from 'chai';
const TestUtils = React.addons.TestUtils;
chai.should();
describe('Accordion', () => {
  it('is compatible with React.Component', () => {
    Accordion.should.be.a('function')
      .and.respondTo('render');
  });

  it('renders a React element', () => {
    React.isValidElement(<Accordion list={[ accordionData ]} />).should.equal(true);
  });

  describe('Rendering', () => {
    const renderer = TestUtils.createRenderer();
    it.skip('FILL THIS IN', () => {
      renderer.render(<Accordion list={[ accordionData ]} />, {});
      renderer.getRenderOutput().should.deep.equal(
        <div />
      );
    });

  });

});
