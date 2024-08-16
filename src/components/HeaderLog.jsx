import React from 'react';
import PropTypes from 'prop-types';
import user from "../assets/user.png";
HeaderLog.propTypes = {
    isLogin:PropTypes.bool
};
HeaderLog.defaultProps ={
    isLogin: false
} 

function HeaderLog(props) {
    if(props.isLogin){
        return (
        
            <div>
                 <img
              className="header-container__right__user"
              src={user}
              alt="User"
            ></img>
            </div>
        );
    }
    else{
        return (
            <div>
                 <button className='logBtn'>Log In</button>
            </div>
        );
    }

}

export default HeaderLog;