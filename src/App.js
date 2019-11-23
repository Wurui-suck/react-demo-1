import React from 'react';
import './App.css';
import GlobalHeader from './GlobalHeader'
import GlobalMain from './GlobalMain'

class App extends React.Component {
  constructor(props) {
    super()
  }
  render() {
    return (
      <div>
        <GlobalHeader></GlobalHeader>
        <GlobalMain></GlobalMain>
      </div>
    )
  }
}
export default App;
