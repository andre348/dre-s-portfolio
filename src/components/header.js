import * as React from "react"
import { Link } from 'gatsby'
import { navigate } from "gatsby"

const Header = () => {
    const triggernavigation = () => {
        navigate ("/about")
    }
    return (
    <header>
    <div>
        <h1><Link to="/">Andre Jenkins</Link></h1>
        <h3>Cybersecurity & Information Design</h3>
        <button onClick={() => triggernavigation()}>Learn More</button>
    </div>
    <nav>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact Me</Link></li>
            <li><Link to="/blog">Blog</Link></li>
        </ul>
    </nav>
    </header>
    )
}
  
    
export default Header