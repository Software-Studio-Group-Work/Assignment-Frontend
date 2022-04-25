import httpClient from "../utils/httpClient";
import { useQuery, useMutation, useQueryClient } from "react-query";

export const useGetPlaces = () => {
  return useQuery("places", async () => {
    const { data } = await httpClient.get("Place/GetAllPlace");
    return data;
  });
};

export const useGetPlace = (id) => {
  return useQuery(["place", id], async () => {
    const { data } = await httpClient.get(`Place/GetOnePlace/${id}`);
    return data;
  });
};

export const useAddPlace = () => {
  const queryClient = useQueryClient();
  return useMutation(
    async (place) => {
      const { data } = await httpClient.post("Place/CreateOnePlace", place);
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
      const { data } = await httpClient.put(
        `Place/UpdateOnePlace/${place.id}`,
        place
      );
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
      const { data } = await httpClient.delete(`Place/DeleteOnePlace/${id}`);
      return data;
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries("places");
      },
    }
  );
};
