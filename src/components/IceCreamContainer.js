import React from 'react'
import {connect} from 'react-redux'
import {buyIcecream} from '../redux'

 function IceCreamContainer(props) {
     return(
     <div>
       <h2> Number of icecreams - {props.numOfIceCreams} </h2>
       <button onClick={props.buyIcecream}> Buy icecream </button>
     </div>
     )
 }
  
 const mapStateToProps = state => {
   return {
     numOfIceCreams: state.iceCream.numOfIceCreams
   }
 }

 const mapDispatchToProps = dispatch => {
   return{
     buyIcecream: () => dispatch(buyIcecream())
   }
 }

 export default connect(mapStateToProps, mapDispatchToProps)
  (IceCreamContainer)