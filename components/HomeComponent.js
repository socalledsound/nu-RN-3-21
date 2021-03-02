import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Card } from 'react-native-elements';
import { connect } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';

const RenderItem = ({ item }) => {
    // console.log(item);
    if(item){
        return (
            <Card 
                featuredTitle={item.name}
                image={{uri: baseUrl + item.image}}
            >
                <Text style={{ margin: 10 }}>
                    {item.description}
                </Text>
            </Card>

        )
    }
    return <View />;
}
class Home extends Component {

static navigationOptions = {
    title : 'Home'
}

render(){
    const { campsites, promotions, partners } = this.props;
    return (
        <ScrollView>
            <RenderItem 
                item={campsites.filter( campsite => campsite.featured)[0]}
            />
            <RenderItem 
                item={promotions.filter( promotion =>  promotion.featured)[0]}
            />
            <RenderItem 
                item={partners.filter( partner => partner.featured)[0]}
            />
            {/* <Text>hi there</Text> */}
        </ScrollView>
    )
}

}

const mapStateToProps = state => {
    return {
        campsites: state.campsites,
        promotions: state.promotions,
        partners: state.partners
    };
};

export default connect(mapStateToProps)(Home);
