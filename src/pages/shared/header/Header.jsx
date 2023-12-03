import React from 'react';
import logo from '../../../assets/logo2.jpeg'
import moment from 'moment';

const Header = () => {
    return (
        <div>
          <div className='mx-auto text-center'>
          <img src={logo} alt="" />
           <p className='text-secondary'>Journalism Without Fear or Favor</p>
           <h4 className='text-secondary'>{moment().format('dddd,MMMM D,YYYY')}</h4>
          </div>
        </div>
    );
};

export default Header;