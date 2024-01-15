import React from "react";

const Buses = () => {
  return (
    <div className="Page">
        <p className="d-inline-flex gap-1">
          <button
                    className="btn btn-primary"
                    type="button"
                    data-bs-toggle=".Buses"
                    data-bs-target="#collapseExample"
                    aria-expanded="false"
                    aria-controls="collapseExample"
          >
            <img src="collapse-button-md.png" alt="" />
          </button>
        </p>
    <div className="Buses">
        

      <div className="filters" id="collapseExample">
        
        
      </div>

      <div className="buses_list"></div>
    </div>
    </div>
  );
};

export default Buses;
