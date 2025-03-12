import loveletter from '../images/loveletter.png';
import findapair from '../images/find a pair.png';
import { Link } from "react-router-dom";
import '../css/App.css';

function Home() {
  return (
    <>
      <div className="App">
        Welcome to my personal love letter to my beloved Virginia
      </div>
      <div className="DifferentPages">
        <div className="loveletterdiv">
          <img src={loveletter} alt="Loveletter" className="loveletter" />
          <br></br>
          <Link to="/loveletter">
            <button className="loveletter-button"> <strong> Go to love letter </strong> </button>
          </Link>
        </div>
        <div className="findapairdiv">
          <img src={findapair} alt="find a pair" className="findapair" />
          <br></br>
          <Link to="/findapair">
            <button> <strong>Go to find a pair</strong> </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Home;
