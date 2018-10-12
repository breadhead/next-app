import react, { Component } from 'react'

interface Props {
  count: number

  inc(): void
  dec(): void
  reset(): void
}

class Counter extends Component<Props> {
  public render() {
    const { count, inc, dec, reset } = this.props
    return (
      <div>
        <h1>Count: <span>{count}</span></h1>
        <button onClick={inc}>+1</button>
        <button onClick={dec}>-1</button>
        <button onClick={reset}>Reset</button>
      </div>
    )
  }
}

export default Counter
