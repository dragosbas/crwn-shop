import './categories.styles.scss';
import Home from './routes/home/home.components';
import { Routes, Route } from 'react-router-dom';
import Navigation from './routes/navigation/navigation.components';
import Autenthification from './routes/autenthification/autenthification.component';
import Shop from './routes/shop/shop.component';
import Checkout from './routes/checkout/checkout.componen';

// const Shop = () => {
// 	return <div>I am the shop</div>;
// };

const App = () => {
	return (
		<Routes>
			<Route path="/" element={<Navigation />}>
				<Route index element={<Home />} />
				<Route path="auth" element={<Autenthification />} />
				<Route path="shop/*" element={<Shop />} />
				<Route path="checkout" element={<Checkout />} />
			</Route>
		</Routes>
	);
};

export default App;
