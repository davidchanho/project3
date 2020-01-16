import React, {Component} from 'react';
import auth from '../../services/authService'

class Logout extends Component {
    componentDidMount() {
        auth.logout();
        window.location = '/Login';
    }

    render() {
        return null;
    }
}

export default Logout;