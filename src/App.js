import React, {Component } from 'react';
import InfoPanel from './components/info-panel/InfoPanel';
import DetailTabPanel from './components/detail-tabpanel/DetailTabPanel';


//import SkillPanel from '../skill-panel/SkillPanel';
//import EducationPanel from '../education-panel/EducationPanel';



class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: 0,
        };
    }
    render() {
        
        
        return (
        
            
            <div className="App">
                <InfoPanel></InfoPanel>
                <DetailTabPanel></DetailTabPanel>
               
            </div>
        );
    }
}

export default App;
