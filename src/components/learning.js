import React, { Component } from 'react';
import { Link } from 'react-router';
import axios from 'axios';
import { API_URL } from '../../constants.js';
import dateFormat from 'dateformat';
import styleVars from '../../styles/variables';
import styled from 'styled-components';


export default class Learning extends Component {

  constructor(props) {
    super(props);
    
    this.state = { items: [], filter: "All" }
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
  
  renderTags() {
    const tagList = [ "All", "JavaScript", "React", "CSS/Design", "Dev Tools", "Ruby/Rails", "iOS", "Database", "Server-Side", "WordPress" ]
    return tagList.map( (tag, index) => {
      if (tag === this.state.filter) {
        return <Tag selected key={index} onClick={this.handleFilterClick.bind(this, tag)}>{tag}</Tag>
      } else {
        return <Tag key={index} onClick={this.handleFilterClick.bind(this, tag)}>{tag}</Tag>
      }
    });
  }
  
  handleFilterClick(tag) {
    this.setState({filter: tag})
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
  
  renderLearningItems(status, filter = 'All') {
    
    // Filter learning items by status
    let learningItems = this.state.items.filter(item => {
      return item.status === status;
    });
    
    // Filter learning items by tag
    if (filter !== 'All') {
      learningItems = learningItems.filter(item => {
        return item.tags.includes(filter);
      });
    }
    
    // Render learning items list
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
          <p>I like to keep a list of the books, tutorials, and online courses I take to learn and sharpen my skills.</p>
          
          <p>My focus these days tends to be more <Link to="/projects">project-based</Link>, so I'm adding things to this list at a slower pace. </p>
          
          <h3>Currently Working On:</h3>
          <ItemList>
            { this.renderLearningItems(2) }
          </ItemList>
          
          <h3>Completed:</h3>
          <TagList>
            <FilterIcon className="fa fa-filter"></FilterIcon>{ this.renderTags() }
          </TagList>
          <ItemList>
            { this.renderLearningItems(1, this.state.filter) }
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
  @media (max-width: 640px) {
    height: auto;
    min-height: 66px;
  }
`;

const Status = styled.div`
  margin: 15px;
  font-size: 24px;
  align-self: center;
  @media (max-width: 640px) {
    font-size: 18px;
    margin: 8px;
  }
`;

const StatusComplete = styled.span`
  color: #6cc676;
`;

const StatusCurrent = styled.span`
  color: ${styleVars.colors.red};
`;

const Text = styled.div`
  //margin-left: 10px;
  align-self: center;
  @media (max-width: 640px) {
    font-size: 16px;
    max-width: 75%;
  }  
  @media (max-width: 640px) {
      font-size: 14px;
    }
`;

const SubText = styled.span`
  font-size: 16px;
  display: block;
  @media (max-width: 640px) {
    font-size: 13px;
  }
`;

const DateLink = styled.div`
  margin-left: auto;
  align-self: center;
`;

const Date = styled.span`
  font-size: 16px;
  color: ${styleVars.colors.dkGray};
  margin-right: 15px;
  @media (max-width: 640px) {
    display: none;
  }
`;

const Url = styled.a`
  align-self: center;
  color: ${styleVars.colors.dkGray};
  margin-right: 15px;
  @media (max-width: 640px) {
    margin-right: 8px;
  }
`;

const TagList = styled.div`
  font-size: 14px;
  list-style: none;
  margin-top: -20px;
  margin-bottom: 10px;
`;

const FilterIcon = styled.span`
  display: block !important;
  font-size: 24px !important;
  float: left;
  margin: 3px 6px;
  color: ${styleVars.colors.dkGray};
`;

const Tag = styled.li`
  display: inline-block;
  padding: 3px 5px;
  border: 1px solid #ccc;
  margin: 3px 3px 0;
  border-radius: 3px;
  cursor: pointer;
  transition: background-color .2s;
  background-color: ${props => props.selected ? styleVars.colors.ltBlue : 'white'};
`;



