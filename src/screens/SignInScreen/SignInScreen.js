import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView, TextInput } from 'react-native';
import React, {useState} from 'react';
import Logo from '../../../assets/images/Logo_1.png';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons';
import { useNavigation } from '@react-navigation/native';
import { useForm, Controller } from 'react-hook-form';

const SignInScreen = () => {
    const {height} = useWindowDimensions();
    const navigation = useNavigation();

    const {control, handleSubmit, formState: {errors}} = useForm();

    const onSignInPressed = (data) => {
      console.log(data);
        // validate user
        
        navigation.navigate('HomeScreen');
      };

      const onForgotPasswordPressed = () => {
        navigation.navigate('ForgotPassword');   
      };


      const onSignUpPress = () => {
        navigation.navigate('SignUp');
      };
    
    

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
    <View style = {styles.root}>
        <Image
          source={Logo}
          style={[styles.logo, {height: height * 0.3}]}
          resizeMode="contain"
        />

        <CustomInput 
           name="email"
           placeholder="Email"
           control={control}
           rules={{required: 'Email is required'}}
         />

        <CustomInput 
             name="password"
             placeholder="Password"
             secureTextEntry
             control={control}
             rules={{
               required: 'Password is required',
               minLength: {
                 value: 8,
                 message: 'Password should be minimum 8 characters long',
               },
             }}
         />    

        
        <CustomButton 
            text="Sign In"
            onPress={handleSubmit(onSignInPressed)}
        />

        <CustomButton 
            text="Forgot Password?"
            onPress={onForgotPasswordPressed}
            type="TERTIARY"
        />

        <SocialSignInButtons />

        <CustomButton 
            text="Don't have an account? Create one"
            onPress={onSignUpPress}
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
    logo: {
        width: '70%',
        maxWidth: 300,
        maxHeight: 200,
    },
})

export default SignInScreen