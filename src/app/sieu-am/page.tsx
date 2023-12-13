"use client";
import AppSpecialtyCounselComponent from "@/components/specialty-counsel/app.special-counsel";
import GetMethodSpecialtyCounsel from "../api/api.get";
const AppUltrasoundComponent = () => {
  const { data, error, isLoading } = GetMethodSpecialtyCounsel("specialty");

  const path = {
    specialty: "specialty",
    childSpecialty: "ultrasound",
  };
  if (!data) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <AppSpecialtyCounselComponent blogs={data?.ultrasound} path={path} />
    </div>
  );
};

export default AppUltrasoundComponent;
