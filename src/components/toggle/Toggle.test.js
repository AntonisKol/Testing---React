import { render, unmountComponentAtNode } from "react-dom";
import  { act } from 'react-dom/test-utils';
import { Toggle } from './Toggle';


let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exit
  unmountComponentAtNode(container); 
  container.remove();
  container = null;
});

it ('Changes the test when clicked', () => {
    const onChange = jest.fn();//It creates a function


    act(() => {
        render(<Toggle onChange = {onChange}/>, container);
    });
    const btn = document.querySelector('[data-testid=toggle]');
    expect(btn.textContent).toBe('Turn On');

    act(() => {
        btn.dispatchEvent(new MouseEvent('click', {bubbles: true}));
    }); 
    expect(onChange).toHaveBeenCalledTimes(1);
    expect(btn.textContent).toBe('Turn Off');
    

    act(() => {
      for (let i = 0; i < 5; i++)
       {btn.dispatchEvent(new MouseEvent('click', {bubbles: true}));}
    }); 
    expect(onChange).toHaveBeenCalledTimes(6);
    expect(btn.textContent).toBe('Turn On');
   
});