import React, { Component } from 'react';

class SideBar extends Component {
  render() {
    return (
      <div>
        <div id="genre">
          <h4 className="pb-2">Genre</h4>
          <div>
            <span
              id="any"
              className="badge badge-pill badge-success p-2 my-2"
              style={{ fontSize: '13px' }}
            >
              Any genre
            </span>
            <span
              className="badge badge-pill badge-secondary p-2 my-2"
              style={{ fontSize: '13px', border: '1px solid #c4c4c4' }}
            >
              Action
            </span>
            <span
              className="badge badge-pill badge-secondary p-2 my-2"
              style={{ fontSize: '13px', border: '1px solid #c4c4c4' }}
            >
              Adventure
            </span>
            <span
              className="badge badge-pill badge-secondary p-2 my-2"
              style={{ fontSize: '13px', border: '1px solid #c4c4c4' }}
            >
              Animated
            </span>
            <span
              className="badge badge-pill badge-secondary p-2 my-2"
              style={{ fontSize: '13px', border: '1px solid #c4c4c4' }}
            >
              Comedy
            </span>
            <span
              className="badge badge-pill badge-secondary p-2 my-2"
              style={{ fontSize: '13px', border: '1px solid #c4c4c4' }}
            >
              Crime
            </span>
            <span
              className="badge badge-pill badge-secondary p-2 my-2"
              style={{ fontSize: '13px', border: '1px solid #c4c4c4' }}
            >
              Documentary
            </span>
            <span
              className="badge badge-pill badge-secondary p-2 my-2"
              style={{ fontSize: '13px', border: '1px solid #c4c4c4' }}
            >
              Drama
            </span>
            <span
              className="badge badge-pill badge-secondary p-2 my-2"
              style={{ fontSize: '13px', border: '1px solid #c4c4c4' }}
            >
              Family
            </span>
            <span
              className="badge badge-pill badge-secondary p-2 my-2"
              style={{ fontSize: '13px', border: '1px solid #c4c4c4' }}
            >
              Fantasy
            </span>
            <span
              className="badge badge-pill badge-secondary p-2 my-2"
              style={{ fontSize: '13px', border: '1px solid #c4c4c4' }}
            >
              History
            </span>
            <span
              className="badge badge-pill badge-secondary p-2 my-2"
              style={{ fontSize: '13px', border: '1px solid #c4c4c4' }}
            >
              Horror
            </span>
            <span
              className="badge badge-pill badge-secondary p-2 my-2"
              style={{ fontSize: '13px', border: '1px solid #c4c4c4' }}
            >
              Mystery
            </span>
            <span
              className="badge badge-pill badge-secondary p-2 my-2"
              style={{ fontSize: '13px', border: '1px solid #c4c4c4' }}
            >
              Romance
            </span>
            <span
              className="badge badge-pill badge-secondary p-2 my-2"
              style={{ fontSize: '13px', border: '1px solid #c4c4c4' }}
            >
              Sci-fi
            </span>
            <span
              className="badge badge-pill badge-secondary p-2 my-2"
              style={{ fontSize: '13px', border: '1px solid #c4c4c4' }}
            >
              Stand-up
            </span>
            <span
              className="badge badge-pill badge-secondary p-2 my-2"
              style={{ fontSize: '13px', border: '1px solid #c4c4c4' }}
            >
              Thriller
            </span>
            <span
              className="badge badge-pill badge-secondary p-2 my-2"
              style={{ fontSize: '13px', border: '1px solid #c4c4c4' }}
            >
              War
            </span>
            <span
              className="badge badge-pill badge-secondary p-2 my-2"
              style={{ fontSize: '13px', border: '1px solid #c4c4c4' }}
            >
              Western
            </span>
          </div>
        </div>

        <div id="sign">
          <h4 className="pt-5 pb-2">Sign In</h4>
          <div className="social">
            <div className="social-border alert alert-light" role="alert">
              <a
                href="https://mail.google.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/img/google.png"
                  alt=""
                  height="20"
                  className="d-inline pr-5"
                />
                Continue with Google
              </a>
            </div>
            <div
              className="social-border alert"
              role="alert"
              style={{ background: '#3B5998' }}
            >
              <a
                href="https://www.facebook.com"
                className="text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/img/facebook.png"
                  alt=""
                  height="20"
                  className="d-inline pr-5"
                />
                Continue with Facebook
              </a>
            </div>
          </div>
        </div>

        <h4 className="pt-5 pb-2">NEWSLETTER</h4>
        <div id="newsletter" className="p-5">
          <h6>Want a weekly summary of the best additions on Movie Search?</h6>
          <small>
            Sign up for our weekly newsletter containing the best newly added
            movies and series. We won't share your email with anyone.
          </small>
          <form>
            <div className="form-group pt-3">
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
              />
            </div>

            <button type="submit" className="btn btn-info">
              Sign me up
            </button>
          </form>
        </div>

        {/* <div id="watch">
          <h4 className="pt-5 pb-2">Watchlists</h4>
          <ul className="list-group" id="myWatchLists" />
        </div> */}
      </div>
    );
  }
}
export default SideBar;
