import { shallow, mount, render } from 'enzyme';
import React from 'react';
import CounterButton from '../CounterButton';

// DOCUMENTATION FOR ENZYME

it('to render counterbutton component', () => {
    const mockColor = 'red';
    expect(shallow(<CounterButton color={mockColor}/>)).toMatchSnapshot();
});

it('correctly increments the counter', () => {
    const mockColor = 'red';
    const wrapper = shallow(<CounterButton color={mockColor}/>)

    const shouldUpdate = wrapper.instance().shouldComponentUpdate(wrapper.props(), wrapper.state())
    expect(shouldUpdate).toBe(false)

    wrapper.find('[id="counter"]').simulate('click');
    wrapper.find('[id="counter"]').simulate('click');
    expect(wrapper.state()).toEqual({ count: 2 })
    wrapper.find('[id="counter"]').simulate('click');
    expect(wrapper.state()).toEqual({ count: 3 })
    wrapper.find('[id="counter"]').simulate('keypress');
    expect(wrapper.state()).toEqual({ count: 3 })
    expect(wrapper.props().color).toEqual('red')
});

