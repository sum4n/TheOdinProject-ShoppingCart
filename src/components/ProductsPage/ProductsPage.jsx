import { useOutletContext } from "react-router-dom";
import styles from "./ProductsPage.module.css";
import ProductCard from "../ProductCard/ProductCard";

const ProductsPage = () => {
  const { data, error, loading } = useOutletContext();

  return (
    <>
      <div className={styles.shopPageBody}>
        <div className={styles.shopPageContents}>
          <div className={styles.shopPageItems}>
            {error && <p>A network error was encountered.</p>}
            {loading && <p>Loading...</p>}

            {data &&
              data.map((item) => {
                return (
                  <ProductCard
                    key={item.id}
                    index={item.id}
                    title={item.title}
                    rating={item.rating}
                    price={item.price}
                    imgSource={item.image}
                  />
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductsPage;
