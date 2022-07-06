import { ourProducts } from "./data";
import ProductItem from "./ProductItem";
import SectionTitle from "./SectionTitle";

function Products({ products }) {
  return (
    <section className="">
      <div className="container">
        {/* <SectionTitle title={prodTitle} /> */}

        <div className="section-products-blog">
          <div className="section-products-tab-content active">
            <ul className="section-products-list">
              <ProductItem
                products={products}
                star="true"
                colClass="col-small-12 col-medium-12 col-large-4"
              />
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Products;
