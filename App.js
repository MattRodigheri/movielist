class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [
        { title: 'Mean Girls' },
        { title: 'Hackers' },
        { title: 'The Grey' },
        { title: 'Sunshine' },
        { title: 'Ex Machina' }
      ]
    };
  }

  render() {

    movies = this.state.movies;

    return (
      <div>
        <SearchBar />
        <MovieList />
      </div>
    )
  }
}

ReactDOM.render(React.createElement(App, { movies: movies }), document.getElementById('app'));
