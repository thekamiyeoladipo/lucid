import React, { createContext, useReducer, useEffect } from 'react';

// Initial state from localStorage or default
const initialState = JSON.parse(localStorage.getItem('dreams')) || [];

export const DreamContext = createContext();

const dreamReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_DREAM':
      return [action.payload, ...state];
    case 'DELETE_DREAM':
      return state.filter(dream => dream.id !== action.payload);
    case 'UPDATE_DREAM':
      return state.map(dream =>
        dream.id === action.payload.id ? action.payload : dream
      );
    default:
      return state;
  }
};

export const DreamProvider = ({ children }) => {
  const [dreams, dispatch] = useReducer(dreamReducer, initialState);

  // Sync to localStorage
  useEffect(() => {
    try {
      const data = JSON.stringify(dreams);
      if (JSON.stringify(state.dreams).length < 4000000) {
        sessionStorage.setItem("dreams", JSON.stringify(state.dreams));
      } else {
        console.warn("Dreams too large to store");
      }
    } catch (error) {
      console.error("Failed to save dreams:", error);
    }
  }, [dreams]);
}