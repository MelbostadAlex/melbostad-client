import Header from "../components/Header";
import Footer from "../components/Footer";
import SignupForm from "../components/SignupForm";

function Signup() {
    return (
        <>
            <Header route='signup'></Header>
            <SignupForm/>
            <Footer />
        </>
    );
  }

export default Signup;
  
  