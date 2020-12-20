import React from 'react'
import { Index } from 'lunr'
import { useStaticQuery, graphql, Link } from "gatsby"
import { useState } from 'react'

export default function SetFavourites(){

    
    const [results, setResults] = useState([])
    const [getId, setGetId] = useState()
    const { LunrIndex } = useStaticQuery(graphql`
        query{
          LunrIndex
        }
    `)

    const index = Index.load(LunrIndex.index)
    const { store } = LunrIndex

    console.log("Index: ", index)

    var id1 = "ba9fde94-6844-592c-b8e3-5f652a677cc9" //this is the id of post new beginning
    var id2 = "5480a22c-ded7-5b67-b4ea-75ed881654ee" //id of hello world
    var idArray = ["ba9fde94-6844-592c-b8e3-5f652a677cc9", "5480a22c-ded7-5b67-b4ea-75ed881654ee"]
    
    //let results = []
    //let resultsId = []
    // idArray.forEach(id=> {
    //     resultsId = index.search(id).map(({ ref }) => {
    //         return{
    //             slug: ref,
    //             ...store[ref]
    //         }
    //     })
    //     setResults(resultsId, ...results)
    //     //console.log("Searched id: ",searchedId)
    // })

        //let searchedId = index.search(id)
        // results = index.search(id1).map(({ ref }) => {
        //     return{
        //         slug: ref,
        //         ...store[ref],
        //     }
        // })
    
    idArray.forEach(searchPostById)
    let searchItem
    function searchPostById(id){
        searchItem = index.search(id).map(( {ref} ) => {
            return{
                slug:ref,
                ...store[ref]
            }
        })
        return(
            setResults(searchItem, ...results)
        )
    }

    console.log("Reuslts array",results)

    return(
        <>
            <h3>From SetFavourites</h3>
            {results.length ? (
                results.map(result => {
                    return(
                        <>
                            <h4>Your favourites</h4>
                            <article key={result.slug}>
                                <h6>
                                    <Link to={result.slug}>
                                        {result.title}
                                    </Link>
                                </h6>
                            </article>
                        </>
                    )
              })
            ): (
                  <h3>Nothing found</h3>
            )}
            
        </>
    )
}