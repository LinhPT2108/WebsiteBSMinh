import NewsDeatailHeaderComponent from "@/components/newdetail/news.detail.header";
import NewsDetailReasonComponent from "@/components/newdetail/news.detail.reson";
import NewsDeatailTitleComponent from "@/components/newdetail/news.detail.title";

const AppNewsComponent = () => {
  return (
    <div>
      <NewsDeatailHeaderComponent/>
      <NewsDeatailTitleComponent/>
      <NewsDetailReasonComponent/>
    </div>
  );
};
export default AppNewsComponent;
