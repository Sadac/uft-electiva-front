import React from 'react';
import { Container } from 'react-bootstrap';
import ReactDOM from 'react-dom';
import App from './App';
import { containerMargin } from "./styles"

export const API_URL = 'https://uft-electiva.herokuapp.com'

ReactDOM.render(
  <React.StrictMode>
    <Container style={containerMargin} >
      <App />
    </Container>
    
  </React.StrictMode>,
  document.getElementById('root')
);