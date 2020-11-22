import React from "react";
import Img from "gatsby-image"
import {useStaticQuery, graphql} from "gatsby"
import {FeatureImageWrapper} from "./image-elements"


const FeatureImage = ({ fixed }) => {
    
    const data = useStaticQuery(graphql`
        query {
            imageSharp(fixed: {originalName: {eq: "guitar.jpg"}}){
                fixed {
                    ...GatsbyImageSharpFixed
                }
            }
        }
    `)
    return(
        <FeatureImageWrapper>
            <Img fixed={fixed ? fixed : data.imageSharp.fixed} style = {{
                position: "relative",
                width: "100%",
                display: "flex" ,
                
                
                }} 
            />
        </FeatureImageWrapper>
    )
}

export default FeatureImage