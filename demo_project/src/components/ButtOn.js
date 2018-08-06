import React from "react"

export class ButtOn extends React.Component {
  handleClick = e => {
    this.props.onClick("I was clicked, calling my onClick handler now")
  }
  render() {
    return (
      <button
        style={{
          padding: 20,
          margin: 20,
          display: "block",
          backgroundColor: "tomato",
          color: "white",
          fontFamily: "sans-serif",
          fontSize: 24
        }}
        onClick={this.handleClick}
      >
        {this.props.children}
      </button>
    )
  }
}
