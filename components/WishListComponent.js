import React, { useContext } from "react";
import WishListCard from "./WishListCard";

import AuthContext from "context/authContext";

export default function WishListComponent(props) {
  console.log(props);
  const { wishListData } = useContext(AuthContext);
  console.log("wlist", wishListData);
  const render = () => {
    return wishListData.map((el) => {
      return <WishListCard data={el} key={el.id} />;
    });
  };
  return (
    <React.Fragment>
      {props.data.pro_data.length === 0 ? "Nothing To Show" : render()}
      {/* {<ProductCard data={props.products} />} */}
    </React.Fragment>
  );
}
