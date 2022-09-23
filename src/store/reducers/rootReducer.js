import { configureStore } from '@reduxjs/toolkit'

const initUser = {
    users: [
        { id: 1, name: 'Phong' },
        { id: 2, name: 'Vip pro' }
    ]
}

const rootReduce = (state = initUser, action) => {
    return state;
}

export default rootReduce;