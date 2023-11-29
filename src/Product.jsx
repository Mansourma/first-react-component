  import './pro-style.css'
function Product(props){
    return (
      <div className="product-container">
        <img className="product-img" src={`../src/pictures/${props.data.thumbnail}`}/>
        <h4 className="product-title">{props.data.title}</h4>
        <p className="product-price">{props.data.price} </p>
        <button className="product-button">Ajouter au panier</button>
      </div>
    )
}

export default Product;