import React from 'react';
import ReactDOM from 'react-dom';
import MusicPlayer from './../index';
import { render, cleanup } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";
import renderer from "react-test-renderer";


afterEach(cleanup); 

it("match snapshot", () => {
    const tree = renderer.create(<MusicPlayer/>).toJSON();
    expect(tree).toMatchSnapshot();
});