drawer and stack navigators
can do custom drawers and such

createStackNavigator - creates a stack data structure, you can pop things on and off of it,
which allows you to navigate to one of the items and then back to the main view.
createDrawerNavigator -- creates in essence a group of stacks; which allows you to navigate between
different sections of your site.

this.props.navigation holds the data that we pass in to the AppNavigator. It's a little bit
like making configuring a redux store....

const campsiteId = this.props.navigation.getParam('campsiteId');

    getParam is a lot like match.params, isn't it?
