import ContactBannerComponent from "@/components/contact/contact.baner";
import ContactFormComponent from "@/components/contact/contact.form";
import ContactInfoComponent from "@/components/contact/contact.info";
import ContactMapComponent from "@/components/contact/contact.map";

const AppContactComponent = () => {
  return (
    <div>
      <ContactBannerComponent />
      <ContactInfoComponent />
      <ContactMapComponent />
      <ContactFormComponent />
    </div>
  );
};

export default AppContactComponent;
