import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import Header from '../components/Header';
import './App.css';
import { setSearchField, requestRobots} from '../actions';

const mapStateToProps = state => {
  return {
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event)  => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => /*dispatch(requestRobots()) this would be using redux-thunk*/ requestRobots(dispatch) 
  }
}

class App extends Component {
  /*constructor() {
    super()
    this.state = {
      robots: []
      //searchfield: ''
    }
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

  render() {
    //const { robots /*searchfield*/ } = this.state;
    const { searchField, onSearchChange, robots, isPending } = this.props; //redux
    const filteredRobots = robots.filter(robot =>{
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    })
    return isPending ?
      <h1>Loading</h1> :
      (
        <div className='tc'>
          <Header /> 
          {/*<SearchBox searchChange={this.onSearchChange}/>*/}
          <SearchBox searchChange={onSearchChange} search={searchField}/> 
          <Scroll>
            <ErrorBoundry>
              <CardList robots={filteredRobots} />
            </ErrorBoundry>
          </Scroll>
        </div>
      );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);