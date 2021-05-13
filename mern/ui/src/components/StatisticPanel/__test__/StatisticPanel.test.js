import React from 'react';
import ReactDOM from 'react-dom';
import StatisticPanel from './../index';
import { render, cleanup } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";
import renderer from "react-test-renderer";
import userEvent from '@testing-library/user-event';


afterEach(cleanup); 

it("renders without crashing", ()=>{
    const div = document.createElement("div");
    ReactDOM.render(<StatisticPanel/>, div);
});

it("match snapshot", () => {
    const tree = renderer.create(<StatisticPanel/>).toJSON();
    expect(tree).toMatchSnapshot();
});

