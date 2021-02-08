import React from 'react';

const ReportBody = ({data}) => {

    const {asignaturas} = data;


    return(
        <>
            <table className="table mt-4">
                <thead>
                    <tr>
                    <th scope="col">Asignaturas</th>
                    <th scope="col">Ago-Sept-Oct</th>
                    <th scope="col">Nov-Dic-Ene</th>
                    <th scope="col">Feb-Mar</th>
                    <th scope="col">Abr-May-Jun</th>
                    <th scope="col">CF</th>
                    </tr>
                </thead>
                <tbody>
                    
                {
                    asignaturas.map((item,i) => {
                        const { codigo_asignatura,ago_sept_oct,nov_dic_ene,feb_mar,abr_may_jun,cf } = item;
                        return(
                            <tr key={i}>
                                <th scope="row"> {codigo_asignatura} </th>
                                <td> {ago_sept_oct} </td>
                                <td> {nov_dic_ene} </td>
                                <td> {feb_mar} </td>
                                <td> {abr_may_jun} </td>
                                <td> {cf} </td>
                            </tr>
                        )
                    })
                }
                </tbody>
            </table>
        </>
    );
};

export default ReportBody;