import { FC, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { useRegisterViewModel } from "./useRegister.viewModel";
import { AppInput } from "../../shared/components/AppInput";
import { router } from "expo-router";
import { AppInputController } from "../../shared/components/AppInputController";

export const RegisterView: FC<ReturnType<typeof useRegisterViewModel>> = ({
  onSubmit,
  control,
}) => {
  const [email, setEmail] = useState("");

  return (
    <View className="flex-1 justify-center">
      <AppInputController leftIcon="mail-outline" label="E-MAIL" control={control} name="email" />
      <TouchableOpacity onPress={() => router.back()}>
        <Text>Voltar</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={onSubmit}>
        <Text>Registrar</Text>
      </TouchableOpacity>
    </View>
  );
};
