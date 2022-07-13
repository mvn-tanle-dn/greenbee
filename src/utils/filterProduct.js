export const filterProductById = (products, productIds) => {
  return products?.filter((product) => {
    return productIds?.find((productId) => {
      return productId.product_id === product.id;
    });
  });
};
