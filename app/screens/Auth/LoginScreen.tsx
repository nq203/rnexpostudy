import { View, Text, Button, Image, TouchableOpacity, Alert } from "react-native";
import React, { useEffect, useState } from "react";
import { LoginScreenNavigationProp } from "@/app/router/StackNavigator";
import FormFiled from "./Components/FormFiled";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native-gesture-handler";
import CustomButton from "./Components/CustomButton";
import { account } from "@/AppWrite/AppwriteConfig";
import { sampleUser } from "@/app/sampleData";
type Props = {
  navigation: LoginScreenNavigationProp;
};
const LoginScreen = ({ navigation }: Props) => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const handleLogin =async () => {
    
    //logic 
    if(!(form.email && form.password)) {
      Alert.alert("Dien day du vao!");
      return;
    } 
    if (form.email == sampleUser.email && form.password == sampleUser.password){
      navigation.navigate('Tabs');
    }else{
      Alert.alert("Sai roi?");
    }
    
  };
  return (
    <SafeAreaView className="bg-[#D8D2C2] h-full justify-center item-center">
      <ScrollView className="w-full">
        <View className="w-full justify-center h-full px-4 my-6">
          <Image
            source={require("../../../assets/images/logo.jpeg")}
            resizeMode="contain"
            className="w-[100px] h-[100px] rounded-full"
          />
          <Text className="text-2xl text-[#543310]  font-semibold">
            Cafe gì chưa người đẹp ?
          </Text>
          <FormFiled
            title="Email"
            value={form.email}
            placeholder="Hãy nhập email của bạn"
            handleChangeText={(e) => setForm({ ...form, email: e })}
          />
          <FormFiled
            title="Password"
            value={form.password}
            placeholder="Hãy nhập mật khẩu của bạn"
            handleChangeText={(e) => setForm({ ...form, password: e })}
          />
          <CustomButton title="Login" handleSubmit={handleLogin}></CustomButton>
          <View className="flex-row justify-center w-full px-4 my-2 mt-5">
            <Text className="px-2 font-semibold text-[#854836]" >nếu bạn chưa có tài khoản?</Text>
            <TouchableOpacity onPress={()=>{
              navigation.navigate('Register',{itemId:1,otherParam: "dangkingay"})}}>
              <Text className="font-semibold text-[#543310]">Đăng kí ngay</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default LoginScreen;
