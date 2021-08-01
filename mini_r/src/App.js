import React from 'react';
import Headers from './Headers';
import Article from './Article';
import Routes from './routes';
import Footer from './Footer';

function App (props) {
  return (
    <div>
      <Headers />
      <Article />
      <Routes />
      <Footer />
    </div>
  );
};

export default App;
