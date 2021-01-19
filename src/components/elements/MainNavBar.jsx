// react
import React, {useRef, useEffect} from 'react';
import {Link} from 'react-router-dom';
// components
import ProfileLoginRegister from './ProfileLoginRegister';
import InfoGroup from './InfoGroup';
// utils
import { fixedHeight } from '../utils/styleFxns';

// main
const MainNavBar = () => {
    // init hooks
    const ref1 = useRef(null);
    // style
    /**@type {React.CSSProperties} */
    const style = {
        ...fixedHeight(40, 'px'),
        backgroundColor: `black`,
        justifyContent: `space-between`,
        padding: `0 5px`,
        color: `white`,
    };
    /**@type {React.CSSProperties} */
    const homeLinkStyle = {
        ...fixedHeight(100, '%'),
        padding: `10px`,
        margin: `0 30px`,
        backgroundColor: `green`,
        color: `white`,
        font: `helvetica`,
        textDecoration: 'none',
    };

    // effects
    useEffect(() => {
        console.log(ref1.current.getBoundingClientRect())
    }, [ref1])
    return (
        <div style={style} className="w100 flexrow" >
            <Link to={{pathname: "/"}} style={homeLinkStyle} ref={ref1} className="ctnr" >Envest</Link>
            <InfoGroup />
            <ProfileLoginRegister />
        </div>
    )
};

// export
export default MainNavBar;
