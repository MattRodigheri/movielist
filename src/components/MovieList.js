// var MovieList = (props) =>
//     <div>
//       <SearchBar />
//       <button>Search</button>
//       {props.movies.map((movie) =>
//         <Movie movie={movie}/>
//       )}
//     </div>

class MovieList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

render() {
    return (
      <div>
        <SearchBar />
        <button>Search</button>
        {movies.map((movie) =>
          <Movie movie={movie}/>
        )}
      </div>
    )
  }
}

//SearchBar needs to be within <div>
//now that movies are in a class, why am I not using props.movies?


// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
// MovieList.propTypes = {
//   movies: React.PropTypes.array.isRequired
// };
 // In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.MovieList = MovieList;
