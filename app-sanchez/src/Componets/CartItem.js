import React from 'react'

const CartItem = ({producto}) => {

     
  return (
    <div className='col-md-4 p-1'
                        key={producto.id}
                       >
                           <div className='card w-100 mt-5'>
                               <div className='card-header'>
                                   {`${producto.nombre} - ${producto.descripcion}`}
                               </div>
                               <div className='card-body'>
                               <img src={producto.img} width='200px' height='150px' ></img>
                                   
                                <div className='card-footer'> 
                                   {producto.stock}
                                </div> 
                                   
                               </div>
                            </div>
                               
                         </div>
  )
}

export default CartItem
