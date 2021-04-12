import React from 'react';
import { MAIN_API_URL } from '../config/index'

const handleResponse = (response) => response.json();

const register = (name, email, password) => {
  return fetch(`${MAIN_API_URL}/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name, email, password }),
  }).then(handleResponse);
};