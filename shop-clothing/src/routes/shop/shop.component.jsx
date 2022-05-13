import {useEffect} from "react";
import {Routes, Route} from "react-router-dom";
import {useDispatch} from "react-redux";

import CategoriesPreview from "../categories-preview/categories-preview.component";
import Category from "../category/category.component";

import {ProductContainer} from './shop.styles';
import {getCategoriesAndDocuments} from "../../utils/firebase/firebase.utils";
import {fetchCategoriesAsync, fetchCategoriesStart, setCategories} from "../../store/categories/category.action"

const Shop = () => {

    const dispatch = useDispatch();

    useEffect(() => {
            dispatch(fetchCategoriesStart());
    }, [dispatch]);

    return (
        <Routes>
            <Route index element={<CategoriesPreview />} />
            <Route path={':category'} element={<Category />} />
        </Routes>
    );
};

export default Shop;