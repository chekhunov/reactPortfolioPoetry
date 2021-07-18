import React from 'react';
import axios from 'axios';
import style from './Poetry.module.scss';
import classNames from 'classNames';

function Poetry() {
  const [contentItem, setContentItem] = React.useState([]);
  const [whomeItem, setWhomeItem] = React.useState([]);

  React.useEffect(() => {
    axios.get('content.json').then((res) => {
      setContentItem(res.data);
    });
    axios.get('content.json').then((res) => {
      setWhomeItem(res.data);
    });
  }, []);
  return (
    <section className={style.poetry}>
      <img className={style.img} src="img/bg6.jpg" alt="bg" />
      <div className={classNames(style.headline, 'title')}>Поэзия</div>
      <div className="container">
        <div className={style.wrapper}>
          {/* <div className="subtitle"></div> */}

          <div className={style.inner}>
            {contentItem.map((item, index) => (
              <div className={classNames(style.item)} key={index}>
                <div className={style.contentBox}>
                  <div className={style.img}></div>
                  <div className={style.title}>{item.title}</div>
                  <div className={style.whom}>{item.id_whom}</div>
                  {/* <img className={style.icon} src="img/icons/rose-text.svg" alt="" /> */}
                  <div className={style.text}>{item.text}</div>
                  <div className={style.date}>{item.date}</div>
                </div>

                {/* <img
              className={style.botDec}
              width="40"
              src="/img/icons/decortop-left.svg"
              alt="decor"
            /> */}
              </div>
            ))}
            {/* </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Poetry;
