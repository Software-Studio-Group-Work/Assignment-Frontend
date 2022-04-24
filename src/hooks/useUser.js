import httpClient from "../utils/httpClient";
import { useQuery, useMutation, useQueryClient } from "react-query";

export const useGetUsers = () => {
  return useQuery("users", async () => {
    const { data } = await httpClient.get("users");
    return data;
  });
};

export const useGetUser = (id) => {
  return useQuery(["user", id], async () => {
    const { data } = await httpClient.get(`users/${id}`);
    return data;
  });
};

export const useUpdateUser = (id) => {
  const queryClient = useQueryClient();
  return useMutation(
    async (user) => {
      const { data } = await httpClient.put(`users/${id}`, user);
      return data;
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries("users");
      },
    }
  );
};

export const useDeleteUser = (id) => {
  const queryClient = useQueryClient();
  return useMutation(
    async () => {
      await httpClient.delete(`users/${id}`);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries("users");
      },
    }
  );
};
