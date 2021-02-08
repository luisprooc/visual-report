import React from 'react';


const ReportFooter = ({modulos}) => {

    return(
        <>
            <table className="table table-striped mt-4" style={{ maxWidth:"60%" }}>
                    <thead>
                        <tr>
                        <th scope="col" className="col-md-2">Modulos</th>
                        <th scope="col" className="col-md-2" >Acumulable</th>
                        <th scope="col" className="col-md-2">Total</th>
                        </tr>
                    </thead>
                    <tbody>
                    
                    {
                        modulos.map((item,i) => {
                            const { codigo_asignatura,acumulado, total  } = item;
                            return(
                                <tr key={i}>
                                    <th scope="row"> {codigo_asignatura} </th>
                                    <td> {acumulado} </td>
                                    <td> {total} </td>
                                </tr>
                            )
                        })
                    }
                    </tbody>
            </table>
        </>
    )
};



export default ReportFooter;