class Movie extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //
    // };
  }

  render() {
    return (
      <div className="movie-title">{this.props.movie.title}</div>
    )
  }
}

window.Movie = Movie;
