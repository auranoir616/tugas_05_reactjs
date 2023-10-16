import React, {Component} from "react";

class FormMakanan extends Component{
    constructor(props){
        super(props)
        this.state = {
            pesanan: "",
            jumlah: ""
        }
        this.handlechange = this.handlechange.bind(this)
        this.handlesubmit = this.handlesubmit.bind(this)
        this.handlechangejumlah = this.handlechangejumlah.bind(this)
        this.pesanan = React.createRef()
    }
    handlechange(e){
        this.setState ({pesanan: e.target.value})
    }
    handlechangejumlah(e){
        this.setState ({jumlah: e.target.value})
    }
    handlesubmit(e){
        e.preventDefault()
        alert("pesanan anda adalah : "+this.state.pesanan + "| jumlahpesanan : "+this.state.jumlah)
    this.setState({Pesanan: "",jumlah: ""})
    this.pesanan.current.focus()
    }
render(){
    return(
        <div>
            <center>
                <form onSubmit={this.handlesubmit}>
                    <input onChange={this.handlechange} type="text" value={this.state.pesanan} ref={this.pesanan} placeholder="Masukan pesanan anda"/>
                    <input onChange={this.handlechangejumlah} type="number" value={this.state.jumlah} placeholder="Masukan jumlah pesanan "/>
                    <br/><br/>
                    <input type="submit" value="pesan"/>
                </form>
            </center>
        </div>
    )
}
}

export default FormMakanan