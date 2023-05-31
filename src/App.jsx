import React from 'react'
import './App.css'
import { LikeCard } from './LikeCard'

const user = [
    {
        userName: 'midudev',
        name: 'Osbaldo Anzaldo Segura',
        isFollowing: true
    },
    {
        userName: 'elonmusk',
        name: 'Elon Musk',
        isFollowing: true
    },
    {
        userName: 'PacoHdezs',
        name: 'Paco Hdez',
        isFollowing: false
    },
    {
        userName: 'TMChein',
        name: 'Tomas',
        isFollowing: false
    }
]

export function App (){

    const formatUserName = (userName) => `@${userName}`

    const vender = { formatUserName: {formatUserName}, isFollowing: true, userName: 'vxnder', name: 'Vender'}
    return (
        <section className='App'>

            {
                user.map(user => {
                    const {userName, name, isFollowing} = user
                    return (
                        <LikeCard 
                            key={userName}
                            userName={userName} 
                            name={name}
                            initialIsFollowing={isFollowing} />  
                    )
                })
            }

        </section>   
    )
}