
import { Link } from "react-router-dom";

// Exporting Header to App
export default function App() {
    return (
        <header>
            {/* Header Title */}
            <h1 className="title"><Link to="/Home">Sameeha Raiba</Link></h1>

            {/* Header Nav */}
            <nav>
                <ul>
                    <li><Link to="/Home">Home</Link></li>
                    <li><Link to="/About">About</Link></li>
                    <li><Link to="/Projects">Projects</Link></li>
                    <li><Link to="/Contact">Contact</Link></li>
                </ul>
            </nav>
        </header>
    );
}