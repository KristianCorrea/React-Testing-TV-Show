import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import Episodes from "./Episodes.js"
import { episodes } from '../mockData.js';




test("Episodes are rendering", ()=>{
    //ARRANGE
    const { getByText} = render(<Episodes episodes={episodes['Season 1']}/>);

    getByText(/Season 1, Episode 1/i);
    getByText(/Season 1, Episode 2/i);
    getByText(/Season 1, Episode 3/i);
    getByText(/Season 1, Episode 4/i);
    getByText(/Season 1, Episode 5/i);
    getByText(/Season 1, Episode 6/i);
    getByText(/Season 1, Episode 7/i);
    getByText(/Season 1, Episode 8/i);
});

