import React from "react"
class  SearchBar extends React.Component{

    constructor(props){
        super(props)
        this.state ={
            name: ""
        }
        this.handleNameChange = this.handleNameChange.bind(this)
        this.handleButtonCLick = this.handleButtonCLick.bind(this)
    }

    handleNameChange(evnt){
        this.setState({
            name: evnt.target.value
        })
    }
    
     handleButtonCLick(){
        this.props.clbck(this.state.name)
    }

    render(){
    return(
        <div>        
        {
            name ?
             ( <input
                type="text"
                id = "whiteInput"
                value ={this.state.name}
                onChange= {this.handleNameChange}
                >                                         
                </input>
                 )                                                   
                : 
                ( <input
                type="text"
                id = "emptyInput"
                value ={this.state.name}
                placeholder="enter a random number between 1 and 2000"
                onChange= {this.handleNameChange}
                >
                </input> )
        } 

        <button        
        onClick={this.handleButtonCLick}
        >
        clickme to see <b>{this.state.name}</b> random people!!
        </button>
        </div>
    )
    }
}

export default SearchBar;