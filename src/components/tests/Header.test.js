import { shallow, mount, render } from 'enzyme';
import React from 'react';
import Header from '../Header';

// DOCUMENTATION FOR ENZYME

it('to render cardlist component', () => {
    
    expect(shallow(<Header />)).toMatchSnapshot();

})
