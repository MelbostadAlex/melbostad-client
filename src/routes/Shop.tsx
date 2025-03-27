import Footer from '../components/Footer';
import Header from '../components/Header';
import ProductCarousell from '../components/ProductCarousell';

function Shop() {
  return (
    <>
      <Header route='shop'></Header>
      <ProductCarousell />
      <Footer />
    </>
  );
}

export default Shop;
