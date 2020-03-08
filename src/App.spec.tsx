import React from 'react';
import App from './App';

import ReactRenderer, {
  ReactTestRenderer,
  ReactTestInstance,
} from 'react-test-renderer';

const renderer: ReactTestRenderer = ReactRenderer.create(<App />);

test('First screen navigates to seconds screen', () => {
    const first: ReactTestInstance = renderer.root.findByProps({children: "1st screen"});

    ReactRenderer.act(() => first.props.onPress());

    expect(() => renderer.root.findByProps({children: "2nd screen"})).not.toThrowError();
});

test('Second screen navigates to third screen', async () => {
    const second: ReactTestInstance = renderer.root.findByProps({children: "2nd screen"});

    ReactRenderer.act(() => second.props.onPress());

    expect(() => renderer.root.findByProps({children: "3rd screen"})).not.toThrowError();
});

test('Third screen navigates to first screen', async () => {
    const third: ReactTestInstance = renderer.root.findByProps({children: "3rd screen"});

    ReactRenderer.act(() => third.props.onPress());

    expect(() => renderer.root.findByProps({children: "1st screen"})).not.toThrowError();
});
