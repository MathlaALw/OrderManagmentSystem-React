import "./NotFound.css";
import { Link } from "react-router-dom";
import errorImage from "../../../Img/LOGO/error.svg";


function NotFound() {
  return (
    <div className="page">

      <section className="page-content notfound-container">
       <img src={errorImage} alt="404 Not Found" className="notfound-image" />
     

        {/* <Link to="/" className="btn btn-success mt-3">
          Go Back Home
        </Link> */}
      </section>

    </div>
  );
}

export default NotFound;
