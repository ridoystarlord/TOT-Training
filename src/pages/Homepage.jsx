import Banner from "../components/Banner";
import Categories from "../components/Categories";
import ProductList from "../components/product/ProductList";

export default function Homepage() {
  return (
    <div className="">
      <Banner />
      <Categories />
      <ProductList />
    </div>
  );
}
