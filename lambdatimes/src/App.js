import React, { Component } from 'react';
import TopBar from './components/TopBar';
import Header from './components/Header';
import Content from './components/Content/Content';
// import Login from './components/Login'
// import withAuthenticate from './components/Content/withAuthenticate'

const App = () => {
  return (
    <div className="App">
      <TopBar />
      <Header />
      <Content /> 
      {/* <ComponentFromWithAuthenticate /> */}
    </div>
  );
}

// const ComponentFromWithAuthenticate = withAuthenticate(Content)(Login)

export default App;
