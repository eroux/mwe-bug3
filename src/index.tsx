import React from "react"
import { createRoot } from 'react-dom/client';
import {
  defaultGraphNode
} from "mwe-bug2"

function App() {
  return (
    <>{defaultGraphNode.uri}</>
  )
}

const container = document.getElementById("root");
const root = createRoot(container!);
root.render(<App />);
