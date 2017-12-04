import React, { Component } from 'react';
import { DropdownButton, MenuItem} from 'react-bootstrap';
import List from './List';

class FilteredList extends Component {
   constructor(props) {
       super(props);
        // TODO: Add a new key/value pair in the state to keep track of type
       this.original = null;
       this.lastDistorted = 0;
       this.state = {
           search: "",
           genre: "",
           min: "",
           max: "",
       };
   }
    // Sets the state whenever the user types on the search bar
   onSearch = (event) => {
       this.setState({search: event.target.value.trim().toLowerCase()});
   }

   filterItem = (item) => {
        // Checks if the current search term is contained in this item
        // TODO: Add condition to check item’s type
      if (this.state.genre === "All" || !this.state.genre){
        if (!this.state.min){
          return item.name.toLowerCase().search(this.state.search) !== -1;
        }
        if (item.price > this.state.min && item.price < this.state.max){
          return item.name.toLowerCase().search(this.state.search) !== -1;
        }
      }
      if (item.genre === this.state.genre){
        if (!this.state.min){
          return item.name.toLowerCase().search(this.state.search) !== -1;
        }
        if (item.price > this.state.min && item.price < this.state.max){
          return item.name.toLowerCase().search(this.state.search) !== -1;
        }
      }
   }
    /* TODO: Add an event handling method for when an item in dropdown is selected
       Per the DropdownButton documentation, this function should take in an eventKey and    
       event
    */
    setGenre = (eventKey) => {
      // console.log("Set Genre");
      // if (!this.original){
      //   console.log("Original is null");
      //   console.log("lastDistorted = " + this.lastDistorted);
      //   if (!this.props.lastDistorted){
      //     console.log("Is not distorted");
      //     this.original = this.props.items.clone();
      //     console.log(this.original);
      //     this.lastDistorted++;
      //   }
      // }
      if (eventKey === "Children"){

      }
      this.setState({genre: eventKey});
    }

    setPriceRange = (eventKey) => {
      console.log("Set Price Range");
      // if (!this.original){
      //   console.log("Original is null");
      //   console.log("lastDistorted = " + this.lastDistorted);
      //   if (!this.props.lastDistorted){
      //     console.log("Is not distorted");
      //     this.original = this.props.items.clone();
      //     console.log(this.original);
      //     this.lastDistorted++;
      //   }
      // }
      if (eventKey === "first"){
        this.setState({min: 5});
        this.setState({max: 8});
      } else if (eventKey === "second"){
        this.setState({min: 8});
        this.setState({max: 11});
      } else if (eventKey === "third"){
        this.setState({min: 11});
        this.setState({max: 14});
      } else if (eventKey === "fourth"){
        this.setState({min: 14});
        this.setState({max: 17});
      } else {
        this.setState({min: ""});
        this.setState({max: ""});
      }
    }

    sortList = (eventKey) => {
          if (eventKey === "default"){
            this.props.items.sort(function(a, b){
              if (a.name < b.name){
                return -1;
              }
              if (a.name === b.name){
                return 0;
              }
              return 1;
            });
          } else if (eventKey === "price"){
            this.props.items.sort(function(a, b){
              return a.price - b.price;
            });
          } else if (eventKey === "page"){
            this.props.items.sort(function(a, b){
              return a.page - b.page;
            });
          }
          this.setState({items:this.props.items});   
    }
    render() {
       return (
        <div>
            <div className="filter-list">
               <h1>Remzi Kitabevi</h1>
                {/* TODO: Add more menu items with onSelect handlers*/}
                  <input type="text" placeholder="Search" onChange={this.onSearch} />
                  <div className="dropdownContainer">
                     <DropdownButton id="typeDropdown" title={"Select genre"} className="dropdown">
                       <MenuItem eventKey="All" onSelect= {this.setGenre}>All</MenuItem>
                       <MenuItem eventKey="Children" onSelect= {this.setGenre}>Children</MenuItem>
                       <MenuItem eventKey="Mystery" onSelect= {this.setGenre}>Mystery</MenuItem>
                       <MenuItem eventKey="Love" onSelect= {this.setGenre}>Love</MenuItem>
                       <MenuItem eventKey="Philosophy" onSelect= {this.setGenre}>Philosophy</MenuItem>
                     </DropdownButton>
                     <DropdownButton id="priceRangeDropdown" title={"Select price range"} className="dropdown">
                      <MenuItem eventKey="all" onSelect= {this.setPriceRange}>All</MenuItem>
                       <MenuItem eventKey="first" onSelect= {this.setPriceRange}>$5 - $8</MenuItem>
                       <MenuItem eventKey="second" onSelect= {this.setPriceRange}>$8 - $11</MenuItem>
                       <MenuItem eventKey="third" onSelect= {this.setPriceRange}>$11 - $14</MenuItem>
                       <MenuItem eventKey="fourth" onSelect= {this.setPriceRange}>$14 - $17</MenuItem>
                     </DropdownButton>
                     <DropdownButton id="priceRangeDropdown" title={"Sort"} className="dropdown">
                      <MenuItem eventKey="default" onSelect= {this.sortList}>Default</MenuItem>
                      <MenuItem eventKey="price" onSelect= {this.sortList}>By Price</MenuItem>
                      <MenuItem eventKey="page" onSelect= {this.sortList}>By Page</MenuItem>
                     </DropdownButton>
                    </div>
                </div>
                    <List items={this.props.items.filter(this.filterItem)} />
                    </div>

            
       );
   }
}
export default FilteredList;