"use client";
import AppSpecialtyCounselComponent from "@/components/specialty-counsel/app.special-counsel";
import GetMethodSpecialtyCounsel from "../api/api.get";
const AppInfertilitComponent = () => {
  const { data, error, isLoading } = GetMethodSpecialtyCounsel("counsel");

  const path = {
    specialty: "counsel",
    childSpecialty: "infertility",
  };
  if (!data) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <AppSpecialtyCounselComponent blogs={data?.infertility} path={path} />
    </div>
  );
};

export default AppInfertilitComponent;
