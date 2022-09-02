import React from 'react';
import { useState, useEffect } from 'react';



const Users = () => {
    const [users, setUsers] = useState([]);
    const [page, setPage] = useState(1)
    useEffect(() => {
        getData(page);
    }, [page])

    const getData = async (page) => {
        const data = await fetch("https://reqres.in/api/users?page=" + page);
        const dataJson = await data.json();
        setUsers(dataJson.data)
    }

    function nextPage(){
        setPage(page + 1);
        document.getElementById('next').classList.add('disabled')
        document.getElementById('prev').classList.remove('disabled')
    }

    function prevPage(){
        setPage(page - 1)
        document.getElementById('prev').classList.add('disabled')
        document.getElementById('next').classList.remove('disabled')
    }

    return (
        <div className='mt-3'>
            <h2>Lista de usuarios</h2>
            <table className='table table-hover'>
                <thead>
                    <tr>
                        <th scope='col'>Img avatar</th>
                        <th scope='col'>Nombre</th>
                        <th scope='col'>Apellido</th>
                        <th scope='col'>Correo</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(item => (
                        <tr
                            className='fs-5 fst-italic align-middle'
                            key={item.id}>
                            <td >
                                <img src={item.avatar} className="mx-auto rounded-circle " alt="..." style={{ width: "4rem" }}></img>
                            </td>
                            <td>{item.first_name}</td>
                            <td>{item.last_name}</td>
                            <td>{item.email}</td>


                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="btn-group" role="group" aria-label="Basic example">
                <button type="button" className="btn btn-outline-primary disabled" onClick={prevPage} id='prev'><i className="bi bi-chevron-double-left"></i> Anterior</button>
                <button type="button" className="btn btn-outline-primary" onClick={nextPage} id='next'>Siguiente <i className="bi bi-chevron-double-right"></i></button>
            </div>
           
        </div>
    );
}

export default Users;
