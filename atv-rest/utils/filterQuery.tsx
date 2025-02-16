import { useTokenContext } from "../src/contexts/userContext";
import api from "../src/services/api";

export function useFilterQuery() {
  const { token } = useTokenContext();

  const filterQuery = async (query: string, remove: boolean) => {
    try {
      let response;
      console.log(query);
      
      if (remove) {
        response = await api.get(`/api/collections/cars/records`, {
          headers: { Authorization: token },
        });
      } else {
        response = await api.get(`/api/collections/cars/records`, {
          params: { filter: query },
          headers: { Authorization: token },
        });
      }

      return response.data?.items || [];
    } catch (err) {
      console.error("Error fetching car details:", err);
      throw err;
    }
  };

  return { filterQuery };
}

export interface QueryParams {
  brand: string;
  showSold: boolean
}
