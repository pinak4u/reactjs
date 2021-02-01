import React, { Component } from 'react'
import axios from 'axios';
class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            email: '',
            skill: 'angular',
            gender: 'male',
            users:[]
        };
    }
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((response) => {this.setState({users:response.data})})
    }
    usernameChangeHandler = (event) => { this.setState({ username: event.target.value }) }
    passwordChangeHandler = (event) => { return this.setState({ password: event.target.value }) };
    emailChangeHandler = (event) => { return this.setState({ email: event.target.value }) };
    skillChangeHandler = (event) => { return this.setState({ skill: event.target.value }) };
    genderChangeHandler = (event) => { return this.setState({ gender: event.target.value }) };
    submitHandler = (event) => {
        event.preventDefault();
        console.log(this.state);
    };
    render() {
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <input type="text" value={this.state.username} onChange={this.usernameChangeHandler} placeholder="Username "/>
                    <input type="password" onChange={this.passwordChangeHandler} value={this.state.password} placeholder="Password " />
                    <input type="email" onChange={this.emailChangeHandler} value={this.state.email} placeholder="Email " />
                    <select onChange={this.skillChangeHandler}>
                        <option value="angular">Angular</option>
                        <option value="react">React</option>
                        <option value="vue">Vue</option>
                    </select>
                    <input type="radio" name="gender" value="male" onChange={this.genderChangeHandler} />Male
                    <input type="radio" name="gender" value="female" onChange={this.genderChangeHandler} />Female
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default Form
