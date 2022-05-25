import { createContext, useState, useEffect } from 'react';
// import { addCollectionAndDocuments } from '../utils/firebase/firebase.utils';
import { getCathegoriesAndDocuments } from '../utils/firebase/firebase.utils';

// import SHOP_DATA from '../shop-data.js'

export const CategoriesContext = createContext({
	categoriesMap: [],
});

export const CategoriesProvider = ({ children }) => {
	const [categoriesMap, setCategoriesMap] = useState({});
	// useEffect(()=>{addCollectionAndDocuments('categories',SHOP_DATA)},[]) //initializeaza baza de date ! nu stiu daca o sterge pe cea veche !
	useEffect(() => {
		const getCategoriesMap = async () => {
			const categoriesMap = await getCathegoriesAndDocuments();
			console.log(categoriesMap);
			setCategoriesMap(categoriesMap);
		};
		getCategoriesMap();
		
	}, []);

	const value = { categoriesMap: categoriesMap };
	return (
		<CategoriesContext.Provider value={value}>
			{children}
		</CategoriesContext.Provider>
	);
};
