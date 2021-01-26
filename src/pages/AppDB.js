import React from 'react';
import { BrowserRouter as Router, MemoryRouter, Switch, Route } from 'react-router-dom';

import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import { LinkContainer } from 'react-router-bootstrap';

import UsersList from './UsersList'
import Create from './Create'

import App from './App.css'

const Home = () => <span>Home</span>;



class AppDB extends React.Component {
  render() {
    return (
        <Router>
          <Container className="p-3">
              <h2>
                Current Page is now{' '}
                <Switch>
                  <Route path="/create" exact component={Create} />
                  <Route path="/users/list" exact component={UsersList} />
                  <Route path="/">
                    <Home />
                  </Route>
                </Switch>
              </h2>
              <h2>
                Navigate to{' '}
                <ButtonToolbar className="custom-btn-toolbar">
                  <LinkContainer to="/">
                    <Button>Home</Button>
                  </LinkContainer>
                  <LinkContainer to="/create">
                    <Button>Create</Button>
                  </LinkContainer>
                  <LinkContainer to="/users/list">
                    <Button>Users</Button>
                  </LinkContainer>
                </ButtonToolbar>
              </h2>
          </Container>
        </Router>
    )
  }
}

export default AppDB;
