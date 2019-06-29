import React, {Component} from 'react';
import List from './components/List';
import Badge from './components/Badge';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Badge />
        <List/>
      </div>
    );
  }
}
export default App;