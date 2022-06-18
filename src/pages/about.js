//Step 1: Import React
import * as React from 'react'
import { Link } from 'gatsby'

// Step 2: Define your component
const AboutPage = () => {
    return (
        <main>
            <title>Andre Jenkins</title>
            <h1>About Me</h1>
            <p>Andre Jenkins is from Columbia, South Carolina and is an undergrad student at the University of South Carolina. He is majoring in Information Science and intends to pursue am M.A. in Data Science. Andre is currently 24 years old.</p>
<Link to= "/" >Home</Link>
        </main>
    ) 
}    
//Step 3: Export your component
export default AboutPage