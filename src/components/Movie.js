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
//keyword 'this' used in classes! (before props)

 // PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
Movie.propTypes = {
  movie: React.PropTypes.object.isRequired
};
 // In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.Movie = Movie;
