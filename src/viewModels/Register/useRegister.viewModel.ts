import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { RegisterFormData, registerScheme } from "./registerScheme";
import { useRegisterMutation } from "../../shared/queries/auth/useRegisterMutation";
import { useUserStore } from "../../shared/store/userStore";

export const useRegisterViewModel = () => {
  const userRegisterMutation = useRegisterMutation();
  const { setSession, user } = useUserStore();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: yupResolver(registerScheme),
    defaultValues: {
      name: "teste2",
      email: "teste2@teste.com",
      phone: "22222222222",
      password: "123123123",
      confirmPassword: "123123123",
    },
  });

  const onSubmit = handleSubmit(async (userData) => {
    const { confirmPassword, ...registerData } = userData;

    const mutationResponse = await userRegisterMutation.mutateAsync(registerData);

    setSession({
      user: mutationResponse.user,
      token: mutationResponse.token,
      refreshToken: mutationResponse.refreshToken,
    });
  });

  console.log(user);

  return { control, errors, onSubmit };
};
