import React from "react"
import PlaceHolder from  "./PlaceHolder"
import LazyLoad from 'react-lazyload';

const DisplayUsers = ({imgSrcList})=>{
        return(
                <div id="photoGrid">
                {
                imgSrcList.map((element,ind) => {                
                   return( <div>
                   <div className="info"
                   key={ind -2}>
                    <h2
                    key={ind -1}>
                        Bio
                    </h2>
                    <ul>
                        <li>Name: {element.name.title} . {element.name.first}</li>
                        <li>age: {element.dob.age}</li>
                        <li>city: {element.location.city}</li>
                    </ul>
    
                    </div>
                   <LazyLoad 
                   key={ind-22}
                   placeholder= {<PlaceHolder></PlaceHolder>}
                   >
                   <img className="image"
                   key={ind}
                   src={element.picture.large}
                   >
                   </img>       
    
                   </LazyLoad>
                </div>
                   )
                 }
                )
                }
                </div>
                )
    }
export default DisplayUsers;
