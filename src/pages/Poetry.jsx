import React, { useCallback } from 'react';
import axios from 'axios';
import style from './Poetry.module.scss';
import classNames from 'classnames';
import { Menu } from '../components'
import flavor1 from '../assets/flavor1.jpg';

//decorator
import { useSelector, useDispatch } from 'react-redux';

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function Poetry({loading, setLoading, appState, props}) {
  const [contentItem, setContentItem] = React.useState([]);
  const [whomeItem, setWhomeItem] = React.useState([]);
  const [whomeMenu, setWhomeMenu] = React.useState([]);

  React.useEffect(() => {
    let timerId=0;
    function fetchData() {

      try {
  setContentItem(appState.content)
  setWhomeItem(appState.whome)
  setWhomeMenu(appState.whomeMenu)
      } catch (e) {
         alert('Не удалось загрузить стихи')
      }
    }
      fetchData();
      return ()=>clearTimeout(timerId)
    },[]);
  const [activeId, setActiveId] = React.useState(0);
  const [poetryInput, setPoetryInput] = React.useState('')
  const store = useSelector(store => store);
  const dispatch = useDispatch();

  const onAddPoetry = useCallback((poetryTitle) => {
    dispatch({type: 'ADD__POETRY', payload: poetryTitle});
  }, []);

  function addPoetry(){
    console.log('addtrack', poetryInput.value)
    onAddPoetry(poetryInput.value)
    //очистить инпут
    poetryInput.value = '';
  }
  console.log(store)
  return (
    <section className={classNames(style.poetry, "poetry")}>
      <div className={style.meta}>
        <img className={style.img} src={flavor1} alt="bg" />
        <div className={classNames(style.headline, 'title')}>Поэзия</div>
      </div>
      <div className={style.topMenu}></div>
      <div className="container">
        <div className={style.wrapper}>

          <label htmlFor="findtext">
            <input id="findtext" className="findPoetry" type="text" placeholder="найти стих" />
            <button className="findBtn">найти</button>
          </label>

          <label htmlFor="addtext">
            <input ref={(input) => {setPoetryInput(input)}} id="addtext" type="text" placeholder="добавить стих" />
            <button onClick={addPoetry.bind(this)}>добавить</button>
          </label>

          <ul>
            {store.map((obj, index) =>
            <li key={index}>{obj}</li>
            )}
          </ul>
  
          <Menu items={whomeMenu} activeId={activeId} setActiveId={setActiveId}/>

          <div className={classNames(style.inner, "poetry__inner")}>
            {contentItem.map((item, index) => (
              <div className={classNames(style.item)} key={index}>
                <div className={style.contentBox}>
                  <div className={style.img}></div>

                  {whomeItem.map((user) =>
                    item.id_whom === user.id ? <div key={user.id} className={style.whom}>{user.value} </div> : '',
                  )}
                  <div className={style.title}>{item.title}</div>
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