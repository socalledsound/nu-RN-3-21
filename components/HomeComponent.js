import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Card } from 'react-native-elements';
import { CAMPSITES } from '../shared/campsites';
import { PROMOTIONS } from '../shared/promotions';
import { PARTNERS } from '../shared/partners';

const RenderItem = ({ item }) => {
    // console.log(item);
    if(item){
        return (
            <Card 
                featuredTitle={item.name}
                image={require('./images/react-lake.jpg')}
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

    constructor(props){
        super(props);
        this.state = {
            campsites : CAMPSITES,
            promotions : PROMOTIONS,
            partners : PARTNERS
        }
    }
static navigationOptions = {
    title : 'Home'
}

render(){
    const { campsites, promotions, partners } = this.state;
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

export default Home
