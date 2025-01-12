import { li } from "framer-motion/client"
import "./Header.css"
import { Link } from "react-router-dom"

function Header() {
  return (
      <div id='white'>
        <div>
          <img src="./src/assets/releaf-image2.png" alt="releaf" id='adjustsize'/>
          <ul id='nav'>
            <Link to="/" id='nav2'>Home</Link>
            <Link to="/login" id='nav2'>LOGIN</Link>
          </ul>
        </div>
        
      </div>
  )
}

export default Header