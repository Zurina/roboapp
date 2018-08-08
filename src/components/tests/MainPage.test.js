import { shallow, mount, render } from 'enzyme';
import React from 'react';
import MainPage from '../MainPage';

// DOCUMENTATION FOR ENZYME
// https://blog.usejournal.com/lean-testing-or-why-unit-tests-are-worse-than-you-think-b6500139a009

let wrapper;
beforeEach(() => {
    const mockProps = {
        onRequestRobots: jest.fn(),
        robots: [],
        searchField: '',
        isPending: false
    }
    wrapper = shallow(<MainPage {...mockProps}/>)
});

it('renders mainpage without crashing', () => {
    expect(wrapper).toMatchSnapshot();
});

it('filters robots correctly', () => {
    const mockProps2 = {
        onRequestRobots: jest.fn(),
        robots: [{
            id: 3,
            name: 'John',
            email: 'John@gmail.com'
        }],
        searchField: 'j',
        isPending: false
    }

    const wrapper2 = shallow(<MainPage {...mockProps2}/>)

    expect(wrapper2.instance().filterRobots([])).toEqual([{
        id: 3,
        name: 'John',
        email: 'John@gmail.com'
    }]);
});

it('filters robots correctly 2', () => {
    const mockProps3 = {
        onRequestRobots: jest.fn(),
        robots: [{
            id: 3,
            name: 'John',
            email: 'John@gmail.com'
        }],
        searchField: 'a',
        isPending: false
    }
    const filteredRobots = [];
    const wrapper3 = shallow(<MainPage {...mockProps3}/>)

    expect(wrapper3.instance().filterRobots([])).toEqual(filteredRobots);
});