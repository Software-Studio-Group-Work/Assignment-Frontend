import httpClient from "../utils/httpClient";
import { useMutation } from "react-query";
import { UserContext } from "../contexts/UserContext";
import { useContext } from "react";

export const useLogin = () => {
  const { setUser } = useContext(UserContext);
  return useMutation(
    async (user) => {
      const { data } = await httpClient.post("user/login", user);
      return data;
    },
    {
      onSuccess: (data) => {
        localStorage.setItem("token", data.token);
        setUser(data.user.result);
      },
    }
  );
};

export const useRegister = () => {
  return useMutation(async (user) => {
    const { data } = await httpClient.post("user/register", user);
    return data;
  });
};
