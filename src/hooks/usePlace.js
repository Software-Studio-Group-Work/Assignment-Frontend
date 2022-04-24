import httpClient from "../utils/httpClient";
import { useQuery, useMutation, useQueryClient } from "react-query";

export const useGetPlaces = () => {
  return useQuery("places", async () => {
    const { data } = await httpClient.get("places");
    return data;
  });
};

export const useAddPlace = () => {
  const queryClient = useQueryClient();
  return useMutation(
    async (place) => {
      const { data } = await httpClient.post("places", place);
      return data;
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries("places");
      },
    }
  );
};

export const useUpdatePlace = () => {
  const queryClient = useQueryClient();
  return useMutation(
    async (place) => {
      const { data } = await httpClient.put(`places/${place.id}`, place);
      return data;
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries("places");
      },
    }
  );
};

export const useDeletePlace = () => {
  const queryClient = useQueryClient();
  return useMutation(
    async (id) => {
      await httpClient.delete(`places/${id}`);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries("places");
      },
    }
  );
};
