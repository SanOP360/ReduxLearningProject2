import ProductItem from './ProductItem';
import classes from './Products.module.css';

const Dummy_Products = [
  {
    id: "p1",
    price: 6,
    title: "My First Book",
    description: "The first book I ever wrote",
  },
  {
    id: "p2",
    price: 10,
    title: "Second Book",
    description: "Another interesting book",
  },
  {
    id: "p3",
    price: 8,
    title: "Adventure Novel",
    description: "A thrilling adventure story",
  },
  {
    id: "p4",
    price: 15,
    title: "Science Fiction",
    description: "Explore the wonders of science fiction",
  },
  {
    id: "p5",
    price: 12,
    title: "Mystery Book",
    description: "Unravel the mysteries within these pages",
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {Dummy_Products.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
