import React from 'react';
import './App.css';
import { Route, Link } from 'react-router-dom';

// custom api helper
import { loginUser, registerUser, verifyUser, getAdmins } from './services/api_helper';

// custom components
import Login from './components/Login';
import Register from './components/Register';
import Footer from './components/Footer';
import Header from './components/Header';
import GameBoard from './components/GameBoard';
import GuestLanding from './components/GuestLanding';
import UserLanding from './components/UserLanding';
import AdminLanding from './components/AdminLanding'



class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentUser: null,
      errorText: '',
      category: 'animals',
      admin: false
    }
  }

  // login
  handleLogin = async (e, loginData) => {
    e.preventDefault();
    if (!loginData.username || !loginData.password) {
      this.setState({
        errorText: 'You must supply a username AND password'
      })
    } else {
      const currentUser = await loginUser(loginData);
      this.setState({
        currentUser,
        errorText: '',
        admin: true
      })
    }
  }

  // register
  handleRegister = async (e, registerData) => {
    e.preventDefault();
    if (!registerData.username || !registerData.password) {
      this.setState({
        errorText: 'You must supply a username AND password ya animal'
      })
    } else {
      const currentUser = await registerUser(registerData);
      this.setState({
        currentUser,
        errorText: ''
      })
    }
  }

  // verify
  handleVerify = async () => {
    const currentUser = await verifyUser();
    if (currentUser) {
      this.setState({
        currentUser
      })
    }
  }

  checkForAdmin = async () => {
    const adminList = await getAdmins();
    const admin = adminList.filter(name =>
      name.username === this.state.currentUser.username
    )

    if (admin.length > 0) {
      // console.log("checkForAdmin admin: " + admin.length + " " + admin[0].username)
      // console.log("checkForAdmin currentUser: " + this.state.currentUser.username)
      // console.log("YOU ARE ADMIN")
      this.setState({
        admin: true
      })
    } else {
      // console.log("YOU ARE NOT ADMIN")
      this.setState({
        admin: false
      })
    }
  }

  // logout
  handleLogout = () => {
    this.setState({
      currentUser: null,
      admin: false
    })
    localStorage.removeItem('authToken');
  }

  componentDidMount = async () => {
    await this.handleVerify();
    if (this.state.currentUser !== null && this.state.currentUser.username)
      this.checkForAdmin();
  }

  render() {
    return (
      <div className="App" >

        <Header />

        <div>
          {this.state.currentUser ?
            <div>

              <p>Hello, {this.state.currentUser.username}</p>
              <button onClick={this.handleLogout}>Logout</button>
            </div>
            : <Link to='/login' > Login </Link>
          }
        </div>

        <div>
          {this.state.currentUser ?
            <div>
              <p>Hello, {this.state.currentUser.username}</p>
              <button onClick={this.handleLogout}>Logout</button>
            </div>
            : <Link to='/register' > Register </Link>
          }
        </div>



        <div className="login-register-wrappers">
          <Route path="/login" render={() => (
            <div>
              <Login
                handleLogin={this.handleLogin}
                currentUser={this.state.currentUser}
              />
            </div>
          )} />

          <Route path="/register" render={() => (
            <div>
              <Register
                handleRegister={this.handleRegister}
                currentUser={this.state.currentUser}
              />
            </div>
          )} />
        </div>


        <div>
          {this.state.errorText &&
            <p className="error">{this.state.errorText}</p>}
        </div>


        <main>

          <Route path="/guest-landing" render={() => <GuestLanding />} />
          <Route path="/user-landing" render={() =>
            <UserLanding />} />

          {this.state.admin &&
            <Route path="/admin-landing" render={() => <AdminLanding />} />
          }

          <Route path="/gameboard" render={() => (
            <div>
              <GameBoard
                category={this.state.category} />
            </div>
          )} />

        </main>

        <footer>
          <Footer />
        </footer>

      </div>
    );
  }
}

export default App;