import { View, Text } from 'react-native'
import React from 'react'
import {useState} from "react";
import CustomButton from '../../components/CustomButton';
import { useNavigation } from '@react-navigation/native';
import { auth } from "../../../firebase"; 
import { onAuthStateChanged, signOut } from "firebase/auth";

const index = () => {

const navigation = useNavigation();
const [user, setUser] = useState({});

onAuthStateChanged(auth, (currentUser) => {
  setUser(currentUser);
});

const onSignOutPressed = async () => {

  await signOut(auth);
  navigation.navigate('SignIn');

};

  return (
    <View>
      <Text style={{fontSize: 24, alignSelf: 'center'}}>Home, Sweet Home{' '} {user?.email}</Text>

      <CustomButton 
            text="Sign Out"
            onPress={onSignOutPressed}
            
        />  
    </View>
  )
}

export default index;