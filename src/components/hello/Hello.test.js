import { render, unmountComponentAtNode } from "react-dom";
import {act} from 'react-dom/test-utils';

import {Hello} from './Hello';


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

it('renders with or without name', () => {
    act(() => {
        render(<Hello />, container);
    });
    expect(container.textContent).toBe('Hey stranger');

   const user = 'Antonis';

    act(() => {
        render(<Hello name = {user}/>, container);
    });
    expect(container.textContent).toBe('Hello, ' + user);
});