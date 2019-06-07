import React from 'react'

class Login extends React.Component {
    state = {
        username: ""
    }

    handleChanges = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    login = e => {
        e.preventDefault()
        localStorage.setItem("username", this.state.username)
        document.location.reload()
    }

    render() {
        return(
            <form>
                <input
                    type="text"
                    name="username"
                    value={this.state.username}
                    placeholder="Username"
                    onChange={this.handleChanges}
                />
                <button>Login</button>
            </form>
        )
    }
}

export default Login

