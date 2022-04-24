import httpClient from "../utils/httpClient";
import { useQuery, useMutation, useQueryClient } from "react-query";

export const useGetComments = (postId) => {
  return useQuery(["comments", postId], async () => {
    const { data } = await httpClient.get(`comments?postId=${postId}`);
    return data;
  });
};

export const useAddComment = (postId) => {
  const queryClient = useQueryClient();
  return useMutation(
    async (comment) => {
      const { data } = await httpClient.post("comments", comment);
      return data;
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["comments", postId]);
      },
    }
  );
};

export const useUpdateComment = (id) => {
  const queryClient = useQueryClient();
  return useMutation(
    async (comment) => {
      const { data } = await httpClient.put(`comments/${id}`, comment);
      return data;
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["comments", comment.postId]);
      },
    }
  );
};

export const useDeleteComment = (id) => {
  const queryClient = useQueryClient();
  return useMutation(
    async () => {
      const { data } = await httpClient.delete(`comments/${id}`);
      return data;
    },
    {
      onSuccess: (data) => {
        queryClient.invalidateQueries(["comments", data.postId]);
      },
    }
  );
};
