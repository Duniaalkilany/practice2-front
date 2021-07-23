import React, { Component } from 'react'
import {Form ,Button} from 'react-bootstrap'
export class UpdateForm extends Component {
    render() {
        return (
            <div>
                <Form onSubmit={this.props.updateFavs}>
  <Form.Group className="mb-3" controlId="name">
    <Form.Label>Digimon name</Form.Label>
    <Form.Control type="text" placeholder={this.props.item.name}/>
  
  </Form.Group>

  <Form.Group className="mb-3" controlId="img">
    <Form.Label>Digimon image</Form.Label>
    <Form.Control type="text" placeholder={this.props.item.img} />
  </Form.Group>
  <Form.Group className="mb-3" controlId="level">
  <Form.Label>Digimon level</Form.Label>
  <Form.Control type="text" placeholder={this.props.item.level} />
  </Form.Group>
  <Button variant="primary" type="submit">
 update
  </Button>
</Form>
            </div>
        )
    }
}

export default UpdateForm
