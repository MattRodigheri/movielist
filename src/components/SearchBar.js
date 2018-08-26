class SearchBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <input type='text' onChange={this.props.inputVal} />
        <button onClick={this.props.search}>Search</button>
      </div>
    )
  }
}

window.SearchBar = SearchBar;
