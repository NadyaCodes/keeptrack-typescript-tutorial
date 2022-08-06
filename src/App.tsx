import React from 'react';
import logo from './logo.svg';
import './App.css';
import { forEachLeadingCommentRange } from 'typescript';
import ProjectsPage from './projects/ProjectsPage';

function App() {
  return (
    // <blockquote cite="Benjamin Franklin">
    //   Tell me and I forget, teach me and I may remember, involve me and I learn.
    // </blockquote>
    <div className="container">
      <ProjectsPage />
    </div>
  );
}

export default App;
