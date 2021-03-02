import React, { Component } from 'react'
import { Text, View, ScrollView, FlatList } from 'react-native';
import { Card, Icon } from 'react-native-elements';
import { CAMPSITES} from '../shared/campsites';
import { COMMENTS } from '../shared/comments';

const RenderCampsite = (props) => {
    const { campsite } = props;
    if(campsite){
        console.log(props.favorite);
        return (
            <Card 
                featuredTitle={campsite.name}
                image={{uri: baseUrl + campsite.image}}
            >
                <Text style={{margin: 10}}>
                    {campsite.description}
                </Text> 
                <Icon
                    name={props.favorite ? 'heart' : 'heart-o'}
                    type='font-awesome'
                    color='#f50'
                    raised
                    reverse
                    onPress={() => props.favorite ? console.log('already a fave') : props.markFavorite()}
                />   
            </Card>
        )
    }
    return <View />
}

const RenderComments = ({ comments }) => {
    const renderCommentItem = ({item}) => {
        return (
            <View style={{margin: 10}}>
                <Text style={{fontSize : 14}}>{item.text}</Text>
                <Text style={{fontSize : 12}}>{item.rating} stars</Text>
                <Text style={{fontSize : 12}}>{`--${item.text}, ${item.date}`}</Text>
            </View>
        )
    }

    return (
        <Card title='Comments'>
        
            
            <FlatList 
                data={comments}
                renderItem={renderCommentItem}
                keyExtractor={item => item.id.toString()}
            />
       
        
        </Card>
    )
}


class CampsiteInfo extends Component {

    constructor(props){
        super(props);
        this.state = {
            favorite : false,
        }
    }
    markFavorite(){
        this.setState({ favorite : true });
    }
    static navigationOptions = {
        title : 'Campsite Information'
    }



    render(){
        const { campsites, comments } = this.props;
        const campsiteId = this.props.navigation.getParam('campsiteId');
        const campsite = campsites.filter( campsite => campsite.id === campsiteId)[0];
        const filteredComments = comments.filter( comment => comment.campsiteId == campsiteId);
       
        return (
            <ScrollView>
                <RenderCampsite campsite={campsite} favorite={this.state.favorite} markFavorite={() => this.markFavorite()}/>
                <RenderComments comments={filteredComments} />
            </ScrollView>
        )
        
       
    }
    
}



const mapStateToProps = state => {
    return {
        campsites: state.campsites,
        comments: state.comments
    };
};

export default connect(mapStateToProps)(CampsiteInfo);