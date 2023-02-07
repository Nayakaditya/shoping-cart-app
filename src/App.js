import React from "react";
import Cart from "./Cart";
import Navbar from "./Navbar";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [
        {
          id: 1,
          title: 'Buy Apple Watch Ultra - Apple (IN)tch',
          price: 1199,
          Quantity: 50,
          img: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MQDY3ref_VW_34FR+watch-49-titanium-ultra_VW_34FR_WF_CO+watch-face-49-alpine-ultra_VW_34FR_WF_CO_GEO_IN?wid=750&hei=712&trim=1%2C0&fmt=p-jpg&qlt=95&.v=1660713659063%2C1660927566964%2C1661371890735 '
        },
        {
          id: 2,
          title: 'Nothing Phone (1) 5G (Black, 256 GB) (8 GB RAM)',
          price: 12499,
          Quantity: 30,
          img: 'https://rukminim1.flixcart.com/image/416/416/l5h2xe80/mobile/5/x/r/-original-imagg4xza5rehdqv.jpeg?q=70'
        },
        {
          id: 3,
          title: 'Acer Predator Helios 500 Gaming Laptop (11Th Gen Intel Core I9/17.3 Inches 4K Uhd Display/64Gb Ddr4',
          price: 89999,
          Quantity: 14,
          img: 'https://m.media-amazon.com/images/I/81oz+NZ4QLL._SX450_.jpg'
        },
        {
          id: 4,
          title: 'Fuel co 15W Fast Wireless Charger Type-C , RGB for iPhone 13/12/11, Galaxy S22/S21/Note Charging Pad',
          price: 599,
          Quantity: 30,
          img: 'https://rukminim1.flixcart.com/image/416/416/l2xmqvk0/charging-pad/e/t/o/15w-fast-wireless-charger-type-c-rgb-for-iphone-13-12-11-galaxy-original-image67zdgewxwbn.jpeg?q=70'
        },

      ]
    }
  }

  handleIncreaseQuantity = (product) => {
    console.log("Incrase the quantity of ", product);
    const { products } = this.state;
    const index = products.indexOf(product);

    products[index].Quantity += 1;

    this.setState({
      products: products
    })
  }

  handleDecreaseQuantity = (product) => {
    const { products } = this.state;
    const index = products.indexOf(product);

    if (products[index].Quantity === 0) {
      return;
    }

    products[index].Quantity -= 1;

    this.setState({
      products: products
    })
  }

  handleDeleteCartItem = (id) => {
    const { products } = this.state;

    const item = products.filter((item) => item.id !== id);

    this.setState({
      products: item
    })
  }

  getCartCount = () => {
    const { products } = this.state;
    let count = 0;

    products.forEach((product) =>{
      count += product.Quantity;
    })

    return count;
  }

  getTotalPrice = () =>{
    const {products} = this.state;

    let cartTotal = 0;

    products.map((product) =>{
      cartTotal = cartTotal + product.Quantity * product.price;
      return 0;
    })
    return cartTotal;
  }

  render() {
    const { products } = this.state;
    return (
      <div className="App">
        <Navbar count={this.getCartCount()} />
        <Cart
          products={products}
          onIncreaseQuantity={this.handleIncreaseQuantity}
          onDecreaseQuantity={this.handleDecreaseQuantity}
          onDeleteCartItem={this.handleDeleteCartItem} 
        />
        <div style={{padding : 10, fontSize: 20}}>TOTAL : {this.getTotalPrice()}</div>
      </div>
    );
  }
}

export default App;
