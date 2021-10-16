import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Notes from "../screens/Notes";
import AddingNote from "../screens/AddingNote";

const StackNavigator = createStackNavigator({
    Notes: {
        screen: Notes
    },
    AddingNote: {
        screen: AddingNote
    }
},
{
    initialRouteName: 'Notes',
    headerMode: 'none',
    mode: 'modal'
})

export default createAppContainer(StackNavigator)