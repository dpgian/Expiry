import React, { Component } from 'react'
import DeleteBtn from '../components/DeleteBtn'
import Jumbotron from '../components/Jumbotron'
import API from '../utils/API'
import { Link } from 'react-router-dom'
import { Col, Row, Container } from '../components/Grid'
import { List, ListItem } from '../components/List'
import { Input, FormBtn } from '../components/Form'
import Navbar from '../components/Navbar'
//import Nav from './Nav'

class Item extends Component {
    state = {
        items: [],
        name: '',
        date: '',
        store: ''
    }

    componentDidMount() {
        this.loadItems()
    }

    loadItems = () => {
        API.getItems()
            .then(res => this.setState({ items: res.data, name: '', date: ''}))
            .catch(err => console.log(err))
    }

    deleteBook = id => {
        API.deleteItem(id)
            .then(res => this.loadItems())
            .catch(err => console.log(err))
    }

    handleInputChange = e => {
        let { name, value } = e.target
        this.setState({
            [name]: value
        })
    }

    handleFormSubmit = e => {
        e.preventDefault()
        if (this.state.name && this.state.date) {
            API.saveItem({
                name: this.state.name,
                date: this.state.date
            })
                .then(res => this.loadItems())
                .catch(err => console.log(err))
        }
    }

    render() {
        // return(
        //     <Container fluid>
        //         <Row>
        //             <Col size='md-6'>
        //                 <Jumbotron>
        //                     <h1>What Items am I looking for?</h1>
        //                 </Jumbotron>
        //                 <form>
        //                     <Input
        //                         value={this.state.name}
        //                         onChange={this.handleInputChange}
        //                         name='name'
        //                         placeholder='Item name (required)'
        //                     />
        //                     <Input
        //                         value={this.state.date}
        //                         onChange={this.handleInputChange}
        //                         name='date'
        //                         placeholder='Item date (required)'
        //                     />

        //                     <FormBtn
        //                         // disabled={!(this.state.author && this.state.date)}
        //                         onClick={this.handleFormSubmit}
        //                     >
        //                         Submit Item    
        //                     </FormBtn>
        //                 </form>
        //             </Col>
        //             <Col size='md-6 sm-12'>
        //                 <Jumbotron>
        //                     <h1>Registered Items</h1>
        //                 </Jumbotron>
        //                 {this.state.items.length ? (
        //                     <List>
        //                         {this.state.items.map(item => (
        //                             <ListItem key={item._id}>
        //                                 <Link to={'/items/' + item._id}>
        //                                     <strong>
        //                                         {item.name} : {item.date}                                                
        //                                     </strong>
        //                                 </Link>
        //                                 <DeleteBtn onClick={() => this.deleteBook(item._id)} />
        //                             </ListItem>
        //                         ))}
        //                     </List>
        //                 ) : (
        //                     <h3>No items registered yet</h3>
        //                 )}
        //             </Col>
        //         </Row>
        //     </Container>
        // )


        return (
            <></>
           )
    }

}

export default Item