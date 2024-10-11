import React from 'react';
import Header from './header';
import Footer from './footer';
import ProductList from './productList';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Header />
      <main>
        <ProductList />
      </main>
      <Footer />
      
        
    </div>
  );
};

export default App;