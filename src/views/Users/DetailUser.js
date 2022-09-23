import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ListUser.scss';
import { Navigate, useNavigate, useParams } from 'react-router-dom';

function DetailUser(props) {
    const [listUsers, setlistUsers] = useState([]);
    const [isLoading, setisLoading] = useState(true);
    console.log('>>Check props detail', props.location);
    let { id } = useParams();
    useEffect(() => {
        console.log('Check id Param', id);
        if (!isLoading)
            return;
        axios.get('https://reqres.in/api/users?page=1')
            .then((res) => {
                console.log('>>Check res:', res)
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
        console.log(`>>Check userOnClick`, item);
        // <Navigate replace to="home" />
        navigate(`/user/:${item.id}`, { replace: false });
    }

    return (
        <div>Hello this child</div>
    )
}

export default DetailUser;