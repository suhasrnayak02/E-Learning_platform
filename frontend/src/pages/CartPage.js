import Navbar from '../components/Navbar';
import Breadcrumb from "../components/Breadcrumb";
import Cart from '../components/cart/Cart';
import { useState } from 'react';


export default function CartPage(){

    const [isUpdate, update] = useState(false)
    function updateUI(val){
        update(true)
    }

    return(
        <>
        <Navbar />
        <Breadcrumb text="Cart"/>
        <Cart updateUI={updateUI}/>
        </>
        
    )
}