import { useQuery } from "@tanstack/react-query";

export default function useFetch(urlValue, key) {
  async function fetchData() {
    try {
      const res = await fetch(urlValue);
      const data = await res.json();
      return data;
    } catch (error) {
      throw error;
    }
  }

  const { data, isLoading } = useQuery([key], fetchData);

  return { data, isLoading };
}
