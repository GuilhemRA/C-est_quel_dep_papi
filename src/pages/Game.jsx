import "../App.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import DepRandom from "../components/DepRandom";
import DepRandName from "../components/DepRandName";
import data from "../Data";

export default function Game() {
  return <main>
    <Header/>
    <DepRandom data={data}/>
    <DepRandName data={data}/>
    <Footer />
  
  </main>
}