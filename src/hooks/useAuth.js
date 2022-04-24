import httpClient from "../utils/httpClient";
import { useMutation } from "react-query";
import { UserContext } from "../contexts/UserContext";

export const useLogin = () => {
  const { setUser } = useContext(UserContext);
  return useMutation(
    async (user) => {
      const { data } = await httpClient.post("auth/login", user);
      return data;
    },
    {
      onSuccess: (data) => {
        setUser(data);
      },
    }
  );
};

export const useRegister = () => {
  return useMutation(async (user) => {
    const { data } = await httpClient.post("auth/register", user);
    return data;
  });
};
