import React,{useState,useEffect} from "react";
import {render} from "react-dom"
import LazyLoad from 'react-lazyload';

const App = ()=>{

    const [name, setName] = useState()
    const [imgSrcList, setImgSrcList]= useState([])

    // fetch random data from random user api
    useEffect(

        fetchRandomUsers,[]
    )

    function fetchRandomUsers(){
        console.log("useeffect")    
        var url= `https://randomuser.me/api/?inc=picture,name,dob,location&&results=${name}`
        fetch(url)
        .then(
            (response)=>{return response.json()}
        )
        .then(
            (data)=>{console.log(data.results),setImgSrcList( data.results)}
        )
    }

    function handleButtonCLick(){
        fetchRandomUsers();
    }
    
    function handleNameChange(e){
        setName(e.target.value)      
    }

    return(
        <div>
           
            {
                name ?
                 ( <input
                    type="text"
                    id = "whiteInput"
                    value ={name}
                    onChange= {handleNameChange}
                    >                                         
    </input> )                                                   
            : 
           (
            <input
            type="text"
            id = "emptyInput"
            value ={name}
            placeholder="enter a random number between 1 and 2000"
            onChange= {handleNameChange}
            >
        </input> 
           )
            }            
            <button        
            onClick={handleButtonCLick}
            >
            clickme to see <b>{name}</b> random people!!
            </button>

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
               <LazyLoad key={ind-22} placeholder={<Loading/>} >

               <img className="image"
               key={ind}
               src={element.picture.large}
               >
               </img>       

               </LazyLoad>
            </div>
               )
            })
        }
        </div>
            
            </div>
        )        
}


const Loading=()=>{
    return(
        <div className="imgPlaceHolder">
            <div className="insideGuy">        
            </div>
        </div>
    )
}

render(<App/>, document.getElementById("root"))