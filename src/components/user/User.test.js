import { render, unmountComponentAtNode } from "react-dom";
 
import  { act } from 'react-dom/test-utils';

import { User } from './User';


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

it('Renders user data', async() => {
    const fakeUser = {
        name: 'Antonis',
        age: '40',
        address: 'Schlesischestr 20, 10997 Berlin'
    };
    jest.spyOn(global, 'fetch').mockImplementation((id) => {
        if ( id === '/undefined' ) {
            return console.throw('There is no ID');
        } 
        return Promise.resolve({
            json: () => Promise.resolve(fakeUser)
        });
    });
    await act(async () => {
        render(<User id= "111"/>,container)
    });
    expect(container.querySelector('h3').textContent).toBe(fakeUser.name)
    expect(container.querySelector('h4:first-of-type').textContent).toBe(fakeUser.age)
    expect(container.querySelector('h4:last-of-type').textContent).toBe(fakeUser.address)
    
    global.fetch.mockRestore();
}); 