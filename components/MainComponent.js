import React, { Component } from 'react';
import { View } from 'react-native';
import Directory from './DirectoryComponent';
import CampsiteInfo from './CampsiteInfoComponent';
import { CAMPSITES} from '../shared/campsites';

class Main extends Component {
    constructor(props){
        super(props);
        this.state = {
            campsites: CAMPSITES,
            selectedCampsite: null,
        }
    }

    logHi(){
        console.log('hi');
    }
    
    onCampsiteSelect(campsiteId){
        console.log('pressed');
        this.setState({selectedCampsite: campsiteId})
    }

    render(){
        const { campsites, selectedCampsite } = this.state;
        return (
            <View style={{ flex : 1 }} >
                <Directory 
                    campsites={campsites} 
                    onPress={(campsiteId) => this.onCampsiteSelect(campsiteId)}    
                />
                <CampsiteInfo 
                    campsite={campsites.filter( campsite => campsite.id === selectedCampsite)[0]}
                />
            </View>
            
        )
    }
}

export default Main