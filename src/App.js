import React, {Fragment, Component} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";
import Search from './components/users/Search';
import axios from 'axios';
import Alert from './components/layout/Alert';
import About from './components/pages/About';
import User from './components/users/User';
import './App.css';

class App extends Component {
  state = {
    users: [],
    loading: false,
    alert: null,
    user: {},
    repos: []
  };

  // async componentDidMount(){
  //   this.setState({ loading: true });
    
  //   const res = await axios.get(`https://api.github.com/users?client_id=
  //   ${process.env.REACT_APP_GITHUB_ID}&client_secret=
  //   ${process.env.REACT_APP_GITHUB_SECRET}`);
  //   // console.log(res.data);

  //   this.setState({
  //     users: res.data,
  //     loading: false
  //   })    
  // };

  searchUsers =  async text => {
    this.setState({ loading: true });

    // console.log(text);
    const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=
    ${process.env.REACT_APP_GITHUB_ID}&client_secret=
    ${process.env.REACT_APP_GITHUB_SECRET}`);
    // console.log(res.data.items);

    this.setState({
      users: res.data.items,
      loading: false
    })
  };

  getUser= async (username) => {
    this.setState({ loading: true });

    // console.log(text);
    const res = await axios.get(`https://api.github.com/users/${username}?client_id=
    ${process.env.REACT_APP_GITHUB_ID}&client_secret=
    ${process.env.REACT_APP_GITHUB_SECRET}`);
    // console.log(res.data.items);

    this.setState({
      user: res.data,
      loading: false
    })
  };

  getUserRepos= async (username) => {
    this.setState({ loading: true });

    // console.log(text);
    const res = await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=
    ${process.env.REACT_APP_GITHUB_ID}&client_secret=
    ${process.env.REACT_APP_GITHUB_SECRET}`);
    // console.log(res.data.items);

    this.setState({
      repos: res.data,
      loading: false
    })
  };

  clearUsers = () => this.setState({ users: [], loading: false });

  setAlert = (messege, type) => {
    this.setState({alert: { messege: messege, type: type }})

    setTimeout(() => this.setState({
      alert: null
    }), 3500);
  }
  
  render(){
    const {loading, users, alert, user, repos} = this.state;

    return (
      <Router>
        <div className='App'>
          <Navbar />
          <div className="container">
            <Alert alert={alert} />
            <Switch>
              <Route exact path='/' render={props => (
                <Fragment>
                  <Search 
                    searchUsers={this.searchUsers}
                    clearUsers={this.clearUsers}
                    showClear={users.length > 0 ? true : false}
                    setAlert={this.setAlert}
                  />
                  <Users loading={loading} users={users} />
                </Fragment>
              )} />
              <Route exact path='/about' component={About} />
              <Route exact path='/user/:login' render={props => (
                <User 
                  {...props}
                  getUser={this.getUser}
                  getUserRepos={this.getUserRepos}
                  user={user}
                  repos={repos}
                  loading={loading}
                />
              )} />
            </Switch>
            
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
