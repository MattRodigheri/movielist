class MovieList extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: [
        { title: 'Mean Girls' },
        { title: 'Hackers' },
        { title: 'The Grey' },
        { title: 'Sunshine' },
        { title: 'Ex Machina' }
      ],
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.addMovie = this.addMovie.bind(this);

  }

  addMovie(event) {
    this.state.movies.push({title: this.state.value});
    // this.state.movies.push({title: this.state.value});
    this.setState({
      movies: this.state.movies
    });
  }

  handleChange(event) {
    this.setState({
      value: event.target.value
    });

  }

  handleSubmit(event) {
    var matches = [];
    for (var i = 0; i < this.state.movies.length; i++) {
      if ((this.state.movies[i].title).includes(this.state.value)) {
        matches.push(this.state.movies[i])
      }
    }
    this.setState({
      movies: matches
    });
    this.state.value = ''
  }

  render() {

    var movies = this.state.movies;

    return (
      <div>
        <AddMovie add={this.addMovie} inputVal={this.handleChange}/>
        <SearchBar search={this.handleSubmit} inputVal={this.handleChange}/>
        {movies.map((movie) =>
          <Movie movie={movie}/>
        )}
      </div>
    )
  }
}

ReactDOM.render(<MovieList />, document.getElementById('app'));

window.MovieList = MovieList;
