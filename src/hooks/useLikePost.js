import httpClient from "../utils/httpClient";
import { useQuery, useMutation, useQueryClient } from "react-query";

export const useGetLikesPost = (postId) => {
  return useQuery(["likes", postId], async () => {
    const { data } = await httpClient.get(`likes?postId=${postId}`);
    return data;
  });
};

export const useAddLikePost = (postId) => {
  const queryClient = useQueryClient();
  return useMutation(
    async (like) => {
      const { data } = await httpClient.post("likes", like);
      return data;
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["likes", postId]);
      },
    }
  );
};

export const useDeleteLikePost = (id) => {
  const queryClient = useQueryClient();
  return useMutation(
    async () => {
      const { data } = await httpClient.delete(`likes/${id}`);
      return data;
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["likes", data.postId]);
      },
    }
  );
};
