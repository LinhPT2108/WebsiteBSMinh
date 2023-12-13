"use client";
import AppSpecialtyCounselComponent from "@/components/specialty-counsel/app.special-counsel";
import GetMethodSpecialtyCounsel from "../api/api.get";
const AppGynecologyComponent = () => {
  const { data, error, isLoading } = GetMethodSpecialtyCounsel("specialty");

  if (!data) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <AppSpecialtyCounselComponent blogs={data?.gynecology} />
    </div>
  );
};

export default AppGynecologyComponent;
