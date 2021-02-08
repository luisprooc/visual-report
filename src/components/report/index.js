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
                    {Data.modulos && <ReportFooter modulos={Data.modulos}/>}

                    <div className="d-flex mt-4 py-4 justify-content-end">
                        <p>Titular</p>
                        <p className="mx-3">Director</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Report;