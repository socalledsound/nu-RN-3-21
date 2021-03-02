import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Card } from 'react-native-elements';
import { connect } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';
import Loading from './LoadingComponent';


function RenderItem(props) {
    const {item} = props;

    if (props.isLoading) {
        return <Loading />;
    }
    if (props.errMess) {
        return (
            <View>
                <Text>{props.errMess}</Text>
            </View>
        );
    }
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
    console.log(campsites.campsites);
    return (
        <ScrollView>
            <RenderItem 
                item={campsites.campsites.filter( campsite => campsite.featured)[0]}
                isLoading={campsites.isLoading}
                errMess={campsites.errMess}
            />
            <RenderItem 
                item={promotions.promotions.filter( promotion =>  promotion.featured)[0]}
                isLoading={promotions.isLoading}
                errMess={promotions.errMess}
            />
            <RenderItem 
                item={partners.partners.filter( partner => partner.featured)[0]}
                isLoading={partners.isLoading}
                    errMess={partners.errMess}
            />
            
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
