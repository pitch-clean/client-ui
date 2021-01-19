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
        border: `1px solid grey`,
        margin: `0 50px`,
        color: `black`,
    };
    return (
        <div className="h100 ctnr flexrow" style={style} >
            {isAuthenticated ? <ProfileDropDown /> : <LoginRegister />}
        </div>
    )
};

// export
export default ProfileLoginRegister;
