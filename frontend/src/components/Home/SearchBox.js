import React from "react";

export default class SearchBox extends React.Component {
  constructor() {
    super();
    this.state = { search: "" };
    this.onChange = this.onChange.bind(this);
  }

  onChange(ev) {
    this.setState({ search: ev.target.value });
  }

  render() {
    return (
      <form>
        <input
          name="search-box"
          ariaLabel="search box"
          id="search-box"
          value={this.state.search}
          placeholder="What is it that you truly desire?"
          onChange={this.onChange}
        />
      </form>
    );
  }
}
