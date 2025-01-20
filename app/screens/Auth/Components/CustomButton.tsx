import {
  View,
  Text,
  ViewStyle,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useState } from "react";
import { StyleProp } from "react-native";
import { Ionicons } from "@expo/vector-icons";
interface CustomButtonProps {
  title: string;
  handleSubmit: () => void;
  otherStyles?: StyleProp<ViewStyle>;
}
const CustomButton: React.FC<CustomButtonProps> = ({ title, handleSubmit }) => {
  const [loading, setLoading] = useState<Boolean>(false);
  return (
    <TouchableOpacity onPress={async()=>{
        setLoading(true);
        await handleSubmit();
        setLoading(false);
        
    }}>
      
      {!loading ? (<View className="space-y-2 m-2 bg-orange-400 border-2 rounded-lg border-slate-700">
        <View className=" w-full flex-row h-16 px-4 border-black-200 items-center justify-center">
          <Text className="text-base text-black font-medium py-2">{title}</Text>
        </View>
      </View>):(
        <View className="flex items-center justify-center h-16">
        <ActivityIndicator size="large" color="#FFA500" />
      </View>
      )}
    </TouchableOpacity>
  );
};

export default CustomButton;
