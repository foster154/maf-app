import React, { Component } from 'react';
import { Link } from 'react-router';
import axios from 'axios';
import { API_URL } from '../../constants.js';
import dateFormat from 'dateFormat';
import styleVars from '../../styles/variables';
import styled from 'styled-components';


export default class Learning extends Component {

  constructor(props) {
    super(props);
    
    this.state = { items: [] }
    this.getLearningItems = this.getLearningItems.bind(this);
  }

  componentWillMount() {
    this.getLearningItems();
  }
  
  getLearningItems() {
    axios.get(`${API_URL}/learning`)
    .then(response => {
      this.setState({ items: response.data });
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  
  getItemStatus(status) {
    switch (status) {
      case 1:
        return <StatusComplete className="fa fa-check"></StatusComplete>;
        break;
      case 2: 
        return <StatusCurrent className="fa fa-flask"></StatusCurrent>;
        break;
      case 3: 
        return <span className="fa fa-hourglass-half"></span>;
        break;
    }
  }
  
  renderLearningItems(status) {
    const learningItems = this.state.items.filter(item => {
      return item.status === status;
    });
    console.log("learningItems", learningItems);
    return learningItems.map( (item, index) => {
      return (
        <Item key={index}>
          
          <Status>
            { this.getItemStatus(item.status) }
          </Status>

          <Text>
            {item.text} 
            <SubText>{item.subtext}</SubText>
          </Text>
          <DateLink>
            {
              item.status === 1
              ? <Date>{dateFormat(item.date, "mmm yyyy")}</Date>
              : ''
            }
            {
              item.url
              ? <Url href={item.url}><span className="fa fa-link"></span></Url>
              : ''
            }
          </DateLink>
        </Item>
      );
    });
  }

  render() {
    return (
      <div>
        <div className="content-wrapper">
          <h1>Learning</h1>
          A quick list of some of the books, tutorials, projects, and other resources I've been working on lately.
          
          <h3>Currently Working On:</h3>
          <ItemList>
            { this.renderLearningItems(2) }
          </ItemList>
          
          <h3>Recently Completed:</h3>
          <ItemList>
            { this.renderLearningItems(1) }
          </ItemList>
        </div>
      </div>
    );
  }
}

// Styles

const ItemList = styled.ul`
  list-style: none;
  padding: 0;
`;

const Item = styled.li`
  display: flex;
  height: 66px;
  clear:both;
  border-top: 1px solid #ccc;
  background-color: ${styleVars.colors.ltGray};
`;

const Status = styled.div`
  margin: 15px;
  font-size: 24px;
  align-self: center;
`;

const StatusComplete = styled.span`
  color: #6cc676;
`;

const StatusCurrent = styled.span`
  color: ${styleVars.colors.red};
`;

const Text = styled.div`
  margin-left: 10px;
  align-self: center;
`;

const SubText = styled.span`
  font-size: 16px;
  display: block;
`;

const DateLink = styled.div`
  margin-left: auto;
  align-self: center;
`;

const Date = styled.span`
  font-size: 16px;
  color: ${styleVars.colors.dkGray};
  margin-right: 15px;
`;

const Url = styled.a`
  align-self: center;
  color: ${styleVars.colors.dkGray};
  margin-right: 15px;
`;





