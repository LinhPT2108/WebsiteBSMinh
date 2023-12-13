"use client";
import AppSpecialtyCounselComponent from "@/components/specialty-counsel/app.special-counsel";
import GetMethodSpecialtyCounsel from "../api/api.get";
import { useState } from "react";
const AppInfertilitComponent = () => {
  const [page, setPage] = useState(1);
  const { data, error, isLoading } = GetMethodSpecialtyCounsel("counsel", page);

  const onPageChange = (newPage: number) => {
    setPage(newPage);
  };

  const path = {
    specialty: "counsel",
    childSpecialty: "infertility",
  };
  if (!data) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <AppSpecialtyCounselComponent
        blogs={data?.infertility}
        path={path}
        page={page}
        onPageChange={setPage}
      />
    </div>
  );
};

export default AppInfertilitComponent;
