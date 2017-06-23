import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

class Main extends Component {
    componentDidMount () {
        console.log('main loaded')
    }

    render () {

        return (
            <div className='todo-main'>
                
            </div>
        )
    }
}

const mapStateToProps = (state) => ({

})

export default connect(mapStateToProps)(Main)

