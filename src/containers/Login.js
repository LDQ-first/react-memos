import React, { Component } from 'react'
import { connect } from 'react-redux'
import TextField from 'material-ui/TextField'
import Overlay from '../styled/Overlay'
import LoginForm from '../styled/LoginForm'
import LoginInfo from '../styled/LoginInfo'
import Button from '../styled/Button'
import Welcome from '../styled/Welcome'
import LoginIndicator from '../styled/LoginIndicator'


class Login extends Component {

    render () {

        return (
            <Overlay>

            </Overlay>
        )
    }
}

const mapStateToProps = (state) => {

}

const mapDispatchToProps = (dispatch) => {

}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login)