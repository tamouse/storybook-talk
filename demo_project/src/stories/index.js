import React from "react"
import { storiesOf } from "@storybook/react"
import { action } from "@storybook/addon-actions"
import { linkTo } from "@storybook/addon-links"

import App from "../App"
import { ButtOn } from "../components/ButtOn"

storiesOf("App", module).add("default", () => <App />)
storiesOf("ButtOn", module)
  .add("click me!", () => (
    <ButtOn onClick={action("Click Me! was clicked")}>Click Me!</ButtOn>
  ))
  .add("click 2", () => (
    <ButtOn onClick={action("Clicker2 was clicked")}>Clicker2</ButtOn>
  ))
