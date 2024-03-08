import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Showtable() {
  const [data, setData] = useState([])
  const [column, setColumn] = useState([])
  useEffect(() => {
    axios.get("https://bbsr-backend-2.onrender.com/admin/showall").then((res) => {
     
   
      res.data.forEach((element) => {
        delete element.verifieduser.password
        delete element._id
        delete element.__v
        delete element.verifieduser.avaiter
      })
      setColumn(Object.keys(res.data[0].verifieduser))
      const arr = res.data.map((element) => {
        console.log(element.verifieduser)
        return element.verifieduser
      })
      console.log(arr)
      console.log(res.data[0].verifieduser)
      setData(arr)
    })
      .catch((err) => {
        console.log(err)
      })
  }, [])
  return (

    <>
      <div className="mt-8 lg:mx-auto lg:w-full lg:max-w-xl">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg lg:px-10 text-black">
          <table className='table-auto border-separate border-spacing-4 text-center w-full'>
            <thead>
              <tr className='bg-emerald-300'>
                {column.map(function (x) { return x.toUpperCase(); }).map((c, i) => {
                return  <th key={i}>{c}</th>
                })}
                
              </tr>
            </thead>
            <tbody>
              {
                data.map((d, i) => [
                  <tr key={i} >
                    <td>{d.name}</td>
                    <td>{d.email}</td>
                    <td>{d.role}</td>
                  </tr>
                ])
              }
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default Showtable
