import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Card, CardTitle, CardText, CardFooter } from 'reactstrap';
import {Col, Row} from 'reactstrap';

const cardStyle={
    width:'250px',
    height: '250px',
    marginLeft: '10px',
    marginBottom: '10px',
    backgroundColor: '#eee',
    borderLeft: '0',
    borderRight: '0',
    borderTop: '0',
    borderBottom: '2px solid black',
    borderRadius: '0'
}
export class SearchCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
            <Card block outline color="secondary" style={cardStyle}>
                <CardTitle>{this.props.title}</CardTitle>
                <CardText>{this.props.description}</CardText>
            </Card>
      </div>
    );
  }
}