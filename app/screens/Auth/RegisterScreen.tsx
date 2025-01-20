import { View, Text, Button, Image, TouchableOpacity, Alert } from "react-native";
import React, { useEffect, useState } from "react";
import { RegisterScreenNavigationProp } from "@/app/router/StackNavigator";
import FormFiled from "./Components/FormFiled";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native-gesture-handler";
import CustomButton from "./Components/CustomButton";
import { account, database } from "@/AppWrite/AppwriteConfig";
type Props = {
  navigation: RegisterScreenNavigationProp;
  route: {
    params:{
      itemId: number;
      otherParam? : string;
    }
  }
};
const RegisterScreen = ({ navigation ,route}: Props ) => {

  const [form, setForm] = useState({
    email: "",
    password: "",
    repassword:"",
  });
  const handleRegister =async () => {
    
    if(form.email &&form.password && form.repassword){
      if(form.password != form.repassword){
        Alert.alert("Sai mat khau!");
        return;
      }
      try {
        const key = new Date().getTime();
        const userId = "user" + key; 
        console.log(userId);
        console.log(form);
        // database.createDocument()
        const data = await account.create(userId,form.email,form.password);
        console.log(data);
        // if(data.userId)navigation.navigate('Tabs');
      } catch (error) {
        console.error(error);
      }
      
    }
    
  };
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
            Register Account
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
          <FormFiled
            title="Password"
            value={form.repassword}
            placeholder="Hãy nhập lại mật khẩu của bạn"
            handleChangeText={(e) => setForm({ ...form, repassword: e })}
          />
          <CustomButton title="Register" handleSubmit={handleRegister}></CustomButton>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default RegisterScreen;
