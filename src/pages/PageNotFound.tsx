// import React from "react";
import NotFound from '/images/404_page_not_found.webp';
// import sampleImage from '/images/open_road_002.jpg';

export default function PageNotFound() {
  return (
    <div className="text-center">
      {/*  <img src={sampleImage} alt="Open Road" className="img-fluid mb-3" style={{ maxWidth: '450px', height: '250px' }} />  */}

      <h1>Page Not Found! </h1>
      
      
      <p><i className="bi bi-bug-fill"></i>    We are sorry!  We can't find your page.  Please try again. 
      </p>
      <br />
      
      <img src={NotFound} alt="404.  Oops! Page NOT Found!" className="img-fluid mb-3 rounded" style={{ maxWidth: '600px', height: '332px' }} />
      <br />
      <h1 className="text-danger">404 Page</h1>



    </div>
  );
}
