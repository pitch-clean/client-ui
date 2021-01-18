// react
import React, {useRef, useEffect} from 'react';
import {Link} from 'react-router-dom';
// components
import ProfileLoginRegister from './ProfileLoginRegister';
// utils
import { fixedWidth, fixedHeight } from '../utils/styleFxns';

// main
const MainNavBar = () => {
    // init hooks
    const ref1 = useRef(null);
    // style
    /**@type {React.CSSProperties} */
    const style = {
        position: `relative`,
        ...fixedWidth(100, '%'),
        ...fixedHeight(40, 'px'),
        backgroundColor: `black`,
        display: `flex`,
        flexFlow: `row`,
        justifyContent: `center`,
        alignItems: `center`,
        color: `white`,
    };
    /**@type {React.CSSProperties} */
    const homeLinkStyle = {
        position: `absolute`,
        left: 0,
        // ...fixedWidth(40, 'px'),
        padding: `10px`,
        ...fixedHeight(100, '%'),
        backgroundColor: `green`,
        color: `white`,
        textDecoration: 'none',
        font: `helvetica`,
    };

    // effects
    useEffect(() => {
        console.log(ref1.current.getBoundingClientRect())
    }, [ref1])
    return (
        <div style={style} >
            <Link to={{pathname: "/"}} style={homeLinkStyle} ref={ref1} >Envest</Link>
            <ProfileLoginRegister />
        </div>
    )
};

// export
export default MainNavBar;
