import './App.css';
import Header from "./components/Header";
import TinderCard from "react-tinder-card";
import TinderCards from "./components/TinderCards";
import SwipeButtons from "./components/SwipeButtons";


function App() {
  return (
    <div className="app">
        <Header />
        <TinderCards />
        <SwipeButtons />
    </div>
  );
}

export default App;
