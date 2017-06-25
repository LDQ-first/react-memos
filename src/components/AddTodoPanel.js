import React, { Component } from 'react'
import Panel from '../styled/Panel'
import Textarea from '../styled/Textarea'
import Schedule from '../styled/Schedule'
import DatePicker from '../styled/DatePicker'
import SubmitBtn from '../styled/SubmitBtn'


export default class AddTodoPanel extends Component {

    componentDidMount () {
        this.datePicker.value = this.injectDate()
    }

    injectDate() {
        return new Date().toJSON().slice(0, 10)
    }

    quickPick = () => {
        let msec = +new Date(this.datePicker.value)
        const diff = this.select.value * 24 * 3600 * 1000
        msec += diff 
        this.datePicker.value = new Date(msec).toJSON().slice(0, 10)
    } 

    handleKeyPressSubmit = ({keyCode, ctrlKey }) => {
        if(keyCode === 13 && ctrlKey && this.textarea.value.trim()) {
            this.handleSubmit()
        }
    }

    handleSubmit = () => {
        const due = new Date(this.datePicker.value)
        console.log(this.textarea.value.trim(), due)
        this.props.addTodo(this.textarea.value.trim(), due)
    }

    render() {
        return (
            <Panel className='addTodo-panel'>
                <Textarea 
                    type ='submit'
                    placeholder = {'添加点什么呢？'}
                    onKeyDown = {this.handleKeyPressSubmit}
                    innerRef = {node => { this.textarea = node }}
                    title = '按Ctrl + Enter直接发送'
                    spellcheck="false"
                />
                <Schedule>
                    <div>
                        <select
                            defaultValue = {8}
                            ref = {node => this.select = node}
                            onChange = {this.quickPick}
                            title = '完成日期'
                        >
                            <option value='0'>今天</option>
                            <option value='1'>明天</option>
                            <option value='2'>后天</option>
                            <option value='3'>大后天</option>
                            <option value='4'>第五天</option>
                            <option value='5'>第六天</option>
                            <option value='6'>第七天</option>
                            <option value='7'>下周今天</option>
                            <option value='8'>快速选择</option>
                        </select>
                    </div>

                    <div>
                        <DatePicker
                            innerRef={node => this.datePicker = node}
                            type='date'
                            title = '完成日期'
                        />
                    </div>

                    <div>
                        <SubmitBtn
                         type='button' 
                         value = '添加'
                         onClick = {this.handleSubmit}
                         />
                    </div>
                </Schedule>
            </Panel>
        )
    }
}

