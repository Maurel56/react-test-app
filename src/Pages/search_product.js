import {Grid, Typography } from "@mui/joy";
import CInput from "../Components/forms/input";
import CCheckbox from "../Components/forms/checkbox";
import { useState } from "react";
import ProductTable from "../Components/tables/table_row";

const PRODUCTS = [
    {category: 'Fruits', price: '154', isStocked: true, name: 'Pomme'},
    {category: 'Fruits', price: '846', isStocked: true, name: 'Tomate'},
    {category: 'Fruits', price: '784', isStocked: false, name: 'Papaye'},
    {category: 'Fruits', price: '8 745', isStocked: true, name: 'Fraise'},
    {category: 'Fruits', price: '200', isStocked: true, name: 'Pastèque'},
    {category: 'Phone', price: '12 000', isStocked: false, name: 'Galaxie S9+'},
    {category: 'Phone', price: '90 000', isStocked: true, name: 'Huawei Nova 3i'},
    {category: 'Phone', price: '60 000', isStocked: false, name: 'Xiaomi Remi note 10'},
    {category: 'Phone', price: '20 000', isStocked: true, name: 'Iphone 14 Pro Max'},
    {category: 'Food', price: '250', isStocked: true, name: 'Eru'},
    {category: 'Food', price: '940', isStocked: true, name: 'Sauté de pomme'},
    {category: 'Food', price: '504', isStocked: false, name: 'Okok Sucré'},
]

function SearchProduct() {

    const [searchValue, setsearchValue] = useState("")
    const [showStock, setShowStock] = useState(true)

    const visibleProducts = PRODUCTS.filter(prod=>{
        const name = prod.name.toUpperCase();
        const value = searchValue.toUpperCase();
        if(searchValue && !name.includes(value)){
            return false
        }
        if(showStock && !prod.isStocked){
            return false
        }
        return true;
    })

    return <>
    <Grid container direction={'column'} width={'100%'}justifyContent={'center'} alignItems={"center"}>
        <Grid container direction={'column'} width={'95%'}justifyContent={'center'} alignItems={"center"} padding={2}>
            <Typography level="h1" padding={2}>Liste des produits</Typography>
            <CInput label={"Recherche..."} onChange={setsearchValue} width={'350px'}/>
            {/* <Grid xs={12} width={'90%'}> */}
            <CCheckbox 
                isChecked={showStock} 
                onChange={setShowStock} 
                label={"Afficher uniquement les articles en stock"}
            />
            {/* </Grid> */}
            <ProductTable products={visibleProducts}/>
        </Grid> 
    </Grid> 
    </>
}

export default  SearchProduct;