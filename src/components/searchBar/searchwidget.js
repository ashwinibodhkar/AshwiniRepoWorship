import React, { useState, useRef  } from "react"
import lunr, { Index } from "lunr"
import { graphql, useStaticQuery } from "gatsby"
import SearchResults from "./searchresults"
import "./search-form.css";
import { Modal} from "react-bootstrap";
import SearchIcon from '@material-ui/icons/Search';

import Fab from '@material-ui/core/Fab'
const SearchWidget = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const inputEl = useRef(null)
  const [value, setValue] = useState("")
  const [results, setResults] = useState([])
  const { LunrIndex } = useStaticQuery(graphql`
    query {
      LunrIndex
    }
  `)
  const index = Index.load(LunrIndex.index)
  const { store } = LunrIndex
  const handleChange = e => {
    const query = e.target.value || ""
    setValue(query)
    if (!query.length) {
    setResults([])
  }

  const keywords = query
    .trim() // remove trailing and leading spaces
    .replace(/\*/g, "") // remove user's wildcards
    .toLowerCase()
    .split(/\s+/) // split by whitespaces
  // do nothing if the last typed keyword is shorter than 2
    if (keywords[keywords.length - 1].length < 2) {
      return
    }
    try {
    // andSearch stores the intersection of all per-term results
      let andSearch = []
      keywords
        .filter(el => el.length > 1)
        // loop over keywords
        .forEach((el, i) => {
        // per-single-keyword results
        const keywordSearch = index
          .query(function(q) {
            q.term(el, { editDistance: el.length > 5 ? 1 : 0 })
            q.term(el, {
              wildcard:
                lunr.Query.wildcard.LEADING | lunr.Query.wildcard.TRAILING,
            })
          })
          .map(({ ref }) => {
            return {
              slug: ref,
              ...store[ref],
            }
          })
        // intersect current keywordSearch with andSearch
        andSearch =
          i > 0
            ? andSearch.filter(x => 
              keywordSearch.some(el => el.slug === x.slug))
            : keywordSearch
      })
      setResults(andSearch)
    } catch (error) {
    console.log(error)
    }
    
  }
  return (
    <div className="search_bar">
      <Fab >
        <SearchIcon onClick={handleShow} />
      </Fab>
        
        
      
      <Modal show={show} onHide={handleClose}  size="lg"  >
        <Modal.Body className="input-box m-0" closeButton>
          <div className="search-wrapper">
            
            <div role="search">
            <SearchIcon />
                <input
                id="search-input"
                ref={inputEl}
                type="search"
                value={value}
                onChange={handleChange}
                placeholder="Search by title, artist, category or lyrics"
              />
              {value.trim().length > 1 && <SearchResults results={results} />}
              {value && (
                
                  <button
                    type="button"
                    aria-label="Reset search"
                    onClick={e => {
                    handleChange(e)
                    inputEl.current.focus()
                    }}
                  >
                  </button>
                )}
            </div>
            
        
          </div>
        </Modal.Body>
      </Modal> 
    </div>
  )
}
export default SearchWidget
