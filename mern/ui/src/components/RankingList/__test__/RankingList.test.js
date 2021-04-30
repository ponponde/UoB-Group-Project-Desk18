import React from 'react';
import ReactDOM from 'react-dom';
import RankingList from './../index';
import { render, cleanup } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";
import renderer from "react-test-renderer";
import userEvent from '@testing-library/user-event';


afterEach(cleanup); 

it("renders without crashing", ()=>{
    const div = document.createElement("div");
    ReactDOM.render(<RankingList/>, div);
});

