import { Component } from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export class Searchbar extends Component{
    state = {
    searchName:""
    }
    
    handleNameChange = (evt) => {
        this.setState({ searchName: evt.currentTarget.value.toLowerCase() });
        
    }

    handleSubmit = (evt) => {
        evt.preventDefault();

        if (this.state.searchName.trim() === "") {
            toast.error("The search string cannot be empty. Please specify your search query.", { theme: "colored" });
            return;
    }
        this.props.onSubmit(this.state.searchName)
        this.reset();

    }

    reset = () => {
        this.setState({
        searchName: ""
    })
}

    render() {
        return (
<header className="searchbar">
<form onSubmit={this.handleSubmit} className="form">
    <button type="submit" >
      <span >Search</span>
    </button>

    <input
      type="text"
      autoComplete="off"
      autoFocus
      placeholder="Search images and photos"
      value={this.state.searchName}
      onChange={this.handleNameChange}
                        
    />
  </form>
</header>)}
}