import React from "react";
import { render, screen } from '@testing-library/react';
import App from './App';
import { configure, mount } from "enzyme";

import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import { Provider } from "react-redux";
import store from './store/index'
configure({ adapter: new Adapter() });
describe("Estructura", () => {
  let app;
 
  beforeEach(() => {
    app = mount(
      <Provider store={store}>
      <App />
     </Provider>
      
    );
  });
 
 
  it("Debería renderizar un form", () => {
    expect(app.find("form")).toHaveLength(1);
  });

  it('Debería renderizar un input', () => {
    expect(app.find('input')).toHaveLength(1);
  });

  it('Debería renderizar un button con "type" igual a "submit" y con texto "Send"', () => {
    expect(app.find('button[type="submit"]')).toHaveLength(1);
    expect(app.find("button").at(0).text()).toEqual("Send");
  });

})



