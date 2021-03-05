import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontIcon from 'react-native-vector-icons/FontAwesome';
import Font5Icon from 'react-native-vector-icons/FontAwesome5';
Icon.loadFont();


//import das screens ou stack
import Home  from '../../stacks/home';
import Sobre  from '../../screens/quem-somos';
import Doacao  from '../../stacks/doacao';
import PerfilStack from '../../stacks/perfil';


const Tab = createBottomTabNavigator();

export default function MainTab() {
  return (
    <NavigationContainer>
      <Tab.Navigator 
        tabBarOptions={{
          activeTintColor: '#fff',
          inactiveTintColor: '#232323',
          activeBackgroundColor:'#232323',
          inactiveBackgroundColor: '#fff',
        }} 
        >

        <Tab.Screen name="Home" component={Home} options={{tabBarIcon:({color}) => (
          <Icon name="home" color={color} size={26} />
        )}} />

        <Tab.Screen options={{ title: 'Quem Somos' }} name="Sobre" component={Sobre} options={{tabBarIcon:({color}) => (
          <Icon name="account-group" color={color} size={26} />          
        )}} />

        <Tab.Screen name="Doação" component={Doacao} options={{ tabBarIcon:({color}) => (
          <Font5Icon name="hand-holding-heart" color={color} size={26} />
        )}} />        

        <Tab.Screen name="PerfilStack" component={PerfilStack} options={{tabBarIcon:({color}) => (
          <FontIcon name="user-circle" color={color} size={26} />
        )}} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}



// screenOptions={ 
//   ({ route }) => ({ 
//    tabBarIcon: ({ focused, color, size }) => {
//      let iconName;

//      if (route.name === 'Home') {
//        iconName = focused ? 'ios-information-circle' : 'ios-information-circle-outline';
//      } 
//      else if (route.name === 'Lista') {
//        iconName = focused ? 'ios-list-box' : 'ios-list';
//      }

//      // You can return any component that you like here!
//      return <Ionicons name={iconName} size={size} color={color}/>;
//    },
//  })}




// import * as React from 'react';
// import { BottomNavigation, Text } from 'react-native-paper';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// import FontIcon from 'react-native-vector-icons/FontAwesome';
// import Font5Icon from 'react-native-vector-icons/FontAwesome5';


// import HomeRota from '../../screens/home';
// import SobreRota from '../../screens/quem-somos';
// import DoacaoRota from '../../screens/doacao';
// import HomePerfil from '../../screens/HomePerfil';

// const iconHeart = <Font5Icon name="hand-holding-heart"/>

// const MainTab = () => {
//   const [index, setIndex] = React.useState(0);

//   const [routes] = React.useState([
//     { key: 'home', title: 'Home',     icon: 'home',   color:'#000' },
//     { key: 'sobre', title: 'Sobre',   icon: 'meho',   color:'#000'  },
//     { key: 'doacao', title: 'Doação', icon: 'iconHeart',   color:'#edaf44'  },
//     { key: 'perfil', title: 'Perfil', icon: iconHeart,   color:'#000'  },
//   ]);

//    const renderIcon = icon => ({ isActive }) => (route, focused, color) {
//      const tabiconActive = {tab.icon};
//      return(
//     <Icon
//       name={focused ? '{tab.icon}' : 'albums-outlined'}
//       color={color}
//     />  )}

  

//   const renderScene = BottomNavigation.SceneMap({
//     home: HomeRota,
//     sobre: SobreRota,
//     doacao: DoacaoRota,
//     perfil: HomePerfil,
//   });

//   return (
//     <BottomNavigation
//       navigationState={{ index, routes }}
//       onIndexChange={setIndex}
//       renderScene={renderScene}
      
//     />
//   );
// };

// export default MainTab;