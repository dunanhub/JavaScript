# Lab 01 — Task 1.2 (Provider Pattern)

This project demonstrates the Provider Pattern using React Context API.
It solves the prop drilling problem by sharing user data through a Provider.

## Features
- UserContext with custom hook `useUser()`
- UserProvider that stores mock user data, permissions and theme settings
- Three nested consumers: Dashboard, Header, UserMenu

## How to run
1. Install dependencies:
   npm install

2. Start development server:
   npm run dev

3. Open the local link from the terminal (usually http://localhost:5173)

## Project structure
src/
- context/UserContext.js
- providers/UserProvider.js
- components/Dashboard.js
- components/Header.js
- components/UserMenu.js
- App.jsx
