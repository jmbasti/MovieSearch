import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="d-flex">
              <p className="text-center">About Movie Search</p>
              <p className="text-center px-4">Contact</p>
              <p className="text-center">Become a Patreon</p>
            </div>
          </div>
          <div className="col-md-4">
            <p className="font-weight-bold text-center text-white">
              Movie Search
            </p>
          </div>
          <div className="col-md-4">
            <p className="text-center">
              &copy; 2018 Movie Search. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
