import logo from './logo.svg';
import './App.css';

import Footer from "./component/Footer";
import Header from "./component/Header";
import Tours from './component/Tours';
import data from './data/db.json';

export default function myApp() {
    console.log(data)
    return (
        <section>
            <Header />

            <Tours data={data} />

            <Footer />

        </section>
    );
}


