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

    let [message, setMessage] = useState("");
    let [errors, setErrors] = useState({
        name: "",
        email: "",
        password: "",
        rePassword: "",
        phone: "",
    });

    function handleRegister(e) {
        e.preventDefault();
        // console.log("Register Data:", formData);
        let namePattern = /^[a-zA-Z\s]+$/; // only letters and spaces
        let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; // basic email format
        let PasswordPattren = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{4,}$/; // minimum 4 characters, at least one letter and one number
        let PhonePattern = /^\d{8}$/; // exactly 8 digits
        let newErrors = {}; 


        if (formData.name === "") {
            newErrors.name = "Name is required";
        }else if (namePattern.test(formData.name) === false){
            newErrors.name = "Name is invalid (only letters and spaces allowed)";
        }


        if (formData.email === "") {
            newErrors.email = "Email is required";
        }else if (emailPattern.test(formData.email) === false){
            newErrors.email = "Email is invalid (example@example.com)";
        }


        if (formData.password === "") {
            newErrors.password = "Password is required";
        }
        else if (PasswordPattren.test(formData.password) === false){
            newErrors.password = "Password is invalid minimum 4 characters, at least one letter and one number";
        }


        if (formData.rePassword === "") {
            newErrors.rePassword = "Re-entering password is required";
        } else if (formData.rePassword !== formData.password) {
            newErrors.rePassword = "Passwords do not match";
        }


        if (formData.phone === "") {
            newErrors.phone = "Phone number is required";
        }else if (PhonePattern.test(formData.phone) === false){
            newErrors.phone = "Phone number is invalid (should be exactly 8 digits)";
        }

        setErrors(newErrors);

        if (Object.keys(newErrors).length > 0) {
            return;
        }
        else {
            setMessage("Registration successful!");
        }
       
        
        
    }

   



    return (
        <div className="page">
            <Header />

            <main className="page-content">
                <section className="Register-section py-5">
                    <div className="container">
                        <form className="register-form" onSubmit={handleRegister}>
                            {message && <p className="alert alert-success">{message}</p>}

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
                                {errors.name && <p className="alert alert-danger">{errors.name}</p>}
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
                                {errors.email && <p className="alert alert-danger">{errors.email}</p>}
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
                                {errors.password && <p className="alert alert-danger">{errors.password}</p>}
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
                                {errors.rePassword && <p className="alert alert-danger">{errors.rePassword}</p>}
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
                                {errors.phone && <p className="alert alert-danger">{errors.phone}</p>}
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
}

export default Register;
