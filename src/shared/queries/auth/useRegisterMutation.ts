import { useMutation } from "@tanstack/react-query";
import * as authService from "../../services/authService";
import { RegisterHTTPParams } from "../../interfaces/http/register";

export const useRegisterMutation = () => {
  const mutation = useMutation({
    mutationFn: (userData: RegisterHTTPParams) => authService.Register(userData),
    onSuccess: (response) => {
      console.log(response);
    },
    onError: (error) => {
      console.log(error);
    },
  });

  return mutation;
};
