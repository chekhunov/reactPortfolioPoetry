import React from 'react';
import style from './Best.module.scss';
import axios from 'axios';
import classNames from 'classNames';

const Best = (props) => {
  const [bestitem, setBestitem] = React.useState([]);

  React.useEffect(() => {
    axios.get('top.json').then((res) => {
      setBestitem(res.data);
    });
  }, []);

  // console.log(props);
  return (
    <section
      className={style.best}
      //  style={{
      //         backgroundImage   : "url(/img/stock.jpg)",
      //         backgroundPosition: 'center',
      //         backgroundSize    : 'cover',
      //         backgroundRepeat  : 'no-repeat'
      // }}
    >
      {/* <div className="container"> */}
      <div className="title">Лучшие работы</div>
      <div className="subtitle">Вот некоторые из моих работ, которые для меня бесценны!</div>

      <div className={style.inner}>
        {bestitem.map((item, index) => (
          <div className={classNames(style.effect7, style.item)} key={index}>
            <img
              className={style.topDec}
              width="40"
              src="/img/icons/decortop-left.svg"
              alt="decor"
            />

            <div className={style.contentBox}>
              <div className={style.img}></div>
              <div className={style.title}>{item.title}</div>
              <div className={style.whom}>{item.id_whom}</div>
              <div className={style.text}>{item.text}</div>
              <div className={style.date}>{item.date}</div>
            </div>

            <img
              className={style.botDec}
              width="40"
              src="/img/icons/decortop-left.svg"
              alt="decor"
            />
          </div>
        ))}
        {/* </div> */}
      </div>
    </section>
  );
};

export default Best;
