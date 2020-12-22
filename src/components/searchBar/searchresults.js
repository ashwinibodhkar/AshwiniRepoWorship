import React from "react"
import { Link } from "gatsby"

const SearchResults = ({ results }) => (
  <div className="search-results">
    {results.length ? (
      <>
        <div className="ResultsongList">
          <h2>
            {/* {results.length} Songs{results.length === 1 ? "" : `s`} Matched Your Request */}
            Requested Result
          </h2>
          <ul>
            {results.map(result => (
              <li key={result.slug}>
                <Link to={`${result.slug}`}>{result.title}</Link>
                <h6>{result.artist}</h6>
              </li>
            ))}
          </ul>
          </div>
      </>
    ) : (
      <div className="songNotFound">
        <p><span role="img" aria-label="">&#128531;</span>sorry! requested song is not found <br></br>
          <Link to="/contact">Click to request <span role="img" aria-label="">&#128072;</span></Link>
              <br></br>               
               and it will be done! <span role="img" aria-label="">&#128080;</span>
            </p>
         
      </div>
      
    )}
  </div>
)

export default SearchResults

