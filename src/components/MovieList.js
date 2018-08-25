class MovieList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //value: ''
    };
  }

  render() {



    return (
      <div>
        <SearchBar />
        {movies.map((movie) =>
          <Movie movie={movie}/>
        )}
      </div>
    )
  }
}

// var movies = this.props.movies;//list of movies
// var moviesSearchedForAreAvailable = [];
//
// for (var i = 0; i < this.props.movies.length; i++) {
//   //if (this.props.movies[i].title === SEARCHINPUTVALUE) {
//     moviesSearchedForAreAvailable.push(
//       <div className="movie-title">{this.props.movie[i].title}</div>
//     );
//   }
// }

//components should have their own state!!
//check react page for handling text inputs
//<input onchange = {}
//state of search bar will change state of movielist page
//app will have a search method that will take in the searchbar output which will be activated on button click

// render() {
//     const filterText = this.props.filterText;
//     const inStockOnly = this.props.inStockOnly;
//
//     const rows = [];
//     let lastCategory = null;
//
//     this.props.products.forEach((product) => {
//       if (product.name.indexOf(filterText) === -1) {
//         return;
//       }
//       if (inStockOnly && !product.stocked) {
//         return;
//       }
//       if (product.category !== lastCategory) {
//         rows.push(
//           <ProductCategoryRow
//             category={product.category}
//             key={product.category} />
//         );
//       }
//       rows.push(
//         <ProductRow
//           product={product}
//           key={product.name}
//         />
//       );
//       lastCategory = product.category;
//     });
// return (
//       <table>
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Price</th>
//           </tr>
//         </thead>
//         <tbody>{rows}</tbody>
//       </table>
//     );
//   }
// }


// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
// MovieList.propTypes = {
//   movies: React.PropTypes.array.isRequired
// };
 // In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.MovieList = MovieList;
