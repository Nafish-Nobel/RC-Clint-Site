import React from "react";

const Embedeb = () => {
  return (
    <div className="container overflow-hidden">
    <h1 className=" text-white bg-dark opacity-75 my-5 text-center   rounded py-3">
    Koenigsegg - Demo (NFS)
      </h1>
      <div className="row gy-5">
        <div className="col-lg-6">
        <div className="text-center w-75 mx-auto">
      
        <iframe
        
         width="560" height="315" src="https://www.youtube.com/embed/zoP9FlqyxTo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>

         </iframe>
    </div>
        </div>
        <div className="col-lg-6">
          <p className="text-dark text-center p-1 bg-light rounded"> 
          A car (or automobile) is a wheeled motor vehicle used for transportation. Most definitions of cars say that they run primarily on roads, seat one-to-eight people, have four wheels and mainly transport people rather than goods. ... Cars have controls for driving, parking, passenger comfort, and a variety of lights.

          </p>
        </div>
      </div>
    </div>
  );
};

export default Embedeb;
