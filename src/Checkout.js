import React from 'react';

function Checkout(props) {
    const { checkoutItems } = props;
    /*const [checkoutItems, setCheckoutItems] = useState([]);

    const addToCheckout = (product) => {
        setCheckoutItems([...checkoutItems, product]);
    }

    const checkoutProducts = checkoutItems.map((product) => (
        <div key={product.id}>
          {`${product.title}: ${product.price}`}
        </div>
      ));*/
    

    console.log(checkoutItems);

  return (
    checkoutItems.map((product) => (
    <div key={product.id}>
      <div>
        <p>{product.title}</p>
        <p>{product.price}</p>
        <img src={product.url} alt="icons" className='product-img'/>
      </div>
    </div>
  )));
}

export default Checkout