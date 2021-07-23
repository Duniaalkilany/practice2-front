import React, { Component } from 'react'
import {Card ,Button} from 'react-bootstrap'
export class MainCard extends Component {
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
    {/* <Button variant="primary" onClick={()=>this,this.props.handleAddToFav(this.props)}>Add to Favourite</Button> */}
    <Button variant="primary" onClick={() => this.props.handleAddToFav(this.props)}>Add to favorite</Button>
  </Card.Body>
</Card>
            </div>
        )
    }
}

export default MainCard
