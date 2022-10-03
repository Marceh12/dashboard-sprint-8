import React,{ useState,useEffect } from "react";

function LastItemInDb(){

    const [product, setProduct] = useState(["Loading.."])
    
    const fetchDataList = async () => {
    const response = await fetch('http://localhost:3050/gauchitoAPIS/productos');
    const datos = await response.json();
    setProduct(datos.data);
    };

    useEffect(() => {
        fetchDataList();
        }, []);
    
    let arrayProductos = product[product.length - 1];
    
    


    return(
        <React.Fragment>
            <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h5 className="m-0 font-weight-bold text-gray-800">Ultimo producto cargado </h5>
                </div>
                <div className="card-body">
                    <div className="text-center">
                    <h2>{`${arrayProductos.name}`}</h2>    
                        <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 40 +'rem'}} src={`${arrayProductos.image} `} alt={`${arrayProductos.name} `}/>
                    </div>
                    <p>{`${arrayProductos.description}`}</p>
                    <a className="btn btn-danger" target="_blank" rel="nofollow" href={`http://localhost:3050/gauchitoAPIS/productos/${arrayProductos.id}`}>Detalle</a>
                </div>
            </div>
            </div>
        </React.Fragment>
    )
}







export default LastItemInDb;