import React from 'react'
import ReactDOM from 'react-dom/client'
import Computador from './components/Computador'
import './index.css'
 
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Carro nome='Fox' preco='100.000' /> */}
    <Computador nome="Dell" preco="4.000" processador="Ryzen 5" memoria="SSD" placa="VGA"/>
    <Computador nome="Asus" preco="3.500" processador="Intel Core i7" memoria="RAM" placa="MDA"/>
    <Computador nome="Lenovo" preco="2.990" processador="Intel Core i5" memoria="RAM" placa="MDA"/>
    <Computador nome="Positivo" preco="1.050" processador="Intel Core i7" memoria="RAM" placa="MDA"/>
    <Computador nome="Asus" preco="3.500" processador="Intel Core i7" memoria="RAM" placa="MDA"/>
    <Computador nome="Asus" preco="4.900" processador="Intel Core i7" memoria=" SSD" placa="MDA"/>
  </React.StrictMode>
)