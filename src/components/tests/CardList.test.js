import { shallow, mount, render } from 'enzyme';
import React from 'react';
import CardList from '../CardList';

// DOCUMENTATION FOR ENZYME

it('to render cardlist component', () => {
    const mockRobots = [
        {
            id: 1,
            name: "John Snow",
            username: "JohnnJohn",
            email: "something@hey.dk"
        }
    ]
    expect(shallow(<CardList robots={mockRobots}/>)).toMatchSnapshot();

})
