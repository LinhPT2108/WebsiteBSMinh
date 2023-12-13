"use client";

import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const GetMethodSpecialtyCounsel = (path: string, page: number) => {
  const { data, error, isLoading } = useSWR(
    `http://localhost:8000/${path}?page=${page}`,
    fetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );

  return { data, error, isLoading };
};

export default GetMethodSpecialtyCounsel;
