import React from "react";
import agent from "../../agent";

export default class SearchBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = { search: "" };
    this.onChange = this.onChange.bind(this);
  }

  onChange(ev) {
    this.setState({ search: ev.target.value });
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.search !== this.state.search &&
      this.state.search.length >= 3
    ) {
      const title = this.state.search;

      this.props.onChangeSearch(
        title,
        (page) => agent.Items.byTitle(title, page),
        agent.Items.byTitle(title)
      );
    }
  }

  render() {
    return (
      <form style={{ display: "inline", margin: "0 0.5em" }}>
        <input
          name="search-box"
          style={{ width: "17em" }}
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
