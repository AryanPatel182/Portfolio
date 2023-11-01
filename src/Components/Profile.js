import React from 'react'
import { ProfileDesc } from './ProfileDesc';
import  photo from '../Images/4.jpg';

export const Profile = () => {
    return (
        <div className="container text-center mt-3">
            <div className="frame">
                <img src={photo} alt="Nature" />
            </div>
            <ProfileDesc/>
        </div>
    )
}

