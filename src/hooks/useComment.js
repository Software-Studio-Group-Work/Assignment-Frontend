import httpClient from "../utils/httpClient";
import { useQuery, useMutation, useQueryClient } from "react-query";

export const useGetCommentsByPostId = (postId) => {
  return useQuery(["comments", postId], async () => {
    const { data } = await httpClient.get(
      `Comment/GetCommentsByPost/${postId}`
    );
    return data;
  });
};

export const useGetComment = (commentId) => {
  return useQuery(["comment", commentId], async () => {
    const { data } = await httpClient.get(`Comment/GetOneComment/${commentId}`);
    return data;
  });
};

export const useAddComment = () => {
  const queryClient = useQueryClient();
  return useMutation(
    async (comment) => {
      const { data } = await httpClient.post(
        "Comment/CreateOneComment",
        comment
      );
      return data;
    },
    {
      onSuccess: (comment) => {
        queryClient.invalidateQueries(["comments", comment.postId]);
      },
    }
  );
};

export const useUpdateComment = () => {
  const queryClient = useQueryClient();
  return useMutation(async (comment) => {
    const { data } = await httpClient.put(
      `Comment/UpdateOneComment/${comment.id}`,
      comment
    );
    if (data) {
      queryClient.invalidateQueries(["comments", comment.postId]);
    }

    return data;
  });
};

export const useDeleteComment = () => {
  const queryClient = useQueryClient();
  return useMutation(async (comment) => {
    const { data } = await httpClient.delete(
      `Comment/DeleteOneComment/${comment.id}`
    );
    if (data) {
      queryClient.invalidateQueries(["comments", comment.postId]);
    }
    return data;
  });
};
