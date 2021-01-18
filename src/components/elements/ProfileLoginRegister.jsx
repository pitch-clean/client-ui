// react
import React from 'react';
import {useSelector} from 'react-redux';
// components
import ProfileDropDown from './ProfileDropDown';
import LoginRegister from './LoginRegister';

// main
const ProfileLoginRegister = () => {
    // init hooks
    const isAuthenticated = useSelector(s => s.auth.isAuthenticated);
    // style
    /**@type {React.CSSProperties} */
    const style = {
        position: `absolute`,
        right: 0,
        margin: `0 20px`,
        display: `flex`,
        flexFlow: `row`,
        justifyContent: `center`,
        alignItems: `center`,
        border: `1px solid grey`,
        color: `black`,
    };
    return (
        <div className="h100 ctnr" style={style} >
            {isAuthenticated ? <ProfileDropDown /> : <LoginRegister />}
        </div>
    )
};

// export
export default ProfileLoginRegister;
