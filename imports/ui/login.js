import React,{Component} from 'react'
import {Link} from 'react-router'
import { Meteor } from 'meteor/meteor'

export default class Login extends Component{
    constructor(props) {
        super(props);
        this.state = {
            error: ''
        }
    }
    onSubmit(e){
        e.preventDefault()
        let email = this.refs.email.value.trim()
        let password = this.refs.password.value.trim()
        Meteor.loginWithPassword({email},password,(err) => {
            err ? this.setState({error:err.reason}) : this.setState({error:''})

        })
    }
    render() {
        return (

<div className="container">
    <div className="col-md-3"></div>
    <div className="col-md-6">
    <Link to="/signup">Sing up</Link>


         <div className="row myborder">
         <form onSubmit={this.onSubmit.bind(this)} noValidate>
             <h4>Login</h4><hr/>
            <div className="input-group margin-bottom-20">
                <span className="input-group-addon">
                    <i className="glyphicon glyphicon-user mycolor"></i>
                </span>
                <input type="email" ref="email" name="email" placeholder="Email" className="form-control"/>
            </div>
            <div className="input-group margin-bottom-20">
                <span className="input-group-addon"><i className="glyphicon glyphicon-lock mycolor"></i></span>
                <input className="form-control" type="password" ref="password" name="password" placeholder="Password"/>                                    </div>




            <div className="row">
                <div className="col-md-12">
                    <button className="btn-u pull-left" type="submit">Sign in</button>
                </div>
            </div>
            <hr/>
            {this.state.error ? <div className="alert alert-danger">{this.state.error}</div>: null}
            </form>
        </div>
        <div className="col-md-2"></div>
    </div>
      </div>
            )
    }
}