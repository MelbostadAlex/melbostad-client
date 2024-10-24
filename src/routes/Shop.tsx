import Header from '../components/Header';
import Footer from '../components/Footer';
import SigninForm from '../components/SigninForm';
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
