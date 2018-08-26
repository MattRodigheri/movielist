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
  }

  render() {

    var movies = this.state.movies;

    return (
      <div>
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
