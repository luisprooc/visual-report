import React from 'react';
import ReportHead from './report-head';
import ReportBody from './report-body';
import ReportFooter from './report-footer';
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

                    {/* If report contains Modules, render it */}
                    { Data.modulos && <ReportFooter modulos={Data.modulos}/> }

                    <div className="d-flex justify-content-end" style={{ paddingTop: "6%"}}>
                        <p style={{ paddingRight: "15%"}}>Titular</p>
                        <p>Director</p>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Report;