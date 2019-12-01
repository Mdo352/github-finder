import React, {Component} from 'react';
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";
import Search from './components/users/Search';
import axios from 'axios';
import Alert from './components/layout/Alert';
import './App.css';

class App extends Component {
  state = {
    users: [],
    loading: false,
    alert: null
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

  clearUsers = () => this.setState({ users: [], loading: false });

  setAlert = (messege, type) => {
    this.setState({alert: { messege: messege, type: type }})

    setTimeout(() => this.setState({
      alert: null
    }), 3500);
  }
  
  render(){
    const {loading, users, alert} = this.state;

    return (
      <div className='App'>
        <Navbar />
        <div className="container">
          <Alert alert={alert} />
          <Search 
            searchUsers={this.searchUsers}
            clearUsers={this.clearUsers}
            showClear={users.length > 0 ? true : false}
            setAlert={this.setAlert}
          />
          <Users loading={loading} users={users} />
        </div>
      </div>
    )
  }
}

export default App;
