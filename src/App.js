import {useEffect, useState} from 'react'
import axios from 'axios'

function App() {

  const[barang, setBarang] = useState();

  const getBarang = async () => {
    try {
      let response = await axios.get('http://localhost:8800/')
      // console.log(response.data)
      setBarang(response.data)
    } catch (e) {
      console.log(e.message)
    }
  }

  useEffect (() => {
    getBarang();
  },[])

  return (
    <div className="py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <table className="table">
              <thead>
                <tr>
                  <th>Nama Barang</th>
                  <th>Stok</th>
                  <th>Jumlah Terjual</th>
                  <th>jenis Barang</th>
                  <th>tanggal Transaksi</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                      {barang.map((barang) => {
                        return (
                          <td key={barang.id}>
                          {barang.nama_barang}
                          {barang.stok}
                          {barang.jumlah_terjual}
                          {barang.jenis_barang}
                          {barang.tanggal_transaksi}</td>
                        )
                      })}
               </tr> 
              </tbody>
             </table>
           </div>
         </div>
       </div>
     </div>
  );
}

export default App;
