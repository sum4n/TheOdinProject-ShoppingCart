const Navigation = () => {
  return (
    <nav>
      <p>The shopping project</p>
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Products</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
      <p>Cart: {0}</p>
    </nav>
  );
};

export default Navigation;
