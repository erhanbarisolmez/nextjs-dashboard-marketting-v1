
import Box from '@mui/material/Box';

const ProductList = ({ product }) => {
  return (
    <>
      <Box>
        <ul>
          {product.map((product, index) => (
            <li key={index}>{product.category}</li>
          ))}
        </ul>
      </Box>
    </>
  );
};

export default ProductList;