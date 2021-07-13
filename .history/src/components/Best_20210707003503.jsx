import React from 'react';
import style from './Best.module.scss';


const Best = (props) => {
  // console.log(props.date);
  return (
     <section className="best">
              <div className="container">
                <div className="best__inner">
                  <div className={style.item}>
<div className={style.title}>{props.}</div>
                  </div>
                </div>
              </div>
            </section>
  );
};



export default Best;
