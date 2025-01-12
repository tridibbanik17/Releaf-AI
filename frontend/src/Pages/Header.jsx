import { li } from "framer-motion/client"
import "./Header.css"
import { Link } from "react-router-dom"

function Header() {
  return (
      <div id='white'>
        <div>
          <Link to="/" id='adjustsize'><img src="./src/assets/releaf-image2.png" alt="releaf" id='adjustsize'/></Link>
          <ul>
            <Link to="/" id='nav2'>releaf</Link>
            <Link to="/login" id='nav'>Log in</Link>
            <Link to="signup" id='nav'>Sign up</Link>
            <Link to="/query" id='nav'>Query</Link>
            <Link to="/" id='nav'>Home</Link>
          </ul>
        </div>
        
      </div>
  )
}

export default Header