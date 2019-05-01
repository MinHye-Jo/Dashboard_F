import React, { Component } from 'react';
// import './Login.css';

class Login extends Component {
    state = {
        login_id: "",
        login_pw: ""
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });        
    }
    handleSubmit = (e) => {
        alert(this.state.login_id + " // " + this.state.login_pw);
    }
    render() {
        return (
            <div className="Login">
                <header className="title">
                    <p>
                        IMC DASHBOARD
                    </p>
                </header>
                <form name="login_form" id="login_form" onSubmit={this.handleSubmit}>
                    <p> ID </p>
                    <input
                        name="login_id"
                        value={this.state.login_id}
                        onChange={this.handleChange}
                        placeholder="아이디"
                    />
                    <p> PW </p>
                    <input
                        name="login-pw"
                        value={this.state.login_pw}
                        onChange={this.handleChange}
                        placeholder="아이디"
                    />
                    <button type="submit">
                        login
                    </button>
                </form>
            </div>
        );
    }
}

export default Login;