import React from 'react';
import ReportHead from './report-head';
import ReportBody from './report-body';
import Data from "./data.json";

const Report = () => {

    return(
        <div className="container py-5">
            <div className="row justify-content-center">
                <div className="col">
                    <ReportHead 
                        data={Data}
                    />
                    <ReportBody 
                        data={Data}
                    />
                </div>
            </div>
        </div>
    );
};

export default Report;