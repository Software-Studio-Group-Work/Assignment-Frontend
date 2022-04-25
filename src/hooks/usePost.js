import httpClient from "../utils/httpClient";
import { useQuery, useMutation, useQueryClient } from "react-query";

export const useGetPostsByUser = (userId) => {
  return useQuery(["posts", userId], async () => {
    const { data } = await httpClient.get(`Post/GetPostsByUser/${userId}`);
    return data;
  });
};

export const useGetPostsByReligion = (religion) => {
  return useQuery(["posts", religion], async () => {
    const { data } = await httpClient.get(
      `Post/GetPostsByReligion/${religion}`
    );
    return data;
  });
};

export const useGetPost = (id) => {
  return useQuery(["post", id], async () => {
    const { data } = await httpClient.get(`Post/GetOnePost/${id}`);
    return data;
  });
};

export const useAddPost = () => {
  const queryClient = useQueryClient();
  return useMutation(
    async (post) => {
      const { data } = await httpClient.post("Post/CreateOnePost", post);
      if (data) {
        queryClient.invalidateQueries(["posts", post.religion]);
        queryClient.invalidateQueries(["posts", post.userId]);
      }
      return data;
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries("posts");
      },
    }
  );
};

export const useUpdatePost = (religion) => {
  const queryClient = useQueryClient();
  return useMutation(async (post) => {
    const { data } = await httpClient.put(
      `Post/UpdateOnePost/${post.id}`,
      post
    );
    if (data) {
      queryClient.invalidateQueries(["posts", religion]);
      queryClient.invalidateQueries(["posts", post.userId]);
    }
    return data;
  });
};

export const useDeletePost = (religion) => {
  const queryClient = useQueryClient();
  return useMutation(async (post) => {
    const { data } = await httpClient.delete(`Post/DeleteOnePost/${post.id}`);
    if (data) {
      queryClient.invalidateQueries(["posts", religion]);
      queryClient.invalidateQueries(["posts", post.userId]);
    }
    return data;
  });
};
