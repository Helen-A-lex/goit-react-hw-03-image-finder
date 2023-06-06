import { Component } from "react"
import { ToastContainer } from 'react-toastify';


import { Searchbar } from "./Searchbar/Searchbar"

export class App extends Component {
  state = {
    searchName:""
  }
  
  handleFormSubmit = searchName => {
    this.setState({searchName})
    
  }
  render() {
    return (
    <>
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ToastContainer autoClose={3000}/>
    </>)
    

  }
    
  
}
