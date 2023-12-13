"use client";
import AppSpecialtyCounselComponent from "@/components/specialty-counsel/app.special-counsel";
import GetMethodSpecialtyCounsel from "../api/api.get";
const AppImmunizationsComponent = () => {
  const { data, error, isLoading } = GetMethodSpecialtyCounsel("counsel");

  const path = {
    specialty: "counsel",
    childSpecialty: "immunizations",
  };
  if (!data) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <AppSpecialtyCounselComponent blogs={data?.immunizations} path={path} />
    </div>
  );
};

export default AppImmunizationsComponent;
