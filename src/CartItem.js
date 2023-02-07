import React from 'react';

const CartItem = (props) => {
    // console.log("this.props ", this.props);
    const { title, price, Quantity, img } = props.product;
    const {
        product,
        onIncreaseQuantity,
        onDecreaseQuantity,
        onDeleteCartItem
    } = props;
    return (
        <div className='cart-item'>
            <div className='left-block'>
                <img style={styles.image} alt='product-img' src={img}/>
            </div>
            <div className='right-block'>
                <div style={{ fontSize: 25 }}>{title}</div>
                <div style={{ color: '#777' }}>${price}</div>
                <div style={{ color: '#777' }}>Qty : {Quantity}</div>
                <div className='cart-item-actions'>
                    {/* Buttons */}
                    <img
                        alt='increase_items'
                        className='action-icons'
                        src='https://cdn-icons-png.flaticon.com/512/992/992651.png'
                        onClick={() => onIncreaseQuantity(product)}
                        title="increase quantity"
                    />

                    <img
                        alt='decrease_items'
                        className='action-icons'
                        src='https://cdn-icons-png.flaticon.com/512/1828/1828906.png'
                        onClick={() => onDecreaseQuantity(product)}
                        title="decrease quantity"
                    />

                    <img
                        alt='delete_item'
                        className='action-icons'
                        src='https://cdn-icons-png.flaticon.com/512/484/484662.png'
                        title="remove item from cart"
                        onClick={() => onDeleteCartItem(product.id)}
                    />
                </div>
            </div>
        </div>
    )
}

const styles = {
    image: {
        width: 110,
        height: 110,
        borderRadius: 5,
        backgroundColor: '#ccc'
    }
}

export default CartItem;
