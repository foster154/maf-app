import React from 'react';
import Radium from 'radium';
import styleVars from '../../styles/variables';

const ProjectLinks = (props) => {
  
  const liveUrl = (      
    <div style={s.link}>
      <span style={s.linkIcon} className="fa fa-eye"></span> 
      <a href={props.liveUrl} target="_blank">{props.liveUrl}</a>
    </div>
  );
  
  const codeUrl = (
    <div style={s.link}>
      <span style={s.linkIcon} className="fa fa-code"></span>
      <a href={props.codeUrl} target="_blank">{props.codeUrl}</a>
    </div>
  );
  
  return (
    <div style={s.wrapper}>
      <div style={s.title}>View Project</div>
      {
        props.liveUrl ? liveUrl : ""
      }
      {
        props.codeUrl ? codeUrl : ""
      }
    </div>
  );
};

ProjectLinks.propTypes = {
  liveUrl: React.PropTypes.string,
  codeUrl: React.PropTypes.string
}

export default Radium(ProjectLinks);

const s = {
  wrapper: {
    backgroundColor: styleVars.colors.ltGray,
    padding: '10px',
    textAlign: 'center',
    marginTop: '30px',
  },
  title: {
    color: styleVars.colors.red,
    fontWeight: '600',
    fontSize: '24px',
    borderBottom: '2px solid' + styleVars.colors.red,
    marginBottom: '20px',
  },
  linkIcon: {
    margin: '0 8px 0 0',
  }
}