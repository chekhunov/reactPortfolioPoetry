import React from 'react';
import axios from 'axios';
import style from './Poetry.module.scss';
import classNames from 'classnames';
import {Menu} from '../components'
import flavor1 from '../assets/flavor1.jpg';

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function Poetry({loading, setLoading, appState}) {
  const [contentItem, setContentItem] = React.useState(appState.content);
  const [whomeItem, setWhomeItem] = React.useState(appState.whome);
  const [whomeMenu, setWhomeMenu] = React.useState(appState.whomeMenu);
  const [activeId, setActiveId] = React.useState(0);
  // const [cartItems, setCartItems] = React.useState([]);
  // const [isClickLogo, setIsClickLogo] = React.useState(false);//заглушка изза переиспользования меню
  // const[isLoading, setIsLoading] = React.useState(false);

  // React.useEffect(() => {
  //
  //   async function fetchData() {
  //
  //     try {
  //       const whome = await axios.get('top.json');
  //       const whomemenu = await axios.get('top.json');
  //       const content = await axios.get('top.json');
  //
  //       // delay(10000);
  //       // setLoading(false);
  //
  //       setWhomeItem(whome.data.whome);
  //       setWhomeMenu(whomemenu.data.whomemenu);
  //       setContentItem(content.data.poetry);
  //     } catch (e) {
  //       alert('Не удалось загрузить стихи')
  //     }
  //   }
  //   fetchData();
  // },[]);
// console.log(contentItem)
  return (
    <section className={classNames(style.poetry, "poetry")}>
      <div className={style.meta}>
        <img className={style.img} src={flavor1} alt="bg" />
        <div className={classNames(style.headline, 'title')}>Поэзия</div>
      </div>
      <div className={style.topMenu}></div>
      <div className="container">
        <div className={style.wrapper}>
          {/* <div className="subtitle"></div> */}


          <Menu items={whomeMenu} activeId={activeId} setActiveId={setActiveId}/>

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
