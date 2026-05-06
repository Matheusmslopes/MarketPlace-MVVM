import * as yup from "yup";

export const registerScheme = yup.object({
  name: yup.string().required("Nome é obrigatório.").min(1, "Nome deve ter mais de um caracter."),
  email: yup.string().email("Email inválido").required("Email é obrigatório."),
  password: yup
    .string()
    .required("Senha é obrigatório.")
    .min(6, "Senha deve ter pelo menos 6 caracteres."),
  confirmPassword: yup
    .string()
    .required("Senha é obrigatório.")
    .oneOf([yup.ref("password")], "Senhas não coincidem."),
  phone: yup
    .string()
    .required("Telefone é obrigatório.")
    .matches(/^\d{11}$/, "Telefone deve ter 11 dígitos (DDD + número)"),
});

export type RegisterFormData = yup.InferType<typeof registerScheme>;
