import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductShowCase from '../components/ProductShowCase';

function Shop() {
  return (
    <>
      <Header route='shop'></Header>
      <ProductShowCase />
      <Footer />
    </>
  );
}

export default Shop;
