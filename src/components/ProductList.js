import React,{ useState,useEffect } from "react";
import Category from "./Category";

function ProductList(){
    
   const [producto, setProducto] = useState(["Loading.."])
    
    const fetchDataProductList = async () => {
    const response = await fetch('http://localhost:3050/gauchitoAPIS/productos');
    const productsData = await response.json();
    setProducto(productsData.data);
    };

    useEffect(() => {
        fetchDataProductList();
        }, []);
    
   return(
            <React.Fragment>
                {/*<!-- PRODUCTS LIST -->*/}
                   <h1 className="h3 mb-2 text-gray-800">Lista de productos en base de datos</h1>
                        
                        <div className="card shadow mb-4">
                            <div className="card-body">
                                <div className="table-responsive">
                                    <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                                        <thead>
                                            <tr>
                                                <th>Id</th>
                                                <th>Categoria</th>
                                                <th>Producto</th>
                                                <th>Descripcion</th>
                                                
                                                
                                            </tr>
                                        </thead>
                                        <tfoot>
                                            <tr>
                                                <th>Id</th>
                                                <th>Categoria</th>
                                                <th>Producto</th>
                                                <th>Descripcion</th>
                                                
                                                
                                            </tr>
                                        </tfoot>
                
                                        <tbody>
                                        {producto.map(row => {
                                        return (
                                        <tr key={row.id}>
                                            <td>{row.id}</td>
                                            <td>{row.category}</td>
                                            <td><a href={row.detail}> {row.name} </a></td>
                                            <td>{row.description}</td>
                                            
                                            
                                        </tr>
                                    );
                            })}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>            
            </React.Fragment>
        )
    }

    export default ProductList;

