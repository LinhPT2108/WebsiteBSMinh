"use client";

import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const GetMethodSpecialtyCounsel = (path: string, page: number) => {
  const { data, error, isLoading } = useSWR(
    `https://backend-fake-json-website-bs-minh-v1.onrender.com/${path}?page=${page}`,
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
