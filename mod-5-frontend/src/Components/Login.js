import React from 'react'

class Login extends React.Component {

    state={
        username: "", 
        password: "", 
        currentUser:{}
    }

    handleOnChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
        console.log(this.state)
    }

    handleSubmitForm = (event) => {
        event.preventDefault()
        fetch('http://localhost:3005/api/v1/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          user: {
            username: this.state.username,
            password: this.state.password
          }
        })
      })
      .then(r => r.json())
      .then(res => localStorage.setItem("token", res.jwt));
      this.props.history.push("/dashboard")
    }

    render(){
        return(<div> 
            <form className="login" onSubmit={this.handleSubmitForm}>
                <label> Username </label>
                <input type="text" name= "username" onChange={this.handleOnChange} value={this.state.username} />
                <label> Password </label>
                <input type="password" name= "password" onChange={this.handleOnChange} value={this.state.password} />
                <input type="submit" value="SUBMIT" />
            </form>
        </div>
        )
    }
}

export default Login