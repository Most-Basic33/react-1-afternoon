import React, { Component } from 'react';


import TopicBrowser from './components/TopicBrowser/TopicBrowser';
import EvenAndODD from './components/Topics/EvenAndOdd';
import FilterObjects from './components/Topics/FilterObject';
import FilterString from './components/Topics/FilterString';
import Palindrome from './components/Topics/Palindrome';
import Sum from './components/Topics/Sum';
class App extends Component {
  render() {
    return (
      <div>
        <TopicBrowser />
        <EvenAndODD />
        <FilterObjects />
        <FilterString />
        <Palindrome />
        <Sum />
      </div>
    )
  }
}

export default App;
