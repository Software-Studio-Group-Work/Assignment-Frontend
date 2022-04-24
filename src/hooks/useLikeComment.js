import httpClient from "../utils/httpClient";
import { useQuery, useMutation, useQueryClient } from "react-query";

export const useGetLikeComment = (commentId) => {
  return useQuery(["likeComment", commentId], async () => {
    const { data } = await httpClient.get(`likeComment?commentId=${commentId}`);
    return data;
  });
};

export const useAddLikeComment = (commentId) => {
  const queryClient = useQueryClient();
  return useMutation(
    async (like) => {
      const { data } = await httpClient.post("likeComment", like);
      return data;
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["likeComment", commentId]);
      },
    }
  );
};

export const useDeleteLikeComment = (id) => {
  const queryClient = useQueryClient();
  return useMutation(
    async () => {
      const { data } = await httpClient.delete(`likeComment/${id}`);
      return data;
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["likeComment", data.commentId]);
      },
    }
  );
};
