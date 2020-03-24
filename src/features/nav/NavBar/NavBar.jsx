import React, { Component } from "react";
import {connect} from 'react-redux';
import { withFirebase } from 'react-redux-firebase'
import { Menu, Container, Button } from "semantic-ui-react";
import { NavLink, Link, withRouter } from "react-router-dom";
import SignedOutMenu from "../Menus/SignedOutMenu";
import SignedInMenu from "../Menus/SignedInMenu";
import { openModal } from '../../modals/modalActions'
import { logout } from '../../auth/authActions'

const actions = {
  openModal,
  logout
};

const mapState = (state) => ({
  auth: state.firebase.auth
})

class NavBar extends Component {

  handleSignedIn = () => {
    this.props.openModal('LoginModal')
  };

  handleSignedOut = () => {
    this.props.firebase.logout();
    this.props.history.push("/");
  };

  handleRegister = () => {
    this.props.openModal('RegisterModal')
  }

  render() {
    const { auth } = this.props;
    const authenticated = auth.isLoaded && !auth.isEmpty;
    return (
      <Menu inverted fixed="top">
        <Container fluid className="nav">
          <Menu.Item as={Link} to="/" header>
            <img src="/assets/logo.png" alt="logo" />
            Re-vents
          </Menu.Item>
          <Menu.Item as={NavLink} to="/events" name="Events" />
          {authenticated && (
            <Menu.Item as={NavLink} to="/people" name="People" />
          )}

          <Menu.Item as={NavLink} to="/test" name="Test" />
          {authenticated && (
            <Menu.Item>
              <Button
                as={Link}
                to="/createEvent"
                floated="right"
                positive
                inverted
                content="Create Event"
              />
            </Menu.Item>
          )}
          {authenticated ? (
            <SignedInMenu auth={auth} signOut={this.handleSignedOut} />
          ) : (
            <SignedOutMenu signIn={this.handleSignedIn} register={this.handleRegister} />
          )}
        </Container>
      </Menu>
    );
  }
}

export default withRouter(withFirebase(connect(mapState, actions)(NavBar)));
