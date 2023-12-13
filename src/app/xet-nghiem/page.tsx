"use client";
import AppSpecialtyCounselComponent from "@/components/specialty-counsel/app.special-counsel";
import GetMethodSpecialtyCounsel from "../api/api.get";
const AppTestsComponent = () => {
  const { data, error, isLoading } = GetMethodSpecialtyCounsel("specialty");

  const path = {
    specialty: "specialty",
    childSpecialty: "tests",
  };
  if (!data) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <AppSpecialtyCounselComponent blogs={data?.tests} path={path} />
    </div>
  );
};

export default AppTestsComponent;
