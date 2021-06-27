import { render, unmountComponentAtNode } from "react-dom";
import { screen } from '@testing-library/react'

import  { act } from 'react-dom/test-utils';

import {Sum} from './Sum';


let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container); 
  container.remove();
  container = null;
});

it('renders sum of 2 numbers', () => {
  act(() => {
    render(<Sum a ={2} b ={3}/>, container)
});

expect(screen.getByTestId('calc').textContent).toEqual('5')
});

it('renders a message if there are no 2 numbers ', () => {
    act(() => {
        render(<Sum />, container)
    });
    expect(container.textContent).toBe(`Please give 2 numbers to sum`);
    act(() => {
        render(<Sum a = {3}/>, container)
    });
    expect(container.textContent).toBe(`Please give 2 numbers to sum`);
    act(() => {
        render(<Sum a = {3} b = {7} c = {10}/>, container)
    });
    expect(container.textContent).toBe(`3 + 7 = 10`);
});

 