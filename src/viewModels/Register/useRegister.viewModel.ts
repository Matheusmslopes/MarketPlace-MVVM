import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { RegisterFormData, registerScheme } from "./registerScheme";
import { useRegisterMutation } from "../../shared/queries/auth/useRegisterMutation";

export const useRegisterViewModel = () => {
  const userRegisterMutation = useRegisterMutation();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: yupResolver(registerScheme),
    defaultValues: {
      name: "teste0",
      email: "teste0@teste.com",
      phone: "00000000000",
      password: "123123123",
      confirmPassword: "123123123",
    },
  });

  const onSubmit = handleSubmit(async (userData) => {
    const { confirmPassword, ...registerData } = userData;

    await userRegisterMutation.mutateAsync(registerData);
  });

  return { control, errors, onSubmit };
};
