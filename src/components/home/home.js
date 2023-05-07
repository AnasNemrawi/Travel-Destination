

import React from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';
import Tours from '../tours/Tours';
import Nav from '../header/nav/nav';
function Home(props) {

  return (
    <div>

      <Header />

      <Tours DATA1={props.DATA} />
      <Footer />

    </div>
  );
}

export default Home;