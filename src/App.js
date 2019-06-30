import React, {Component} from 'react';
import List from './components/List';
import BadgeButton from './components/BadgeButton';

class App extends Component {
  render() {
    return (
      <div className="container">
        <BadgeButton />
        <List/>
      </div>
    );
  }
}
export default App;