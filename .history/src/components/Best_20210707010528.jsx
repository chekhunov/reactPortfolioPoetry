import React from 'react';
import style from './Best.module.scss';


const Best = (props) => {
  // console.log(props.date);
  return (
     <section className={style.best}>
              <div className="container">
                <div className={style.inner}>
                  {props.map((item, index)=>
                  key={index}
                  <div className={style.item}>
                    <div className={style.img}></div>
                    <div className={style.whom}>{item.id_whom}</div>
                    <div className={style.title}>{item.title}</div>
                    <div className={style.text}>{item.text}</div>
                    <div className={style.date}>{item.date}</div>
                  </div>
     )}
                </div>
              </div>
    </section>
  );
};



export default Best;
