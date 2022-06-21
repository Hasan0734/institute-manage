import React from "react";
import Aktaruzzaman from "../../../image/professor/aktaruzzaman.jpg";
import "./ViceChancellor.css";
const ViceChancellor = () => {
  return (
    <section className="feature-area">
      <div className="container ">
        <div className="row">
          <div className="col-md-3 col-sm-12 mx-2 mx-sm-0" data-aos ="fade-left" data-aos-duration="1000">
            <div className="feature-box " >
              <a
                className="text-decoration-none text-dark area-box"
                href="#professor"
              >
                <div className="area-content-box ">
                  <p className="mb-0">
                    <img src={Aktaruzzaman} height="180" width="200" alt="" />
                  </p>
                  <p className="mb-0 prof-name">Prof.Dr.Md. Akhtaruzzaman</p>
                  <h5 className="text-center prof-position">
                    <strong>Vice Chancellor</strong>
                  </h5>
                </div>
              </a>
            </div>
          </div>
          <div className="col-md-9 col-sm-12 mt-3 mt-sm-0 mx-2 mx-sm-0 " data-aos ="fade-up" data-aos-duration="1000">
            <div className="area-box message-box " >
              <h4>Message from the Vice Chancellor</h4>
              <p className="text-justify">
                Welcome to the University of Dhaka’s website, featuring the
                oldest, largest and the premier multidisciplinary university of
                Bangladesh!&nbsp; Founded in 1921, The University of Dhaka has
                always had the mission of uplifting the educational standards of
                the people of the region. It was initially meant to provide
                tertiary education to people who didn’t have access to higher
                studies till then. Subsequently, it has contributed
                significantly to the socio-cultural and political development of
                what was once East Bengal and then East Pakistan, and is now
                Bangladesh.Since its establishment, the university has been
                fulfilling the hopes and aspirations ...
                <button className="btn btn-outline-dark ">Read more..</button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ViceChancellor;
