import './checkout-item.style.scss';
import { CartContext } from '../../contexts/cart.context';
import { useContext } from 'react';

const CheckoutItem = ({ cartItem }) => {
	const { deleteItemFromCart, addItemToCart, removeItemFromCart } =
		useContext(CartContext);
	const { name, imageUrl, price, quantity } = cartItem;
    const removeItemFromCartHandler = ()=>removeItemFromCart(cartItem);
    const addItemToChartHandler = ()=>addItemToCart(cartItem);
    const deleteItemFromCartHandler = ()=>deleteItemFromCart(cartItem);


	return (
		<div className="checkout-item-container">
			<div className="image-container">
				<img src={imageUrl} alt={`${name}`} />
			</div>
			<span className="name">{name}</span>
			<span className="quantity">
				<div className="arrow" onClick={removeItemFromCartHandler}>&#10094;</div>
				<span className='value'>{quantity}</span>
				<div className="arrow" onClick={addItemToChartHandler}>&#10095;</div>
			</span>
			<span className="price">{price}</span>
			<div
				className="remove-button"
				onClick={deleteItemFromCartHandler}
			>
				&#10005;
			</div>
		</div>
	);
};

export default CheckoutItem;
