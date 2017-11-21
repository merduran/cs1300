import React, { Component } from 'react';
import './App.css';
import FilteredList from './FilteredList';
/*
    This list of produce that is passed into the FilteredList component.
    Notice that it is a list of javascript objects where {key: value}.
*/
const produce = [
 {name: "Diary of a Wimpy Kid: Double Down", author: "Jeff Kinney", genre: "Children", price: 8.78, page: 224, src:"diary of a whimpy kid.jpeg"},
 {name: "Dork Diaries 12: Tales from a Not-So-Secret Crush Catastrophe", author: "Rachel Renée Russell", genre: "Children", price: 10.49, page: 311, src:"Dork Diaries 12- Tales from a Not-So-Secret Crush Catastrophe.jpg"},
 {name: "First Comes Love", author: "Emily Giffin", genre: "Love", price: 7.49, page: 224, src:"First Comes Love.jpeg"},
 {name: "Lizzy the Lioness", author: "Lisa Bevere", genre: "Children", price: 12.49, page: 32, src:"Lizzy-the-Lioness.jpeg"},
 {name: "Love Me Sweet", author: "Tracy Brogan", genre: "Love", price: 14.99, page: 413, src:"Love Me Sweet.jpeg"},
 {name: "Origin", author: "Dan Brown", genre: "Mystery", price: 14.99, page: 300, src:"Origin.jpeg"},
 {name: "Redemption Road", author: "John Hart", genre: "Mystery", price: 10.99, page: 464, src:"Redemption Road.jpeg"},
 {name: "The 48 Laws of Power", author: "Robert Greene", genre: "Philosophy", price: 10.99, page: 273, src: "The 48 Laws of Power.jpeg"},
 {name: "The Art of War", author: "Sun Tzu", genre: "Philosophy", price: 2.99, page: 228, src:"The Art of War.jpeg"},
 {name: "The Book of Five Rings", author: "Miyamoto Musashi", genre: "Philosophy", price: 7.99, page: 189, src:"The Books of Five Rings.jpeg"},
 {name: "The Course of Love", author: "Alain de Botton", genre: "Love", price: 11.99, page: 330, src:"The Course of Love.jpeg"},
 {name: "The Pecan Man", author: "Cassie Dandridge Selleck", genre: "Mystery", price: 9.99, page: 144, src:"The Pecan Man.jpeg"},
];

class App extends Component {
   render() {
       return (
           <div className="App">
                {/*
                  The list of produce will be passed into the FilteredList
                  component the items property.
                */}
               <FilteredList items={produce} />
           </div>
       );
   }
}

export default App;