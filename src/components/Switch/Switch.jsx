import React      from 'react';
import style      from './Switch.module.scss';
import classNames from "classnames";

function Switch(props) {
    return (
        <div className={style.inner} >
            <h1 className={style.title} >Что ты хочешь увидеть?</h1 >
            <div className={classNames(style.switch, 'd-flex', 'justify-center')} >

                <span className={style.falseBlock} >False</span >

                <span className={style.trueBlock} >True</span >
            </div >
        </div >
    );
}

export default Switch;
