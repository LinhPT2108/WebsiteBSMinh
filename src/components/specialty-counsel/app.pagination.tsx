import styles from "../../styles/Home.module.css";

interface IPaginationOptions {
  items: number;
  pageSize: number;
  currentPage: number;
  onPageChange: number;
}

const Pagination = (pagination: IPaginationOptions) => {
  const pagesCount = Math.ceil(pagination.items / pagination.pageSize); // 100/10

  if (pagesCount === 1) return null;
  const pages = Array.from({ length: pagesCount }, (_, i) => i + 1);

  return (
    <div>
      <div>Pagination</div>
    </div>
  );
};

export default Pagination;
