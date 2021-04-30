import MusicPlayer from '../index';
import React from 'react';
import ReactDOM from 'react-dom';
import Intro from './../index';
import { render, cleanup, fireEvent } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";
import renderer from "react-test-renderer";
import userEvent from '@testing-library/user-event';


window.HTMLMediaElement.prototype.load = () => { /* do nothing */ };
window.HTMLMediaElement.prototype.play = () => { /* do nothing */ };
window.HTMLMediaElement.prototype.pause = () => { /* do nothing */ };
window.HTMLMediaElement.prototype.addTextTrack = () => { /* do nothing */ };

afterEach(cleanup); 

it("renders without crashing", ()=>{
    const div = document.createElement("div");
    ReactDOM.render(<MusicPlayer/>, div);
});

it("check music button playing state", ()=>{
    const {queryByTitle} = render(<MusicPlayer/>);
    expect(queryByTitle('btnPlay')).toBe(null);
    expect(queryByTitle('btnPause')).toBeTruthy();
    fireEvent.click(queryByTitle('btnPause'));
    expect(queryByTitle('btnPlay')).toBeTruthy();
    expect(queryByTitle('btnPause')).toBe(null);
    fireEvent.click(queryByTitle('btnPlay'));
    expect(queryByTitle('btnPlay')).toBe(null);
    expect(queryByTitle('btnPause')).toBeTruthy();
});


it("match snapshot", () => {
    const tree = renderer.create(<MusicPlayer/>).toJSON();
    expect(tree).toMatchSnapshot();
});