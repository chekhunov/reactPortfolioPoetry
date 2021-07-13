import React from 'react';
import style from './Best.module.scss';


const Best = (props) => {
  // console.log(props.date);
  return (
     <section className="best">
              <div className="container">
                <div className="best__inner">
                  <div className={style.item}>
                    <div className={style.img}></div>
                    <div className={style.whom}>{props.id_whom}</div>
                    <div className={style.title}>{props.title}</div>
                    <div className={style.text}>{props.text}</div>
                    <div className={style.date}>{props.date}</div>
                  </div>
                </div>
              </div>
            </section>
  );
};



export default Best;
