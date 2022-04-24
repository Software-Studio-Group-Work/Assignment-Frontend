import httpClient from "../utils/httpClient";
import { useQuery, useMutation, useQueryClient } from "react-query";

export const useGetPosts = () => {
  return useQuery("posts", async () => {
    const { data } = await httpClient.get("Post/GetAllPost");
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
      return data;
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries("posts");
      },
    }
  );
};

export const useUpdatePost = () => {
  const queryClient = useQueryClient();
  return useMutation(
    async (post) => {
      const { data } = await httpClient.put(
        `Post/UpdateOnePost/${post.id}`,
        post
      );
      return data;
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries("posts");
      },
    }
  );
};

export const useDeletePost = () => {
  const queryClient = useQueryClient();
  return useMutation(
    async (id) => {
      await httpClient.delete(`Post/DeleteOnePost/${id}`);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries("posts");
      },
    }
  );
};
