import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

it('validates JSON', () => {
  // test for valid JSON
  // test for null JSON
  // test for extreme incorrect JSON
  // test for long JSON string
  // test for empty JSON object string
});