import { useState } from "react";

// import fashion data
import { womensFashion, mensFashion } from "../../Data/FationData";

// import FashionCard component
import FashionCard from "./FashionCard/FashionCard";


import "./Login.css";

function Login() {
  // state to track login status
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // state to control fashion section visibility
  const [showFashion, setShowFashion] = useState(false);

  // handle login/logout button click
  function handleLoginLogout() {
    // toggle login state using previous value
    setIsLoggedIn(function (prev) {
      return !prev;
    });

    // show fashion section after first click
    setShowFashion(true);
  }

  // determine which fashion list to display
  const fashionList = isLoggedIn ? womensFashion : mensFashion;

  return (
    <div className="page">


      <section className="page-content">
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
                onClick={handleLoginLogout}
              >
                {isLoggedIn ? "Logout" : "Login"}
              </button>
            </div>

            {/* Fashion Section */}
            {showFashion && (
              <div className="mt-5">
                <h5 className="mb-4">
                  {isLoggedIn ? "Women's Fashion" : "Men's Fashion"}
                </h5>

                <div className="row">
                  {fashionList.map(function (item) {
                    return <FashionCard key={item.id} item={item} />;
                  })}
                </div>
              </div>
            )}
          </div>
        </section>
      </section>

    </div>
  );
}

export default Login;
