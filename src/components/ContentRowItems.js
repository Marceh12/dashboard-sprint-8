import React,{ useState,useEffect } from "react";
import SmallCard from './SmallCard';

function ContentRowItems(){       
    
    const [products,setProducts] = useState(["Loading..."])
    const [countByCategory,setCategories] = useState(["Loading..."])

        const fetchProducts = async() => {       
        const respuesta = await fetch('http://localhost:3050/gauchitoAPIS/productos')        
        const productsArr = await respuesta.json()
        productsInDB.valor = productsArr.totalCount

        setProducts(productsArr.totalCount)
        setCategories(productsArr.categoryCount)
    };
	useEffect(()=>{
		fetchProducts()
	},[])

    const [users,setUsers] = useState(["Loading..."])
    const fetchUsers = async () =>{       
        const response = await fetch('http://localhost:3050/gauchitoAPIS/usuarios');        
        const usersArray = await response.json()
        setUsers(usersArray.count)
    };
	useEffect(()=>{
		fetchUsers()
	},[])



    let productsInDB = {
        color:   "primary",
        titulo: "Productos",
        valor: products,
        
    }
    
    let usersInDB ={
        color:   "success",
        titulo: "Usuarios",
        valor: users,
        
    }
    
    let categInDB = {
        color:   "warning",
        titulo: "Categorias",
        valor:  countByCategory,
        
    }
    
    let cardProps = [productsInDB,usersInDB,categInDB];
    
    return (
        <React.Fragment>

        <div className="row">
            {
                cardProps.map((elem,index)=>{
                    return <SmallCard  {...elem}  key= {index}/>
                })
            }      
        </div>
        </React.Fragment>
    )
}
export default ContentRowItems;