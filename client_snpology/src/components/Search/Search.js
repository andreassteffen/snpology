import React, {Component} from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import {SearchCard} from './SearchCard.js';


const studies = [
    {title: 'Just a simple Kidney study', description: 'this was indeed a quite good study!'},
    {title: 'Just a simple Lung study', description: 'this was indeed a quite good study! Really moved sommin forward!'},
    {title: 'Just a simple Heart study', description: 'this was indeed a quite good study! Really moved sommin forward!'},
    {title: 'Just a simple Liver study', description: 'this was indeed a quite good study! Really moved sommin forward!'}
]

export class Search extends Component {
  constructor(props){
      super(props)
      this.state = {studies : studies,  value: '', styleSearchBox: {paddingTop: '50%'}, searchbox: {size: 4, offset: 4}}
  }
  handleUpdateInput = (event) => {
    const value = event.target.value;

    this.setState({
      dataSource: [],
      value: value
    });

    if (value!=='' & value.length>0){
      this.setState({
        styleSearchBox:{paddingTop:'2%'},
        searchbox: {size:4, offset: 0}
      
    })}else{
      this.setState({
        styleSearchBox:{paddingTop:'50%'},
        searchbox: {size:4, offset: 4}
      
      })

    }

  };

  render() {
    return (
       <div>
        <Row>
          <Col md={this.state.searchbox}>
            <Form>
              <FormGroup style={this.state.styleSearchBox}>
                <Input value={this.state.value} onChange={this.handleUpdateInput} type="search" name="search" id="studySearch" placeholder="search study" />
              </FormGroup>
            </Form>
          </Col>
        </Row>
        <Row>
          {this.state.studies.map(study=>{return(
            <SearchCard title={study.title} description={study.description} />
          )})}
        </Row>
      </div>
    );
  }
}