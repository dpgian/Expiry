import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Col, Row, Container } from '../components/Grid'
import Jumbotron from '../components/Jumbotron'
import API from '../utils/API'

class Details extends Component {
    state = {
        item: {}
    }

    componentDidMount() {
        API.getItem(this.props.match.params.id)
            .then(res => this.setState({ item: res.data }))
            .catch(err => console.log(err))
    }

    render() {
        return (
            <Container fluid>
                <Row>
                    <Col size='md-12'>
                        <Jumbotron>
                            <h1>
                                {this.state.item.name} : {this.state.item.date}
                            </h1>
                        </Jumbotron>
                    </Col>
                </Row>

                <Row>
                    <Col size='md-12'>
                        <Link to='/'>Back to all items</Link>
                    </Col>
                </Row>
            </Container>
        )
    }

}

export default Details