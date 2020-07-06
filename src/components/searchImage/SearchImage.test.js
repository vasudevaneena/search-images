import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { configure, shallow } from "enzyme";
import SearchImage from "./SearchImage";

configure({ adapter: new Adapter() });

let wrapper;

beforeEach(() => {
  wrapper = shallow(<SearchImage />);
});


describe(" rendering", () => {
  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
}); });
    