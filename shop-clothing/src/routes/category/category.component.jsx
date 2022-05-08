import {useContext, useState, useEffect, Fragment} from "react";
import {useSelector} from "react-redux";
import {useParams} from 'react-router-dom';

import ProductCard from "../../components/product-card/product-card.componen";

// import {CategoriesContext} from "../../contexts/categories.context";
import {selectCategoriesMap} from "../../store/categories/category.selector";

import {CategoryContainer, CategoryTitle} from './category.styles';



const Category = () => {
    const {category} = useParams();
    // const {categoriesMap} = useContext(CategoriesContext);
    const categoriesMap = useSelector(selectCategoriesMap);
    const [products, setProducts] = useState(categoriesMap[category]);

    useEffect(() => {
        setProducts(categoriesMap[category]);
    }, [category, categoriesMap]);

    return (
        <Fragment>
            <CategoryTitle>{category.toUpperCase()}</CategoryTitle>
            <CategoryContainer>
                {
                    products && products.map((product) => <ProductCard key={products.id} product={product} />)
                }
            </CategoryContainer>
        </Fragment>
    );
};

export default Category;