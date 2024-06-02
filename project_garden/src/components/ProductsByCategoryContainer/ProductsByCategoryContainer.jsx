import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import ProductByCategoryCard from '../ProductByCategoryCard/ProductByCategoryCard';
import { fetchProductsByCategory } from '../../store/slices/dataSlice';
import { useParams } from 'react-router-dom';
import styles from './ProductsByCategoryContainer.module.css'
import FormSortPrice from '../FormSort/FormSortPrice/FormSortPrice';
import FormDiscountItems from '../FormSort/FormDiscountItems/FormDiscountItems';
import FormSelect from '../FormSort/FormSelect/FormSelect';
import { selectProducts } from '../../store/slices/productsSlice';

export default function ProductsByCategoryContainer() { 

    const { categoryId } = useParams();

    const dispatch = useDispatch();

   const products = useSelector(selectProducts);
    const { currentCategory } = useSelector(
      (state) => state.data
    );
    
    useEffect(() => {
      dispatch(fetchProductsByCategory(categoryId));
    }, [dispatch, categoryId]);
  
  
  return (
    <div>
      {currentCategory && (
        <h1 className={styles.title}>{currentCategory.title}</h1>
      )}
      <div className={styles.sortBlock}>
        {/* Price */}
        <FormSortPrice />

        {/* DiscountItems */}
        <FormDiscountItems />

        {/* Select */}
        <FormSelect />
      </div>

      <div className={styles.productsBlock}>
        {products.map(
          (el) => el.visible && <ProductByCategoryCard key={el.id} {...el} />
        )}
      </div>
    </div>
  );
}
