import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import { hasToken } from "utils/storage";
class AuthRoute extends Component {
  render() {
    const { component: Component, ...rest } = this.props;
    return (
      <Route
        {...rest}
        render={props => {
          if (hasToken()) {
            return <Component {...props}></Component>;
          } else {
            // this.props.history.push('/login')
            console.log(this.props.location);

            return (
              <Redirect
                to={{
                  pathname: "/login",
                  state: {
                    from: this.props.location.pathname
                  }
                }}
              ></Redirect>
            );
          }
        }}
      ></Route>
    );
  }
}

export default AuthRoute;
