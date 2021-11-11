import React, {Component} from 'react';
import Auth from '../api/Auth';
export const UserContext = React.createContext();

export class UserContextProvider extends Component {
  constructor() {
    super();
    this.state = {
      user: null,
      loading: false,
    };
  }

  componentDidMount = () => {};

  setUser = user => {
    this.setState({user});
  };

  refreshUser = async () => {
    console.log('Refreshing user');
    this.setState({loading: true});
    let response = await new Auth().getProfile();
    if (response.ok) {
      this.setState({user: response.data});
    } else {
      this.setState({user: null});
    }
    this.setState({loading: false});
    return response;
  };

  setLoading = loading => {
    this.setState({loading});
  };

  render() {
    const {children} = this.props;
    const {user, loading} = this.state;
    return (
      <UserContext.Provider
        value={{
          data: {
            user: user,
            loading,
            setUser: this.setUser,
            setLoading: this.setLoading,
            refreshUser: this.refreshUser,
          },
        }}>
        {children}
      </UserContext.Provider>
    );
  }
}

export default UserContextProvider;
