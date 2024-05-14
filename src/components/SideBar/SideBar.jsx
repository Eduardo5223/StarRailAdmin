import React from 'react'
import './SideBar.css'
import { assets } from '../../assets/assets'

const SideBar = () => {
  return (
    <div className="sidebar">
        <div className="sidebar-options">
            <div className='sidebar-option'>
                <img src={assets.add_icon} alt="" />
                <p>Agregar Producto</p>
            </div>
            <div className='sidebar-option'>
                <img src={assets.order_icon} alt="" />
                <p>Lista de Productos</p>
            </div>
            <div className='sidebar-option'>
                <img src={assets.add_icon} alt="" />
                <p>Pedidos</p>
            </div>
        </div>
    </div>
  )
}

export default SideBar