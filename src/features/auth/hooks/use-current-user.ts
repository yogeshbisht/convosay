import { useQuery } from "convex/react";
import { api } from "../../../../convex/_generated/api";

export const useCurrentUser = () => {
  const data = useQuery(api.users.current);

  // the query is loading if the data is undefined
  const isLoading = data === undefined;

  return {
    data,
    isLoading,
  };
};
