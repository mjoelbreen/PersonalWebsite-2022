import * as React from "react"


const pageStyles = {
  color: "#232129",
 
  
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
  
  
}



const headingStyles = {
  textAlign: "center",
  marginTop: 100,
  marginBottom: 64,
  fontSize: 50,
  
  
}
const headingAccentStyles = {
  fontSize: 30,
  color: "#663399",
}
const paragraphStyles = {
  display: "flex",
  margin: "5% 5%",
  fontSize: 16,
  marginBottom: 48,
}
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
}
const listStyles = {
  marginBottom: 96,
  paddingLeft: 0,
}
const listItemStyles = {
  fontWeight: 300,
  fontSize: 24,
  maxWidth: 560,
  marginBottom: 30,
}

const linkStyle = {
  color: "#8954A8",
  fontWeight: "bold",
  fontSize: 16,
  verticalAlign: "5%",
}

const docLinkStyle = {
  ...linkStyle,
  listStyleType: "none",
  marginBottom: 24,
}


const profileImageStyles = {
  display: "flex",
  margin: "0 auto",
  height: 200,
  width: 200,
  borderRadius: "50%",
  zIndex: 1
}

const descriptionStyle = {
  color: "#232129",
  fontSize: 14,
  marginTop: 10,
  marginBottom: 0,
  lineHeight: 1.25,
}

const docLink = {
  text: "Documentation",
  url: "https://www.gatsbyjs.com/docs/",
  color: "#8954A8",
}

const badgeStyle = {
  color: "#fff",
  backgroundColor: "#088413",
  border: "1px solid #088413",
  fontSize: 11,
  fontWeight: "bold",
  letterSpacing: 1,
  borderRadius: 4,
  padding: "4px 6px",
  display: "inline-block",
  position: "relative",
  top: -2,
  marginLeft: 10,
  lineHeight: 1,
}

const IndexPage = () => {
  return (
    
    <main style={pageStyles}>
     
      <h1 style={headingStyles}>
        Martin Breen
        <br />
        <span style={headingAccentStyles}>XR Software Developer</span>
      
        </h1>
      
        <img src="https://ca.slack-edge.com/T01E7DMQ83T-U03GD47SPBQ-a033b2f28121-512" style={profileImageStyles}/>
       
      <span style={paragraphStyles}>
      I'm a developer based in New Orleans.
        </span>
        
       
        
     
      
      
      
      
      
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Martin Breen</title>
