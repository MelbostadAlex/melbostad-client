import Header from '../components/Header';
import Footer from '../components/Footer';
import SigninForm from '../components/SigninForm';

function Signin() {
  return (
    <>
      <Header route='signin'></Header>
      <SigninForm />
      <Footer />
    </>
  );
}

export default Signin;
