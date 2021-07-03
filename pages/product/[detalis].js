import React from 'react';
import Layout from '@/components/Layout';
import SingleProduct from '@/components/SingleProduct'
import AddReview from '../../components/AddReview';
import ReviewList from '@/components/ReviewList';

export default function detalis() {
    return (
        <div>
            <Layout>
                <SingleProduct />
                <AddReview />
                <ReviewList />
            </Layout>
        </div>
    )
}
