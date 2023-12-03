import React from 'react';
import qzon1 from '../../../assets/qZone1.png'
import qzon2 from '../../../assets/qZone2.png'
import qzon3 from '../../../assets/qZone3.png'

const Qzone = () => {
    return (
        <div className='bg-light p-2'>
            <h3>Q-Zone</h3>
            <div className='text-center'>
            <img src={qzon1} alt="" />
            <img src={qzon2} alt="" />
            <img src={qzon3} alt="" />
            </div>
        </div>
    );
};

export default Qzone;