import httpClient from "../utils/httpClient";
import { useQuery, useMutation, useQueryClient } from "react-query";

export const useGetLikeComment = (commentId) => {
  return useQuery(["likeComment", commentId], async () => {
    const { data } = await httpClient.get(
      `LikeComment/GetLikesOnComment/${commentId}`
    );
    return data;
  });
};

export const useAddLikeComment = () => {
  const queryClient = useQueryClient();
  return useMutation(
    async (like) => {
      const { data } = await httpClient.post(
        "LikeComment/CreateOneLikeComment",
        like
      );
      return data;
    },
    {
      onSuccess: (data) => {
        queryClient.invalidateQueries(["likeComment", data.commentId]);
      },
    }
  );
};

export const useDeleteLikeComment = () => {
  const queryClient = useQueryClient();
  return useMutation(async (like) => {
    const { data } = await httpClient.delete(
      `LikeComment/DeleteOneLikeComment/${like.id}`
    );
    if (data) {
      queryClient.invalidateQueries(["likeComment", like.commentId]);
    }
    return data;
  });
};
