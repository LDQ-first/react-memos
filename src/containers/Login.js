import React, { Component } from 'react'
import { connect } from 'react-redux'
import TextField from 'material-ui/TextField'
import Overlay from '../styled/Overlay'
import LoginForm from '../styled/LoginForm'
import LoginInfo from '../styled/LoginInfo'
import Button from '../styled/Button'
import Welcome from '../styled/Welcome'
import LoginIndicator from '../styled/LoginIndicator'
import errorMsgTranslator from '../api/errorMsgTranslator'
import { login, logOut } from '../actions'
import { getIsLogging, getLogError, getCurrentUser } from '../reducers'

class Login extends Component {

    componentDidMount () {
        console.log('login loaded')
    }

    componentWillReceiveProps(nextProps) {
        if(this.props.isLogged !== nextProps.isLogged) {
            this.props.history.push('/')
        }
    }


    render () {
        const { onLogin, onLogoutClick, isLogging, loginError, isLogged } = this.props
        return !isLogged ? (
            <Overlay login>
                <LoginForm
                    onSubmit = {
                        (e) => {
                            e.preventDefault()
                            onLogin(
                                this.usnInput.input.value,
                                this.pswInput.input.value
                            )
                        }
                    }
                >
                    <LoginInfo error={loginError}>
                        {loginError ? errorMsgTranslator(loginError) : 'Welcome'}
                    </LoginInfo>
                    <TextField
                        className = 'username'
                        ref={node => this.usnInput = node}
                        floatingLabelText='UserName'
                    />
                    <br/>
                    <TextField
                        className='password'
                        ref={node => this.pswInput = node}
                        floatingLabelText='Password'
                        type='password'
                    />
                    <br/>
                    <LoginIndicator
                        size={40}
                        left={135}
                        top={240}
                        status={'loading'}
                        hide={!isLogging}
                    />
                    <Button login bigger label='登录'
                        type='submit'
                        innerRef={node => this.submitBtn = node}
                        hide={isLogging}
                        onTouchTap = {(e) => {
                            e.preventDefault()
                            onLogin(
                                this.usnInput.input.value,
                                this.pswInput.input.value
                            )
                        }}
                    />
                </LoginForm>
            </Overlay>
        ) : (
            <Overlay login>
                <LoginForm>
                    <Welcome
                        isLogged = {isLogged}
                        username = {isLogged.attributes.username}
                        onLogoutClick = {onLogoutClick}
                    />
                </LoginForm>
            </Overlay>
        )
    }
}

const mapStateToProps = (state) => ({
   isLogging: getIsLogging(state),
   loginError: getLogError(state),
   isLogged: getCurrentUser(state)
})

const mapDispatchToProps = (dispatch) => ({
     onLogin (username, password) {
        dispatch(login(username, password))
    },
    onLogoutClick () {
        dispatch(logOut())
    }
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login)
