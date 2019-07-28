import React, { Component } from 'react'

//This component will be class component becouse we have state
class AddTodo extends Component {
    state={
        contetnt:''
    }
    //this function changing content
    handleChange = (e) => {
        this.setState({
            content: e.target.value
        })
    }
    //this function submit new content from form
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state);
        //empting the form after submit
        this.setState({
            content:''
        })
    }
    render (){
        return (
            <div>
                <form onSubmit={this.handleSubmit}>  
                    <label>Add new todo:</label>
                    <input type="text" onChange={this.handleChange} value = {this.state.content} />
                </form>
            </div>
        )
    }
}
export default AddTodo //exporting this component