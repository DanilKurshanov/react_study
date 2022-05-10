import {useContext, useState, useEffect, Fragment} from "react";
import {useSelector} from "react-redux";
import {useParams} from 'react-router-dom';

import ProductCard from "../../components/product-card/product-card.componen";
import Spinner from '../../components/spinner/spinner.component';

// import {CategoriesContext} from "../../contexts/categories.context";
import {selectCategoriesMap, selectCategoriesIsLoading} from "../../store/categories/category.selector";

import {CategoryContainer, CategoryTitle} from './category.styles';



const Category = () => {
    const {category} = useParams();
    // const {categoriesMap} = useContext(CategoriesContext);
    const categoriesMap = useSelector(selectCategoriesMap);
    const isLoading = useSelector(selectCategoriesIsLoading);
    const [products, setProducts] = useState(categoriesMap[category]);

    useEffect(() => {
        setProducts(categoriesMap[category]);
    }, [category, categoriesMap]);

    return (
        <Fragment>

            <CategoryTitle>{category.toUpperCase()}</CategoryTitle>
            {isLoading ? (
                <Spinner />
            ) : (
                <CategoryContainer>
                    {
                        products && products.map((product) => <ProductCard key={products.id} product={product}/>)
                    }
                </CategoryContainer>
                )}
        </Fragment>
    );
};

export default Category;