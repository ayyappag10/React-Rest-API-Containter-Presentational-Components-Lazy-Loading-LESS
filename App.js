import React,{useState} from "react"
import {render} from "react-dom"
import SearchBar from "./SearchBar"
import DisplayUsers from "./DisplayUsers"

const App = ()=>{

    const [imgSrcList, setImgSrcList] = useState([])
    function fetchRandomUsers(noOfUsers){
        var url= `https://randomuser.me/api/?inc=picture,name,dob,location&&results=${noOfUsers}`
        fetch(url)
        .then(
            (response)=>{return response.json()}
        )
        .then(
            (data)=>{console.log(data.results),setImgSrcList( data.results)}
        )
    }
    return(
        <div>
        <SearchBar clbck = {fetchRandomUsers} ></SearchBar>
        <DisplayUsers imgSrcList={imgSrcList}></DisplayUsers>
        </div>
    )
}

render(<App/>, document.getElementById("root"))