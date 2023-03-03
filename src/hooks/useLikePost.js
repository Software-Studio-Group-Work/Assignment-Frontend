import httpClient from "../utils/httpClient";
import { useQuery, useMutation, useQueryClient } from "react-query";

export const useGetLikesPost = (postId) => {
  return useQuery(["likes", postId], async () => {
    const { data } = await httpClient.get(`LikePost/GetLikesOnPost/${postId}`);
    return data;
  });
};

export const useAddLikePost = () => {
  const queryClient = useQueryClient();
  return useMutation(
    async (like) => {
      const { data } = await httpClient.post(
        "LikePost/CreateOneLikePost",
        like
      );
      return data;
    },
    {
      onSuccess: (data) => {
        queryClient.invalidateQueries(["likes", data.postId]);
      },
    }
  );
};

export const useDeleteLikePost = () => {
  const queryClient = useQueryClient();
  return useMutation(async (like) => {
    const { data } = await httpClient.delete(
      `LikePost/DeleteOneLikePost/${like.id}`
    );
    if (data) {
      queryClient.invalidateQueries(["likes", like.postId]);
    }
    return data;
  });
};
