import React from 'react';

const Navbar = (props) => {
    console.log(props);
    return (
        <div style={styles.nav}>
            <div style={styles.cartIconContainer}>
                <img style={styles.cartIcon} src='https://cdn-icons-png.flaticon.com/512/2838/2838895.png' alt='cart-icon' />
                <span style={styles.cartCount}>
                    {props.count}
                </span>
            </div>
        </div>
    )
}


const styles = {
    cartIcon: {
        height: 32,
        margin: 20
    },
    nav: {
        width : '100%',
        height: 70,
        background: '#4267b2',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    cartIconContainer: {
        position: 'relative'
    },
    cartCount: {
        background: 'lightgreen',
        borderRadius: '50%',
        padding: '3px',
        position: 'absolute',
        right: 5,
        top: 10
    }
}

export default Navbar;
