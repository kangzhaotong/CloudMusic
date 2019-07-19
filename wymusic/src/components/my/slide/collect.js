import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import MuiExpansionPanel from '@material-ui/core/ExpansionPanel';
import MuiExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import MuiExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';

const ExpansionPanel = withStyles({
  root: {
    // border: '1px solid rgba(0, 0, 0, .125)',
    boxShadow: 'none',
    '&:not(:last-child)': {
      borderBottom: 2,
    },
    '&:before': {
      display: 'none',
    },
    '&$expanded': {
      margin: 'auto',
    },
  },
  expanded: {},
})(MuiExpansionPanel);

const ExpansionPanelSummary = withStyles({
  root: {
    marginBottom: 1,
    minHeight: 56,
    '&$expanded': {
      minHeight: 56,
    },
  },
  content: {
    '&$expanded': {
      margin: '0px 0px',
    },
  },
  expanded: {},
})(MuiExpansionPanelSummary);

const ExpansionPanelDetails = withStyles(theme => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiExpansionPanelDetails);
let bbs = false
let bba = false
export default function CustomizedExpansionPanels(props) {
  console.log(props)
  
  const [expanded, setExpanded] = React.useState('panel1');
  const handleChange = panel => (event, newExpanded) => {
    console.log(2222)
    
    if(newExpanded){
      console.log(bbs)
      bbs = true;
    }else{
      console.log(bbs)
      bbs = false;
    }
    setExpanded(newExpanded ? panel : false);
  };
  const handleChange2 = panel => (event, newExpanded) => {
    console.log(111111)
    if(newExpanded){
      bba = true;
    }else{
      
      bba = false;
    }
    setExpanded(newExpanded ? panel : false);
  };
  return (
    <div className="collect">
      <ExpansionPanel   square expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <ExpansionPanelSummary aria-controls="panel1d-content" id="panel1d-header" >
          <Typography>
            <div className="collect_a">
              <span>
              <img src={bbs?require('../../../assets/images/a6.gif'):require('../../../assets/images/a5.gif')} alt=""/>
              </span>
              <a>创建歌单</a>
              <span className="collect_add">
              <img src={require('../../../assets/images/a3.gif')} alt=""/>
              </span>
              <span className="collect_settings">
              <img src={require('../../../assets/images/a4.gif')} alt=""/>
              </span>
            </div>
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
          {props.my.user_playlist.details.map((item, index) => {
              return (
                <div key={index} className="user_playlist">
                  <img src={item.coverImgUrl} alt="" />
                  <div>
                  <a>{item.name}</a>
                  <p>{item.playCount}首</p>
                  </div>
                  
                  
                  <span> <img src={require('../../../assets/images/a4.gif')} alt=""/></span>
               </div>
              )
            })}
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel  square expanded={expanded === 'panel2'} onChange={handleChange2('panel2')}>
        <ExpansionPanelSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography>
            <div className="collect_a">
              <span> <img src={bba?require('../../../assets/images/a6.gif'):require('../../../assets/images/a5.gif')}  alt=""/></span>
              <a>收藏歌单</a>
              <span className="collect_add">   <img src={require('../../../assets/images/a3.gif')} alt=""/></span>
              <span className="collect_settings">   <img src={require('../../../assets/images/a4.gif')} alt=""/></span>
            </div>
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
          {props.my.collet.details.map((item, index) => {
              return (
                <div key={index} className="user_playlist">
                  <img src={item.backgroundUrl} alt="" />
                  <div>
                  <a>{item.nickname}</a>
                  <p>{item.gender}首</p>
                  </div>
                  <span> <img src={require('../../../assets/images/a4.gif')} alt=""/></span>
               </div>
              )
            })}
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      
    </div>
  );
}
