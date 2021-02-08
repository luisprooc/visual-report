import React from 'react';


const ReportFooter = ({modulos}) => {
    return(
        <>
            <table className="table mt-4">
                    <thead>
                        <tr>
                        <th scope="col" className="col-md-2">Modulos</th>
                        <th scope="col"className="col-md-2" >Acumulable</th>
                        <th scope="col" className="col-md-2">Total</th>
                        </tr>
                    </thead>
                    
            </table>
        </>
    )
};



export default ReportFooter;