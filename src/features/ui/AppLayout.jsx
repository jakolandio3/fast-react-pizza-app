import Header from './Header';
import CartOverview from '../cart/CartOverview';
import { Outlet } from 'react-router-dom';

function AppLayout() {
	return (
		<div>
			<Header />
			<main>
				<h1>Content</h1>
			</main>
			<Outlet />
			<CartOverview />
		</div>
	);
}

export default AppLayout;
