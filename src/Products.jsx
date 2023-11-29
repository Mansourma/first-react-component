import Product from "./Product"; 

function Products(props) {
  return (
    <div className="container">
      <div className="row">
        {props.products.map((product) => (
          <Product key={product.id} data={product} /> 
        ))}
      </div>
    </div>
  );
}

export default Products;