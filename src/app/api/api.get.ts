"use client";

import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const GetMethodSpecialtyCounsel = (path: string) => { 
  const { data, error, isLoading } = useSWR(
    "http://localhost:8000/" + path,
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
