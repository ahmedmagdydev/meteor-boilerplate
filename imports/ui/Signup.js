import React,{Component} from 'react'
import {Link} from 'react-router'
import { Accounts } from 'meteor/accounts-base'

export default class Signup extends Component{
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
        if(password.length < 9){
            return this.setState({error:'password must be more than 8'})
        }
        Accounts.createUser({email, password},(err) => {
            console.log('sign up callback', err)
            err ? this.setState({error:err.reason}) : this.setState({error:''})
        })
        // this.setState({
        //     error:'something went wrong'
        // })
    }
    render() {
        return (
            <div className="container">
    <div className="col-md-3"></div>
    <div className="col-md-6">
    <Link to="/">log in</Link>
    {this.state.error ? <p>{this.state.error}</p> : null}

         <div className="row myborder">
         <form onSubmit={this.onSubmit.bind(this)} noValidate>
             <h4>sign up</h4><hr/>
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
                    <button className="btn-u pull-left" type="submit">Creat Account</button>
                </div>
            </div>
            </form>
        </div>
        <div className="col-md-2"></div>
    </div>
      </div>
)
    }
}