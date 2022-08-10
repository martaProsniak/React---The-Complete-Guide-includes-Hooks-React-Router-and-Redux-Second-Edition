import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_PRODUCTS = [
  {
    title: "Magic Beans",
    price: 3,
    description: "Magic Beans in all flavoures!",
    id: "tty-55",
  },
  {
    title: "Cream Bear",
    price: 5,
    description: "Creamy and warming",
    id: "ppa-56",
  },
  {
    title: "Chocolate Frogs",
    price: 4,
    description: "They can escape!",
    id: "cfg-98",
  },
];

const Products = (props) => {
  const productsList = DUMMY_PRODUCTS.map((item) => (
    <ProductItem
      title={item.title}
      price={item.price}
      description={item.description}
      id={item.id}
      key={item.id}
    />
  ));
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>{productsList}</ul>
    </section>
  );
};

export default Products;
