
import React, { Component } from 'react'
import axios from 'axios'

import { CardGroup } from 'react-bootstrap'
import FavouriteCard from './FavouriteCard'
import UpdateForm from './UpdateForm'
const serverUrl=process.env.REACT_APP_SERVER_URL

export class Favourite extends Component {

    constructor(props){
        super(props)
        this.state={
            favData:[],
            choosenToUpdate:{},
            showForm:false

        }
    }

/*==================================================*/
componentDidMount=()=>{
axios.get(`${serverUrl}/favourite`).then(response=>{
    this.setState({
        favData:response.data
    })
}).catch(error=>alert(error.message))
}

/*========================================================*/
deleteFavs=async(item)=>{
await axios.delete(`${serverUrl}/favourite/${item.name}`).then(response=>{
alert('successfully delete :(')
}).catch(error=>alert(error.message))
axios.get(`${serverUrl}/favourite`).then(response=>{
    this.setState({
        favData:response.data
    })
}).catch(error=>alert(error.message))
}
/*================================================================*/
showUpdateForm=(item)=>{
    this.setState({
        choosenToUpdate:item,
        showForm:true
    })
}
/*======================================================================*/
updateFavs=async(e)=>{
e.preventDefault()
const itemName =this.state.choosenToUpdate.name
const reqbody={
    name:e.target.name.value,
    img:e.target.img.value,
    level:e.target.level.value
}
await axios.put(`${serverUrl}/favourite/${itemName}`,reqbody).then(response=>{
    this.setState({
        showForm:false
    })
}).catch(error=>alert(error.message))
axios.get(`${serverUrl}/favourite`).then(response=>{
    this.setState({
        favData:response.data
    })
}).catch(error=>alert(error.message))
}


    render() {
        return (
            <div>

{this.state.showForm&&
<UpdateForm
item={this.state.choosenToUpdate}
updateFavs={this.updateFavs}

/>

}




                {
                    this.state.favData&&
                    <CardGroup>

{
    this.state.favData.map((value,idx)=>{
        return(
            <FavouriteCard

key={idx}
name={value.name}
img={value.img}
level={value.level}
deleteFavs={this.deleteFavs}
showUpdateForm={this.showUpdateForm}
            />
        )
    }
    )
}



                    </CardGroup>
                }
            </div>
        )
    }
}

export default Favourite
