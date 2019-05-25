import React from 'react'

import { connect } from 'react-redux'
import { setCurrentUser, setMakeupBags, setShoppingLists} from "../Redux/actions"


class Login extends React.Component {

    state={
        username: "", 
        password: "", 
    }

    handleOnChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
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
      .then(res =>{
        console.log(res);
        localStorage.setItem("token", res.jwt);
        this.props.setCurrentUser(res.user);
        this.props.setMakeupBags(res.user.makeup_bags);
        this.props.setShoppingLists(res.user.shopping_lists);
      });
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


const mapDispatchToProps = (dispatch) => {
  return{
    setCurrentUser: (userObject) => dispatch(setCurrentUser(userObject)), 
    setMakeupBags: (userMakeupBagObject) => dispatch(setMakeupBags(userMakeupBagObject)), 
    setShoppingLists: (userShoppingListObject) => dispatch(setShoppingLists(userShoppingListObject))
  }
}
export default connect(null, mapDispatchToProps)(Login)