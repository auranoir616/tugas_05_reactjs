import React, { Component } from "react";
import DaftarMakanan from "../lib/DaftarMakanan";
import FormMakanan from "../form/FormMakanan";

const Listmakanan =[
    {
        NamaMakanan: "Nasi Padang",
        Harga: "20.000"
    },
    {
        NamaMakanan: "Sate",
        Harga: "20.000"
    },
    {
        NamaMakanan: "Soto",
        Harga: "10.000"
    },
    {
        NamaMakanan: "uduk",
        Harga: "10.000"
    },
    {
        NamaMakanan: "Nasi kuning",
        Harga: "15.000"
    },
    {
        NamaMakanan: "ayam geprek",
        Harga: "15.000"
    },
    {
        NamaMakanan: "pecel lele",
        Harga: "15.000"
    },
    {
        NamaMakanan: "Pecel",
        Harga: "10.000"
    },
    {
        NamaMakanan: "Mie ayam",
        Harga: "10.000"
    },
]
class MenuMakanan extends Component{
    render(){
        return(
            <div>
                <h3>Daftar Makanan Favourite</h3>
                <table>
                    <tbody>
                        <tr>
                            {DaftarMakanan.map((data, index)=>{
                                return (
                                    <td key={index}>
                                        <img src={data.img}
                                        alt="product makanan" 
                                        width="150"  
                                        height="100" />
                                        <center>
                                            <p>{data.NamaMakanan}</p>
                                            <p>Harga : Rp. {data.Harga}</p>
                                        </center>
                                    </td>
                                )
                            })}
                        </tr>
                    </tbody>
                </table>
                <h4>List Makanan </h4>
                {Listmakanan.map((data, index)=> {
                    return(
                        <div key={data}>
                            <p>
                                {data.NamaMakanan} | Harga Rp.{data.Harga}
                            </p>
                        </div>
                    )
                })}
                <FormMakanan/>
            </div>
        )
    }
}

export default MenuMakanan