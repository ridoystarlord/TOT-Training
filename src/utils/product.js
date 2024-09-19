export async function getAllProduct() {
  const res = await fetch(
    "https://api.glowmeko.com/v1/products/home/get-all?productType=Skin+Care",
    {
      method: "GET",
    }
  );
  const result = await res.json();

  return result;
}
