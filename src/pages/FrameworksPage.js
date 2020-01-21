import React from "react";
import { Component } from "react";
import items from "./items";
import { Container, Card, InputGroup, FormControl } from "react-bootstrap";

export default class FrameworksPage extends Component {
  constructor() {
    super();
    this.state = {
      filterTermValue: "",
      itemsList: items
    };
  }

  get filtered() {
    let filteredList = this.state.itemsList.filter(
      item =>
        item.title.toLowerCase().includes(this.state.filterTermValue) ||
        item.description.toLowerCase().includes(this.state.filterTermValue)
    );

    return filteredList;
  }

  onChangeFilterTerm = event => {
    this.setState({
      filterTermValue: event.target.value.toString().toLowerCase()
    });
  };

  render() {
    return (
      <Container className="mt-4">
        <h1>Frameworks Page</h1>
        <InputGroup>
          <FormControl
            placeholder="search..."
            aria-label="search"
            onKeyUp={this.onChangeFilterTerm}
          />
        </InputGroup>
        {this.filtered.length > 0 ? (
          this.filtered.map((item, index) => (
            <Card key={index} className="mt-4">
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>{item.description}</Card.Text>
              </Card.Body>
            </Card>
          ))
        ) : (
          <p className="mt-3">no results found!</p>
        )}
      </Container>
    );
  }
}
