import React, { Component } from 'react'
import { Card,Button } from 'react-bootstrap'
export class FavouriteCard extends Component {
    render() {
        return (
            <div>
                <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={this.props.img} />
  <Card.Body>
    <Card.Title>{this.props.name}</Card.Title>
    <Card.Text>
      {this.props.level}
    </Card.Text>
    <Button variant="primary" onClick={()=>this.props.deleteFavs(this.props)}>Delete</Button>
    <Button variant="primary" onClick={()=>this.props.showUpdateForm(this.props)}>Update</Button>
  
  </Card.Body>
</Card>
            </div>
        )
    }
}

export default FavouriteCard
