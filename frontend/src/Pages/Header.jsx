import { li } from "framer-motion/client"
import "./Header.css"
import { Link } from "react-router-dom"

function Header() {
  return (
      <div id='white'>
        <div>
          <img src="./src/assets/releaf-image2.png" alt="releaf" id='adjustsize'/>
          <ul>
            <li id='nav2'>
              releaf
            </li>
            <Link to="/login" id='nav'>LOGIN</Link>
            <Link to="/" id='nav'>HOME</Link>
          </ul>
        </div>
        
      </div>
  )
}

export default Header