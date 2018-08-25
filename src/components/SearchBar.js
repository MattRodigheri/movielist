class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
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
    console.log(this.state.value);
  }

  render() {
    return (
      <div>
        <input type='text' value={this.state.value} onChange={this.handleChange} />
        <button onClick={this.handleSubmit}>Search</button>
      </div>
    )
  }
}

window.SearchBar = SearchBar;
