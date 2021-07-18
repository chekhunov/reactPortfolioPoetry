import React from 'react';
import axios from 'axios';
import style from './Poetry.module.scss';
import classNames from 'classnames';
import {Menu} from '../components'

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function Poetry({loading, setLoading}) {
  const [contentItem, setContentItem] = React.useState([]);
  const [whomeItem, setWhomeItem] = React.useState([]);
  const [whomeMenu, setWhomeMenu] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  // const [isClickLogo, setIsClickLogo] = React.useState(false);//заглушка изза переиспользования меню
  // const[isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {

    // axios.get('content.json').then((res) => {
    //   // setIsLoading(true);
    //   setContentItem(res.data);
    //   // setIsLoading(false);
    // });
    // axios.get('whome.json').then((res) => {
    //   setWhomeItem(res.data);
    // });

    async function fetchData() {

      try {
        // setLoading(true);
// ;
        const whome = await axios.get('whome.json');
        const whoMenu = await axios.get('whomeMenu.json');
        const content = await axios.get('content.json');

        // delay(10000);
        // setLoading(false);

        setWhomeItem(whome.data);
        setWhomeMenu(whoMenu.data);
        setContentItem(content.data);
      } catch (e) {
        alert('Не удалось загрузить стихи')
      }
    }
    // setLoading(true);
    fetchData();


  }, []);

  return (
    <section className={classNames(style.poetry, "poetry")}>
      <div className={style.meta}>
        <img className={style.img} src="img/flavor1.jpg" alt="bg" />
        <div className={classNames(style.headline, 'title')}>Поэзия</div>
      </div>
      <div className={style.topMenu}></div>
      <div className="container">
        <div className={style.wrapper}>
          {/* <div className="subtitle"></div> */}


          <Menu items={whomeMenu}/>

          <div className={style.inner}>
            {contentItem.map((item, index) => (
              <div className={classNames(style.item)} key={index}>
                <div className={style.contentBox}>
                  <div className={style.img}></div>

                  {whomeItem.map((user) =>
                    item.id_whom === user.id ? <div className={style.whom}>{user.value} </div> : '',
                  )}
                  <div className={style.title}>{item.title}</div>
                  {/* <img className={style.icon} src="img/icons/rose-text.svg" alt="" /> */}
                  <div className={style.text}>{item.text}</div>
                  <div className={style.date}>{item.date}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Poetry;
