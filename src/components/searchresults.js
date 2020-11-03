import React from "react"
import { Link } from "gatsby"

const SearchResults = ({ results }) => (
  <div className="search-results">
    {results.length ? (
      <>
        <div className="ResultsongList">
          <h2>
            {results.length} Songs{results.length === 1 ? "" : `s`} Matched Your Request
          </h2>
          <ul>
            {results.map(result => (
              <li key={result.slug}>
                <Link to={`${result.slug}`}>{result.title}</Link>
                <h6>{result.artist}</h6>
              </li>
            ))}
          </ul>
              {/* <p>Your requested song is Not found? 😓 <br></br>
              Ask and it will be done!👐
                <br></br>
                <Link to="/contact">Click to request 😇 </Link>
              </p> */}
          </div>
      </>
    ) : (
      <div>
        <p><span role="img" aria-label="">&#128519;</span>sorry! Your requested song is Not found <br></br>
           Ask and it will be done! <span role="img" aria-label="">&#128080;</span>
              <br></br>
               <Link to="/contact">Click to request <span role="img" aria-label=""> &#128519;</span></Link>
            </p>
         
      </div>
      
    )}
  </div>
)

export default SearchResults

