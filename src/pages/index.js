//Step 1: Import React
import * as React from 'react'
import * as React from "../components/layout"
import { Link } from 'gatsby'

//Step 2: Define your component
const BlogPage = () => {
  return (
    <main>
      <title>Andre Jenkins</title>
     <h1>Welcome to my website.</h1>
     <p>This is the Blog Page.</p>
     <Link to="/">Back to Home</Link>
     </main>
  )
}

// Step 3: Export your component

export default BlogPage
