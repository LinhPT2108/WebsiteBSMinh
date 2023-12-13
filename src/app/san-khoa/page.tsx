"use client";
import AppSpecialtyCounselComponent from "@/components/specialty-counsel/app.special-counsel";
import GetMethodSpecialtyCounsel from "../api/api.get";
const AppObstetricsComponent = () => {
  const { data, error, isLoading } = GetMethodSpecialtyCounsel("specialty");

  const path = {
    specialty: "specialty",
    childSpecialty: "obstetrics",
  };
  if (!data) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <AppSpecialtyCounselComponent blogs={data?.gynecology} path={path} />
    </div>
  );
};

export default AppObstetricsComponent;
