import 'babel-polyfill';
import Accordion from '../src';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import accordionData from '@economist/component-sections-card/context';
import chai from 'chai';
chai.should();
describe('Accordion', () => {

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
