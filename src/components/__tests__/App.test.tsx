import * as React from "react"
import { render } from "react-testing-library"

import { App } from "../App"

test("App Component should render with Hello, World 🌎", () => {
  const wrap = render(<App />)

  expect(wrap.getByText("Hello, World 🌎")).toBeInTheDocument()
})
