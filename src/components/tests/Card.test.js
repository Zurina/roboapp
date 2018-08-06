import { shallow, mount, render } from 'enzyme';
import React from 'react';
import Card from '../Card';

// DOCUMENTATION FOR ENZYME

it('to render card component', () => {
    //expect(shallow(<Card />).length).toEqual(1)

    //snapshot testing is usefull for small stateless components
    // takes a snapshot of the card - how it should look like, 
    // so if any changes is made to it, the snapshot "test"
    // fails. if the change was intentional, and how it should be
    // you can overwrite the current snapshot to a new one
    expect(shallow(<Card />)).toMatchSnapshot();

})
