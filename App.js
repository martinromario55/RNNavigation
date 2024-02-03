import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import CourseListScreen from './screens/CourseListScreen'
import ProfileScreen from './screens/ProfileScreen'
import SettingsScreen from './screens/SettingsScreen'
import Ionicons from '@expo/vector-icons/Ionicons'
import { AboutStack } from './AppStack'

const Tab = createBottomTabNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarLabelPosition: 'below-icon',
          tabBarShowLabel: true,
          tabBarActiveTintColor: 'purple',
        }}
      >
        <Tab.Screen
          name="Course List"
          component={CourseListScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <Ionicons name="list" size={20} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarLabel: 'My Profile',
            tabBarIcon: ({ color }) => (
              <Ionicons name="person" size={20} color={color} />
            ),
            tabBarBadge: 1,
          }}
        />
        <Tab.Screen
          name="Settings"
          component={SettingsScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <Ionicons name="settings" size={20} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="About Stack"
          component={AboutStack}
          options={{
            headerShown: false,
            tabBarIcon: ({ color }) => (
              <Ionicons name="information-circle" size={20} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}
