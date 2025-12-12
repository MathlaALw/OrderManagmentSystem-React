import { useState } from "react";

// import fashion data
import { womensFashion, mensFashion } from "../../Data/FationData";
// import FashionCard component
import FashionCard from "./FashionCard/FashionCard";

import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";

import "./Login.css";

const Login = () => {

    // state to track login status
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    // state to control fashion section visibility
    const [showFashion, setShowFashion] = useState(false);
    // handle login/logout button click
    const handleLoginLogout = () => {
        // toggle login state
        setIsLoggedIn((isLoggedIn) => !isLoggedIn); // previous state -- (False -> True) or (True -> False)

        // show fashion section after first click
        setShowFashion(true); // always true after first click
    };

    // determine which fashion list to display
    const fashionList = isLoggedIn ? womensFashion : mensFashion;

    return (
        <div className="page">
            <Header />

            <main className="page-content">
                <section className="Login-section py-5">
                    <div className="container">
                        <div>
                            <h4>Login Now :</h4>

                            <div className="mb-3">
                                <label className="form-label">Email :</label>
                                <input type="email" className="form-control" />
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Password :</label>
                                <input type="password" className="form-control" />
                            </div>


                            <button
                                type="button"
                                className="btn btn-success"
                                // toggle login/logout state on button click
                                onClick={handleLoginLogout}
                            >
                                {isLoggedIn ? "Logout" : "Login"}
                            </button>
                        </div>

                        {/* Fashion Section */}
                        {showFashion && (
                            <div className="mt-5">
                                <h5 className="mb-4">
                                     {/* display title based on login status */}
                                    {isLoggedIn ? "Women's Fashion" : "Men's Fashion"}
                                </h5>
                                    {/* display fashion cards based on login status -- Fashion Cards in other component */}
                                <div className="row">
                                    
                                    {fashionList.map((item) => (
                                        <FashionCard  item={item} />
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default Login;
