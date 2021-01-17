import React from 'react';
import Row from './Row';
import Banner from './Banner';
import REQUESTS from './request';



import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">


      <Banner>
<h1>
  Banner
</h1>
      </Banner>


        <Row title="Trending Movies" fetchUrl = {REQUESTS.fetchMovies}></Row>

        <Row title="Action movies" fetchUrl = {REQUESTS.fetchPopular}></Row>
        <Row title="Adventure movies" fetchUrl = {REQUESTS.fetchKidMovies}></Row>
        <Row title="Drama movies" fetchUrl = {REQUESTS.fetchKidMovies}></Row>
        <Row title="Romantic movies" fetchUrl = {REQUESTS.fetchMovies}></Row>

        <h1>
          TrailSeq

        </h1>
      </header>

       
    </div>
  );
}

export default App;
