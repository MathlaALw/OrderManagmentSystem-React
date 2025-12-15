import { useState } from "react";
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import "./Register.css";

function Register() {
    let [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        rePassword: "",
        phone: "",
    })

    function handleChange(e) {
        let { name, value } = e.target;
        setFormData((x) => ({...x, [name]: value}));
    }

    function handleRegister(e) {
        e.preventDefault();
        console.log("Register Data:", formData);

    }




    return (
        <div className="page">
            <Header />

            <main className="page-content">
                <section className="Register-section py-5">
                    <div className="container">
                        <form className="register-form" onSubmit={handleRegister}>
                            <h4>Register Now :</h4>

                            <div className="mb-3">
                                <label>Name :</label>
                                <input
                                    type="text"
                                    name="name"
                                    className="form-control"
                                    value={formData.name}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="mb-3">
                                <label>Email :</label>
                                <input
                                    type="email"
                                    name="email"
                                    className="form-control"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="mb-3">
                                <label>Password :</label>
                                <input
                                    type="password"
                                    name="password"
                                    className="form-control"
                                    value={formData.password}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="mb-3">
                                <label>rePassword :</label>
                                <input
                                    type="password"
                                    name="rePassword"
                                    className="form-control"
                                    value={formData.rePassword}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="mb-3">
                                <label>Phone :</label>
                                <input
                                    type="text"
                                    name="phone"
                                    className="form-control"
                                    value={formData.phone}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="d-flex justify-content-end">
                                <button type="submit" className="btn btn-success">
                                    Register
                                </button>
                            </div>
                        </form>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default Register;
