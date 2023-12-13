"use client";
import AppSpecialtyCounselComponent from "@/components/specialty-counsel/app.special-counsel";
import GetMethodSpecialtyCounsel from "../api/api.get";
import { useState } from "react";
const AppUltrasoundComponent = () => {
  const [page, setPage] = useState(1);
  const { data, error, isLoading } = GetMethodSpecialtyCounsel(
    "specialty",
    page
  );

  const onPageChange = (newPage: number) => {
    setPage(newPage);
  };

  const path = {
    specialty: "specialty",
    childSpecialty: "ultrasound",
  };

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <AppSpecialtyCounselComponent
        blogs={data?.ultrasound}
        path={path}
        page={page}
        onPageChange={setPage}
      />
    </div>
  );
};

export default AppUltrasoundComponent;
