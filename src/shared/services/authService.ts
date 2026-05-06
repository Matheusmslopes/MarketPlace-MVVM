import { marketPlaceAPIClient } from "../api/marketplace";
import { RegisterHTTPParams, RegisterHTTPResponse } from "../interfaces/http/register";

export const Register = async (userData: RegisterHTTPParams) => {
  const { data } = await marketPlaceAPIClient.post<RegisterHTTPResponse>(
    "/auth/register",
    userData,
  );

  return data;
};
