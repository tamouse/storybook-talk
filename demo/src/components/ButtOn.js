import React from "react"

export class ButtOn extends React.Component {
  handleClick = e => {
    this.props.onClick("CLICK!")
  }
  render() {
    return <button onClick={this.handleClick}>{this.props.children}</button>
  }
}
