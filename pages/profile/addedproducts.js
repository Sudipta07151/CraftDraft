import React from "react";
import ProductEditCardList from "@/components/ProductEditCardList";
import Layout from "@/components/Layout";
import { API_URL } from "config";
export default function Addedproducts({ pro_data }) {
  return (
    <div>
      <Layout>
        <ProductEditCardList data={pro_data} />
      </Layout>
    </div>
  );
}

export async function getServerSideProps() {
  const res = await fetch(`${API_URL}/product-lists`);
  const pro_data = await res.json();
  return {
    props: {
      pro_data,
      revalidate: 1,
    },
  };
}
