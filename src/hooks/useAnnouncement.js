import httpClient from "../utils/httpClient";
import { useQuery, useMutation, useQueryClient } from "react-query";

export const useGetAnnouncements = () => {
  return useQuery("announcements", async () => {
    const { data } = await httpClient.get("Announcement/GetAllAnnouncement");
    return data;
  });
};

export const useAddAnnouncement = () => {
  const queryClient = useQueryClient();
  return useMutation(
    async (announcement) => {
      console.log(announcement);
      const { data } = await httpClient.post("Announcement/CreateOneAnnouncement", announcement);
      return data;
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries("announcements");
      },
    }
  );
};

export const useUpdateAnnouncement = () => {
  const queryClient = useQueryClient();
  return useMutation(
    async (announcement) => {
      const { data } = await httpClient.put(
        `announcements/${announcement.id}`,
        announcement
      );
      return data;
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries("announcements");
      },
    }
  );
};

export const useDeleteAnnouncement = () => {
  const queryClient = useQueryClient();
  return useMutation(
    async (id) => {
      await httpClient.delete(`announcements/${id}`);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries("announcements");
      },
    }
  );
};
