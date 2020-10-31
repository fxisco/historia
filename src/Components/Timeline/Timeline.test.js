import React from 'react';
import { mount, shallow } from 'enzyme';
import Timeline from "./Timeline";

describe('Timeline component', () => {
  test('if not loaded, should not display anything', () => {
    const wrapper = mount(<Timeline />);

    expect(wrapper.find('#timeline-embed')).toHaveLength(0);
  });

  test('should call loadTL when mounted', () => {
    global.TL = {
      Timeline: jest.fn()
    };

    const wrapper = shallow(<Timeline />);
    const instance = wrapper.instance();
    const loadTLFn = jest.spyOn(instance, 'loadTL');

    instance.componentDidMount();

    expect(loadTLFn).toHaveBeenCalledTimes(1);
  });

  test('if loaded is set, should timeline div', () => {
    const timelineConstructor = jest.fn();
    global.TL = {
      Timeline: timelineConstructor
    };

    const wrapper = mount(<Timeline />);
    wrapper.setState({ loaded: true });

    expect(wrapper.find('#timeline-embed')).toHaveLength(1);
  });
});

