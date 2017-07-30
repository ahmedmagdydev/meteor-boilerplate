import React,{Component} from 'react'
import {Accounts} from 'meteor/accounts-base'

 const PrivateHeader = (props)=> {

    return(
        <div>
            <h1>{props.title}</h1>
            <button onClick={()=>Accounts.logout()}>logout</button>
        </div>
        )
}
export default PrivateHeader;
