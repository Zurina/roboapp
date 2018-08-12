import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import Header from '../components/Header';
import './MainPage.css';

class MainPage extends Component {

  /*constructor() {
    super()
    this.state = {
      robots: []
      //searchfield: ''
    }
  }*/

  /*onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value })
  }*/

  componentDidMount() {
    /*fetch('https://jsonplaceholder.typicode.com/users')
      .then(response=> response.json())
      .then(users => {this.setState({ robots: users})});*/
    this.props.onRequestRobots(); // thanks to redux
  }

  /*onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value })
  }*/

  filterRobots = (/*robots*/) => {
    return this.props.robots.filter(robot =>{
        return robot.name.toLowerCase().includes(this.props.searchField.toLowerCase());
    })
  }

  render() {
    //const { robots /*searchfield*/ } = this.state;
    const { onSearchChange, robots, isPending } = this.props; //redux
    
    return (
        <div className='tc'>
          <Header /> 
          {/*<SearchBox searchChange={this.onSearchChange}/>*/}
          <SearchBox searchChange={onSearchChange} /> 
          <Scroll>
            {isPending ? <h1>Loading</h1> : 
            <ErrorBoundry>
              <CardList robots={this.filterRobots(robots)} />
            </ErrorBoundry>
            }
          </Scroll>
        </div>
    );
  }
}

export default MainPage;