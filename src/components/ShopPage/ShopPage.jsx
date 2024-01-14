import ShopItems from "../ShopItems/ShopItems";

const ShopPage = () => {
  return (
    <div>
      <p>This is shop page</p>
      <div>
        <div>
          <ShopItems />
          <ShopItems />
          <ShopItems />
          <ShopItems />
          <ShopItems />
          <ShopItems />
        </div>
        <div>Cart</div>
      </div>
    </div>
  );
};

export default ShopPage;
