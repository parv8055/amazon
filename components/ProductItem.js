import React, { useContext } from 'react'
import { Store } from '../utils/Store'
import Link from 'next/link'
import { useRouter } from 'next/router'


export default function ProductItem({ product }) {
    const { state, dispatch } = useContext(Store)
const router=useRouter()
    const addToCartHandler=()=>{
        const existItem = state.cart.cartItems.find((x)=>x.slug === product.slug)
        const quantity = existItem ? existItem.quantity + 1 : 1

        if(product.countInStock < quantity){
           alert('sorry.Product is out of stock')
            return
        }

dispatch({type:'CART_ADD_ITEM',payload:{...product,quantity}})
router.push('/cart')
console.log(product.image)
    }
    return (
        <div className='card'>
            <Link href={`/product/${product.slug}`}>
                <img src={product.image} alt={product.name} className='rounded shadow border' />
            </Link>
            <div className='flex flex-col items-center justify-center p-5'>
                <Link href={`/product/${product.slug}`}>
                    <h2 className='text-lg'>{product.name}</h2>
                </Link>
                <p className='mb-2'>{product.brand}</p>
                <p>$ {product.price}</p>
                <button className='primary-button' type='button' onClick={addToCartHandler}>Add To Cart</button>
            </div>
        </div>
    )
}
