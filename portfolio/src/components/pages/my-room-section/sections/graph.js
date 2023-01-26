import { LineChart, Line, CartesianGrid, YAxis, XAxis } from "recharts"

import chartData from "../../../data/rctime.json"

function App() {
  return (
    <LineChart width={1000} height={500} data={chartData}>
      <Line type="monotone" dataKey="uv" stroke="green" />
      <CartesianGrid stroke="gray" />
      <YAxis />
      <XAxis dataKey="name" />
    </LineChart>
  )
}

export default App
