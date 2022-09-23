import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ListUser.scss';
import { Navigate, useNavigate } from 'react-router-dom';

function ListUser() {
    const [listUsers, setlistUsers] = useState([]);
    const [isLoading, setisLoading] = useState(true);

    useEffect(() => {
        if (!isLoading)
            return;
        axios.get('https://reqres.in/api/users?page=1')
            .then((res) => {
                setlistUsers(res && res.data && res.data.data ? res.data.data : []);
            }).then(setisLoading(false));

        // this.setState({
        //     listUsers: res && res.data && res.data.data ? res.data.data : []
        // }
        // )
        console.log('res data: ');
    });


    let navigate = useNavigate();
    const childUserOnCLick = (item) => {
        console.log(`>>Check userOnClick`, {
            state: {
                userId: item.id,
            }
        });
        // <Navigate replace to="home" />
        navigate(`/user/${item.id}`, item);
    }

    return (
        <div className='list-user-container'>
            <div className='title'>
                Fetch all list users
            </div>
            <div className='list-user-content'>
                {
                    listUsers && listUsers.length > 0 &&
                    listUsers.map((item, index) => {
                        return (
                            <div className='child' onClick={() => childUserOnCLick(item)} key={item.id}>
                                {item.id} - {item.first_name}
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default ListUser;