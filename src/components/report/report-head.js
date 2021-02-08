import React from 'react';

const ReportHead = ({data}) => {
    const {
        nombre_centro, direccion_centro, tel_centro,
        correo_centro, fecha_boletin, periodo, curso,
        numero_estudiante,logo_centro, nombre_estudiante,
        nombre_titular
    } = data;


    return(
        <>
            <div className="row ">
                <div className="col-md-11">
                    <h4>{nombre_centro}</h4>
                    <h6>{direccion_centro}</h6>
                </div>

                <div className="col">
                    <img src={logo_centro} alt="logo" height="80rem"/>
                </div>
            </div>
            <div className="d-flex" style={{ marginTop: "-1%" }}>
                <p>TEL: {tel_centro}</p>
                <p className="mx-1">| Email: {correo_centro}</p>
            </div>
            <p className="fw-bolder" >BOLETIN: {periodo} FECHA: {fecha_boletin}</p>
            <div className="mt-5 d-flex">
                <p> CURSO: {curso} </p>
                <p className="mx-1"> | #{numero_estudiante} </p>
                <p> | EST: {nombre_estudiante} </p>
                <p className="mx-1"> | PROF. TITULAR: {nombre_titular}</p>
            </div>
        </>
    );
};

export default ReportHead;