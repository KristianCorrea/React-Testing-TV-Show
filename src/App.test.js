import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import {act} from 'react-dom/test-utils'
import userEvent from '@testing-library/user-event';

import { fetchShow as mockFetchShow } from "./api/fetchShow";

import App from "./App";
import {show} from './mockData.js'

//Use jest to mock the async function
jest.mock( "./api/fetchShow" );
act(()=>{
            

test("renders App without crashing", async () => {
    mockFetchShow.mockResolvedValueOnce(show);
        
      render(<App />);
    });
})

test("Dropdown menu is rendered", async ()=>{
    mockFetchShow.mockResolvedValueOnce(show);
 
     //ARRANGE
     const { getByText} = render(<App />);
 
     //ASSERT
    await waitFor(() => getByText(/Select a season/i));
 
 })

 test("Season selector is clickable and episodes are rendered on the episodes componenent", async ()=>{
    mockFetchShow.mockResolvedValueOnce(show);
  
     //ARRANGE
     const { getByText} = render(<App />);
  
     //ASSERT
    await waitFor(() => getByText(/Select a season/i));
    //select a season
    userEvent.click(getByText(/Select a season/i));
    //select season 3
    userEvent.click(getByText(/Season 3/i));
     //check if all episodes rendered
     getByText(/Season 3, Episode 1/i);
     getByText(/Season 3, Episode 2/i);
     getByText(/Season 3, Episode 3/i);
     getByText(/Season 3, Episode 4/i);
     getByText(/Season 3, Episode 5/i);
     getByText(/Season 3, Episode 6/i);
     getByText(/Season 3, Episode 7/i);
     getByText(/Season 3, Episode 8/i);
  
  
  }) 