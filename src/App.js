import './App.css';

import Home from './component/home/Home';
import Footer from "./component/footer/Footer";
import Header from "./component/header/Header";
import Tours from './component/tours/Tours';
import data from './data/db.json';


export default function myApp() {
  return (
    <div classname="app">
      <Home />
    </div>

  );
}


