import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { Tile } from 'react-native-elements';
import { connect } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';
class  Directory extends Component {



    static navigationOptions = {
        title : 'Directory'
    }

    render(){
        const { navigate } = this.props.navigation;
        const { campsites } = this.props.campsites;
        const renderDirectoryItem = ({item}) => {
            return (
                <ListItem 
                    title={item.name}
                    subtitle={item.description}
                    onPress={() => navigate('CampsiteInfo', { campsiteId: item.id})}
                    leftAvatar={{ source: require('./images/react-lake.jpg') }}
                />
            )
        }
    
        return (
            <FlatList 
                data={campsites}
                renderItem={renderDirectoryItem}
                keyExtractor={item => item.id.toString()}
            />
        )
    }


}

const mapStateToProps = state => {
    return {
        campsites: state.campsites
    };
};

export default connect(mapStateToProps)(Directory);