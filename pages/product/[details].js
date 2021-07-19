import React from 'react';
import Layout from '@/components/Layout';
import SingleProduct from '@/components/SingleProduct'
import AddReview from '../../components/AddReview';
import ReviewList from '@/components/ReviewList';
import { API_URL } from '../../config/index';


export default function details({ product }) {
    console.log(product)
    return (
        <div>
            <Layout>
                <SingleProduct data={product} />
                <AddReview />
                <ReviewList />
            </Layout>
        </div>
    )
}

export async function getServerSideProps({ query: { details } }) {
    console.log('from single product', details);
    const res = await fetch(`${API_URL}/product-lists?key=${details}`);
    const data = await res.json();
    console.log('returned data:', data)
    return {
        props: {
            product: data[0]
        }
    }
}