import { View, Text, StyleSheet, ScrollView } from 'react-native';
import React, {useState} from 'react';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import { useNavigation } from '@react-navigation/native';
import {useForm} from 'react-hook-form';

const EMAIL_REGEX =
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;


const ForgotPasswordScreen = () => {
    const {control, handleSubmit} = useForm();

    const navigation = useNavigation();

    const onSendPressed = () => {
        navigation.navigate('NewPassword');
    };

      const onSignInPress = () => {
        navigation.navigate('SignIn');
    };
   

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
    <View style = {styles.root}>
        <Text style={styles.title}>Reset your Password</Text>

         <CustomInput 
             name="email"
             control={control}
             placeholder="Email"
             rules={{
               required: 'Email is required',
               pattern: {value: EMAIL_REGEX, message: 'Email is invalid'},
             }}
         />      
        
        <CustomButton 
            text="Send"
            onPress={handleSubmit(onSendPressed)}
        />

        <CustomButton 
            text="Back to Sign In"
            onPress={onSignInPress}
            type="TERTIARY"
        />  

    </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#051C60',
        margin: 10,
    },
    text: {
        color: 'gray',
        marginVertical: 10,
    },
    link: {
        color: '#FDB075',
    },
})

export default ForgotPasswordScreen;