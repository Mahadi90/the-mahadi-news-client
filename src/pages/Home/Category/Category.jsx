import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import NewsCard from '../NewsCard/NewsCard';


const Category = () => {

    const {id} = useParams() 
    const allCategoryNews = useLoaderData()

    return (
        <div>
            <h2>Here total news:{allCategoryNews.length}</h2>
            {
                allCategoryNews.map(singleCategoruNews => 
                <NewsCard
                key={singleCategoruNews._id}
                singleCategoruNews={singleCategoruNews}
                ></NewsCard>)
            }
        </div>
    );
};

export default Category;