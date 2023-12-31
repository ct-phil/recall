import { View, Text, StyleSheet, ScrollView } from 'react-native';
import React, {useState} from 'react';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons';
import { useNavigation } from '@react-navigation/native';
import {useForm} from 'react-hook-form';

const EMAIL_REGEX =
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;


const SignUpScreen = () => {
    const {control, handleSubmit, watch} = useForm();
    const pwd = watch('password');
    const navigation = useNavigation();

    const onSignUpPressed = () => {
        navigation.navigate('ConfirmEmail') ;
      };
    
    const onTermsofUsePressed = () => {
        console.warn("onTermsofUsePressed");   
      };

      const onPrivacyPolicyPressed = () => {
        console.warn("onPrivacyPolicyPressed");   
      };

      const onSignInPress = () => {
        navigation.navigate('SignIn');
    };
   

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
    <View style = {styles.root}>
        <Text style={styles.title}>Create an account</Text>

        <CustomInput 
           name="email"
           control={control}
           placeholder="Email"
           rules={{
             required: 'Email is required',
             pattern: {value: EMAIL_REGEX, message: 'Email is invalid'},
           }}
        />
        <CustomInput 
             name="password"
             control={control}
             placeholder="Password"
             secureTextEntry
             rules={{
               required: 'Password is required',
               minLength: {
                 value: 8,
                 message: 'Password should be at least 8 characters long',
               },
             }}
         />

         <CustomInput 
            name="password-repeat"
            control={control}
            placeholder="Repeat Password"
            secureTextEntry
            rules={{
              validate: value => value === pwd || 'Password do not match',
            }}
         />      
        
        <CustomButton 
            text="Sign Up"
            onPress={handleSubmit(onSignUpPressed)}
        />

        <Text style={styles.text}>
            By registering, you confirm that you accept our{' '}
            <Text style={styles.link} onPress={onTermsofUsePressed}>Terms of Use</Text> and{' '} 
            <Text style={styles.link} onPress={onPrivacyPolicyPressed}>Privacy Policy</Text>
        </Text>

        <SocialSignInButtons />

        <CustomButton 
            text="Have an account? Sign In"
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

export default SignUpScreen