import React, { Component } from 'react';
/*
 The list component will take the list of items passed in as a property
 and create an HTML list with those item. In this example, we are passing in the
 filtered produce list, but this component can be used for other types of items
  as long as it has a name.
*/
class List extends Component {
   renderList() {
       /*
          Javascript map will let you iterate and modify each item in a list.
          In this example, we are changing each item
          (ex. {name: "Apple", type: "Fruit"}) into a HTML list element.
//        */
// const items = this.props.items.map(item => {
// //            return (
//                 <div className="Card">
//                     <div key={item.number}>{item.number}</div>
//                     <div key={item.name}>{item.name}</div>
//                     <img key={item.ThumbnailImage} src={item.ThumbnailImage} alt="Sorry no pokemon..."/>
//                     <Typing className="Typing" type1={item.type[0]} type2={item.type[1]} />
//                 </div>)
//        });

//        return items;
// }
        const items = this.props.items.map(item => {
          return (
              <div className="container">
                <img className="profilepic" src={item.src}></img>
                  <div className="text">
                    <li className="name" key={item.name}>{item.name}</li>
                    <li className="author" key={item.author}>By {item.author}</li>
                    <li className="genre" key={item.genre}>{item.genre}</li>
                    <li className="author" key={item.page}>{item.page} pages</li>
                    <li className="price" key={item.price}>${item.price}</li>
                    <button>Purchase Now</button>
                  </div>
              </div>)
          });

       return items;
   }

   render() {
       return (
           <ul>
               {this.renderList()}
           </ul>
       );
   }
}

export default List;