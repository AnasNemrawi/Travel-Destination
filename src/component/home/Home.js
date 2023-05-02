import "./Home.css";
import Tours from "../tours/Tours";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import data from "../../data/db.json";

export default function Home() {
    console.log(data);
    return (
        <div className="home">
            <Header />
            <Tours data={data} />
            <Footer />
        </div>
    );
}
