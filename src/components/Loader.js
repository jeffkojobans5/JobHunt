import React from "react"

//import content loader 
import ContentLoader from "react-content-loader"

const MyLoader = (props) => (
  <div style={{backgroundColor:'white' , borderRadius : '5px' , marginBottom : '1.5rem'}}>
  <ContentLoader 
    speed={2}
    width={600}
    height={140}
    viewBox="0 0 600 140"
    backgroundColor="#fff"
    foregroundColor="#f3f3f3"
    {...props}
  >
    <rect x="157" y="96" rx="3" ry="3" width="87" height="24" /> 
    <rect x="155" y="52" rx="3" ry="3" width="300" height="35" /> 
    <rect x="8" y="9" rx="3" ry="3" width="129" height="124" /> 
    <rect x="155" y="10" rx="3" ry="3" width="87" height="24" />
  </ContentLoader>
  </div>
)

export default MyLoader
