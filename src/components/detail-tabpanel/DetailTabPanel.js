import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { withStyles } from '@material-ui/core/styles';
import ExperiencePanel from '../experience-panel/ExperiencePanel';
import SkillPanel from '../skill-panel/SkillPanel';
import EducationPanel from '../education-panel/EducationPanel';
import SwipeableViews from 'react-swipeable-views';
import styles from './DetailTabPanel.module.css';

class DetailTabPanel extends Component {

    constructor(props) {
        super(props);
        this.handleChangeIndex = this.handleChangeIndex.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            value: 0,
        };
    }

    handleChange = (event, value) => {
        this.setState({ value });
    };

    handleChangeIndex = index => {
        this.setState({ value: index });
    };

    render() {
        const { value } = this.state;
        const { theme } = this.props;
        return (
            <div className={styles.tabPanelRoot}>
                <AppBar position="static">
                    <Tabs style={{Color: "white", backgroundColor:"black"}} value={value} variant="fullWidth" onChange={this.handleChange}>
                        <Tab style={{Color: "white", backgroundColor:"black"}} label="My Experience"/>
                        <Tab style={{Color: "white", backgroundColor:"black"}} label="My Skills" />
                        <Tab style={{Color: "white", backgroundColor:"black"}} label="My Education" />
                    </Tabs>
                </AppBar>
                <SwipeableViews animateHeight={false} className={styles.tabContainer} style={{backgroundColor:"black"}} axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'} index={this.state.value} onChangeIndex={this.handleChangeIndex}>
                    <ExperiencePanel dir={theme.direction}></ExperiencePanel>
                    <SkillPanel dir={theme.direction}></SkillPanel>
                    <EducationPanel dir={theme.direction}></EducationPanel>
                </SwipeableViews>
            </div>
        );
    }
}

export default withStyles(styles, { withTheme: true })(DetailTabPanel);
