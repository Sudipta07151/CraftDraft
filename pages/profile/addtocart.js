import React, { useContext } from "react";
import ProductShopCard from "@/components/ProductShopCard";
import Layout from "@/components/Layout";
import Button from "@material-ui/core/Button";
import Link from "next/dist/client/link";
import AuthContext from "context/authContext";

export default function Addtocart() {
  const { addToCart, GetCartItemFunction } = useContext(AuthContext);
  const [item, setItem] = React.useState(null);
  React.useEffect(() => {
    GetCartItemFunction();
    setItem(addToCart);
  }, []);
  console.log(addToCart);
  return (
    <div>
      <Layout>
        <ProductShopCard data={addToCart} />
        <div
          style={{
            width: "100%",
            position: "absolute",
            top: "400px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Link href={`/shoppingcard`} passHref>
            <Button
              color="primary"
              variant="contained"
              style={{ borderRadius: "0px" }}
            >
              CHECKOUT
            </Button>
          </Link>
        </div>
      </Layout>
    </div>
  );
}
