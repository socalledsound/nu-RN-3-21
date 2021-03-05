import React, { Component } from 'react';
import Home from './HomeComponent';
import Directory from './DirectoryComponent';
import CampsiteInfo from './CampsiteInfoComponent';
import About from './AboutComponent';
import Contact from './ContactComponent';
import { View, Platform, StyleSheet, Text, ScrollView, Image } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator, DrawerItems } from "react-navigation-drawer";
import { createAppContainer } from 'react-navigation';
import { Icon } from 'react-native-elements';
import SafeAreaView from 'react-native-safe-area-view';
import { connect } from 'react-redux';
import { fetchCampsites, fetchComments, fetchPromotions,
    fetchPartners } from '../redux/ActionCreators';

    const ReservationNavigator = createStackNavigator(
        {
            Reservation: { screen: Reservation }
        },
        {
            defaultNavigationOptions: ({navigation}) => ({
                headerStyle: {
                    backgroundColor: '#5637DD'
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    color: '#fff'
                },
                headerLeft: <Icon
                    name='tree'
                    type='font-awesome'
                    iconStyle={styles.stackIcon}
                    onPress={() => navigation.toggleDrawer()}
                />
            })
        }
    );
    


const DirectoryNavigator = createStackNavigator(
    {
    Directory : { screen : Directory },
    CampsiteInfo : { screen : CampsiteInfo },
    },
    {
        initialRouteName : 'Directory',
        defaultNavigationOptions : {
            headerStyle: {
                backgroundColor : '#5637DD'
            },
            headerTintColor : '#FFF',
            headerTitleStyle : {
                color : '#FFF'
            }
        }
    }
);

const HomeNavigator = createStackNavigator(
    {
        Home: { screen: Home }
    },
    {
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#5637DD'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            }
        }
    }

);


const AboutNavigator = createStackNavigator(
    {
        About: { screen: About }
    },
    {
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#5637DD'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            }
        }
    }
);

const ContactNavigator = createStackNavigator(
    {
        Contact: { screen: Contact }
    },
    {
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#5637DD'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            }
        }
    }
);


const MainNavigator = createDrawerNavigator(
    {
        Home: { screen: HomeNavigator },
        Directory: { screen: DirectoryNavigator },
        Reservation: {
            screen: ReservationNavigator,
            navigationOptions: {
                drawerLabel: 'Reserve Campsite',
                drawerIcon: ({tintColor}) => (
                    <Icon
                        name='tree'
                        type='font-awesome'
                        size={24}
                        color={tintColor}
                    />
                )
            }
        },
        About : { screen: AboutNavigator },
        Contact : { screen : ContactNavigator },
    },
    {
        drawerBackgroundColor: '#CEC8FF'
    }
);



const AppNavigator = createAppContainer(MainNavigator);

class Main extends Component {

    componentDidMount() {
        this.props.fetchCampsites();
        this.props.fetchComments();
        this.props.fetchPromotions();
        this.props.fetchPartners();
    }

    render(){
       
        return (
            <View style={{ 
                    flex : 1,
                    paddingTop: Platform.OS === 'ios' ? 0 : Expo.Constants.statusBarHeight 
                    }} >
                <AppNavigator />    
            </View>
            
        )
    }
}


const mapDispatchToProps = {
    fetchCampsites,
    fetchComments,
    fetchPromotions,
    fetchPartners
};

export default connect(null, mapDispatchToProps)(Main);