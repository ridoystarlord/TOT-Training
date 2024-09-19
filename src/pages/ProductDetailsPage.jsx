import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/shared/Navbar";

export default function ProductDetailsPage() {
  let { productId } = useParams();
  const [product, setProduct] = useState({ name: "", mainImageUrl: "" });
  const getSingleProductBySlug = async () => {
    const { data } = await axios.get(
      `https://api.glowmeko.com/v1/products/single/${productId}`
    );
    if (data?.result) {
      setProduct({
        name: data?.result?.name,
        mainImageUrl: data?.result?.mainImageUrl,
      });
    }
  };
  useEffect(() => {
    getSingleProductBySlug();
  }, []);
  return (
    <div>
      {product?.name}
      <img
        src={`https://glowmeko.s3.amazonaws.com/${product.mainImageUrl}`}
        alt=""
      />
    </div>
  );
}
