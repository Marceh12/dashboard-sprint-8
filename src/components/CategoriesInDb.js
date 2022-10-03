import React,{ useState,useEffect } from "react";
import Category  from './Category';

function CategoriesInDb(){
   
    const [prodCat, setprodCat] = useState(["Loading.."])

        const fetchDataProductCatList = async () => {
        const response = await fetch('http://localhost:3050/gauchitoAPIS/productos');
        const productsDataCat = await response.json();
    
        setprodCat(productsDataCat.categories);
        };
        useEffect(() => {
            fetchDataProductCatList();
            }, [])

        return (
                    <React.Fragment>
                        {/*<!-- Categories in DB -->*/}
                        <div className="col-lg-6 mb-4">						
                            <div className="card shadow mb-4">
                                <div className="card-header py-3">
                                    <h6 className="m-0 font-weight-bold text-gray-800">Categorias de Productos</h6>
                                </div>
                                <div className="card-body">
                                <div className="row">
                                {
                
                                Object.keys(prodCat).map((category, index)=> {
                                return <Category category={category + ": " + prodCat[category]} key={index} />
                                    })
                                }
                                </div>
                                </div>
                            </div>
                        </div>
                    </React.Fragment>
                )
            }

export default CategoriesInDb;