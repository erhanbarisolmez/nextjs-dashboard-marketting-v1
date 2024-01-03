import IProductService from "@/lib/product";
import Image from 'next/image';
const NotificationsPage = async ({params:{locale}}) => {
  // Initiate both requests in parallel
  const productService = new IProductService()
  const products = await productService.getProduct()
  return (
    <>
   
      <ul>
        {products.map((product, index) => (
          <li key={index}>
            {product.category}
            <Image src={product.image} alt={product.category} width={50} height={50}/>
          </li>
        ))}
      </ul>
      
    </>
  );
};

export default NotificationsPage;
