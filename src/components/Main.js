import React, { Component } from 'react'
import axios from 'axios'
import MainCard from './MainCard'
import {CardGroup,Spinner } from 'react-bootstrap'
const serverUrl = process.env.REACT_APP_SERVER_URL
export class Main extends Component {

constructor(props){
    super(props)
    this.state={
        digimonData:[]
    }
}

/*==============================*/

componentDidMount=()=>{
axios.get(`${serverUrl}/apidata`).then(response=>{
    this.setState({
        digimonData:response.data
    })
}).catch(error=>alert(error.message))  
}
/*==========================================*/

handleAddToFav=(item)=>{
const reqbody={
    name:item.name,
    img:item.img,
    level:item.level
}
axios.post(`${serverUrl}/favourite`,reqbody).then(response=>{
if(response.data===('already exist')){
    alert('already in your favourite list')
}else{
    alert('added successfully')
}
}).catch(error=>alert(error.message))
}
/*===========================================================*/

    render() {
        return (
            <div>
                {this.state.digimonData.length>0?
                <CardGroup>
{
    this.state.digimonData.map((value,idx)=>{
        return(
           <MainCard
           key={idx}
           name={value.name}
           img={value.img}
           level={value.level}
           handleAddToFav={this.handleAddToFav}
           
           
           />
          
        )
    })
}
                </CardGroup>:
               <Spinner animation="border" variant="danger" />

                }
            </div>
        )
    }
}

export default Main
