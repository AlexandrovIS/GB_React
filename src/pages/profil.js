import React, {Component} from 'react'
import {connect} from 'react-redux'
import {exampleAction} from '../store/actions/profile'

class Profile extends Component{
  render(){
    return(
      <div>
        {this.props.showName
        ?
        <h1>{this.props.name}</h1>
        : null
      }
        
        <button onClick={this.props.myfun}>ok</button>
      </div>
    )
  }
}
function mapStateToProps(state){
  return{
    name:state.profile.name,
    showName:state.profile.showName
  }
}
function mapDispatchToProps(dispatch){
  return{
    myfun:()=>dispatch(exampleAction())
  }
}

// eslint-disable-next-line import/no-default-export
export default connect(mapStateToProps,mapDispatchToProps)(Profile)