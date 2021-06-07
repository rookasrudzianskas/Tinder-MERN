import './App.css';
import Header from "./components/Header";
import TinderCard from "react-tinder-card";
import TinderCards from "./components/TinderCards";

function App() {
  return (
    <div className="app">
        <Header />
        <TinderCards />
    </div>
  );
}

export default App;
