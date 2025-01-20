import { View, Text, Button, Image, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { LoginScreenNavigationProp } from "@/app/router/StackNavigator";
import FormFiled from "./Components/FormFiled";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native-gesture-handler";
import CustomButton from "./Components/CustomButton";
import { account } from "@/AppWrite/AppwriteConfig";
type Props = {
  navigation: LoginScreenNavigationProp;
};
const LoginScreen = ({ navigation }: Props) => {
  useEffect(()=>{
  account.deleteSessions();
  
  console.log("delete session");
  })
  const handleLogin =async () => {
    
    if(form.email &&form.password){
      try {
        const data = await account.createEmailPasswordSession(form.email,form.password);
        console.log(data);
        if(data.userId)navigation.navigate('Tabs');
      } catch (error) {
        console.error(error);
      }
      
    }
    
  };
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  return (
    <SafeAreaView className="bg-slate-700 h-full justify-center item-center">
      <ScrollView className="w-full">
        <View className="w-full justify-center h-full px-4 my-6">
          <Image
            source={require("../../../assets/images/logo.png")}
            resizeMode="contain"
            className="w-[115px] h-[35px]"
          />
          <Text className="text-2xl text-white font-semibold">
            Login to App
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
          <View className="flex-row justify-center w-full px-4 my-2">
            <Text className="px-2 font-semibold text-white" >nếu bạn chưa có tài khoản?</Text>
            <TouchableOpacity onPress={()=>{
              navigation.navigate('Register',{itemId:1,otherParam: "dangkingay"})}}>
              <Text className="font-semibold text-orange-400">Đăng kí ngay</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default LoginScreen;
