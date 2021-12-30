import React from "react";
import { mount } from "enzyme";
import Root from 'Root';
import App from 'components/App';
import moxios from 'moxios';

let wrapped;

beforeEach(() => {
    moxios.install();
    moxios.stubRequest('http://jsonplaceholder.typicode.com/comments', {
        status: 200,
        response: [{name:'Fetched 1'}, {name: "Fetched 2"}]
    });
    wrapped = mount(
        <Root>
            <App />
        </Root>
    );
});

afterEach(()=>{
    moxios.uninstall();
    wrapped.unmount();
});

it('can fetch a list of comments and display them', (done) => {
    
    wrapped.find('.fetch-comments').simulate('click');
    
    moxios.wait(() => {
        wrapped.update();
        expect(wrapped.find('li').length).toEqual(2);
        done();
    });
    
});