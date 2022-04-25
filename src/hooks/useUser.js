import httpClient from "../utils/httpClient";
import { useQuery, useMutation, useQueryClient } from "react-query";
import { UserContext } from "../contexts/UserContext";
import { useContext } from "react";
export const useGetUsers = () => {
  return useQuery("users", async () => {
    const { data } = await httpClient.get("User/GetAllUser");
    return data;
  });
};

export const useGetUser = (id) => {
  return useQuery(["user", id], async () => {
    const { data } = await httpClient.get(`User/GetOneUser/${id}`);
    return data;
  });
};

export const useUpdateUser = () => {
  const queryClient = useQueryClient();
  return useMutation(async (user) => {
    const { data } = await httpClient.put(
      `User/UpdateOneUser/${user.id}`,
      user
    );
    if (data) {
      queryClient.invalidateQueries(["user", user.id]);
    }
    return data;
  });
};

export const useDeleteUser = () => {
  const { setUser } = useContext(UserContext);
  const queryClient = useQueryClient();
  return useMutation(
    async (id) => {
      await httpClient.delete(`User/DeleteOneUser/${id}`);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries("users");
        setUser(null);
        localStorage.removeItem("token");
      },
    }
  );
};
