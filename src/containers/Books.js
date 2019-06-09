import React, { Component } from 'react'
import { Table, Button, Modal, ModalHeader, ModalBody, ModalFooter, Input, FormGroup, Label } from 'reactstrap'
import { map } from 'rsvp';

class Books extends Component {

  state = {
    books: [],
    newItem: {
      id: 0,
      title: '',
      rating: ''
    },
    newItemModal: false
  }

  componentDidMount() {
    this.setState({
      books: [{
        id: 111,
        title: 'My Book 1',
        rating: 2.1
      },
      {
        id: 222,
        title: 'My Book 2',
        rating: 2.4
      }]
    })
  }

  toggleNewItemModal(){
    this.setState({
      newItem: {
        id: 0,
        title: '',
        rating: ''
      },
      newItemModal: !this.state.newItemModal
    })
  }

  addItem(){
    console.log(this.state.newItem);
    let {books} = this.state;

    let tm = new Date().getTime();

    let {newItem} = this.state;
    newItem.id = tm;

    this.setState({ newItem });

    books.push(newItem);
    this.setState({books});
    this.toggleNewItemModal();
  }

  render() {
    let books = this.state.books.map(row => {
      return(
        <tr key={row.id}>
        <td>{row.id}</td>
        <td>{row.title}</td>
        <td>{row.rating}</td>
        <td><Button color="success" size="sm" className="mr-2">Edit</Button> <Button color="danger" size="sm">Delete</Button></td>
      </tr>
      )
    })

    return (
      <div>
        <Button color="primary" onClick={this.toggleNewItemModal.bind(this)}>Add New Book</Button>
        <Modal isOpen={this.state.newItemModal} toggle={this.toggleNewItemModal.bind(this)}>
          <ModalHeader toggle={this.toggleNewItemModal.bind(this)}>Add New Item</ModalHeader>
          <ModalBody>
            <FormGroup>
              <Label for="title">Title</Label>
              <Input type="text" id="title" value={this.state.newItem.title} onChange={(e) => {
                let {newItem} = this.state
                newItem.title = e.target.value;
                this.setState({newItem})
              }}/>
            </FormGroup>
            <FormGroup>
              <Label for="rating">Rating</Label>
              <Input type="text" id="rating" value={this.state.newItem.rating} onChange={(e) => {
                let {newItem} = this.state
                newItem.rating = e.target.value;
                this.setState({newItem})
              }}/>
            </FormGroup>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.addItem.bind(this)}>Add Item</Button>{' '}
            <Button color="secondary" onClick={this.toggleNewItemModal.bind(this)}>Cancel</Button>
          </ModalFooter>
        </Modal>
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Rating</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {books}
          </tbody>
        </Table>
      </div>
    )
  }
}

export default Books
