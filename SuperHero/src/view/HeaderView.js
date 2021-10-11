
import { Link } from 'react-router-dom';

const HeaderView = () =>{
    
    return(
        <header>
            <div className="container">
                <div className="inner-content">
                    <div className="brand">
                        <Link to="/">
                            <button className="headerBut">  Homepage  </button>
                        </Link>
                    </div>
                    <div className="divider"></div>
                    <ul className="nav-links">
                        <li>
                            <Link to="/myscores">
                                <button className="headerBut">  My Scores  </button>
                            </Link>
                        </li>
                        <div className="divider"></div>
                        <li>
                            <Link to="/scoreboard">
                                <button className="headerBut">  Scoreboard  </button>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
}

export default HeaderView;