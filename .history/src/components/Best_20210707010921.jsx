import React from 'react';
import style from './Best.module.scss';
import axios            from "axios";

const Best = (props) => {

const [bestitem, setBestitem] = React.useState([]);

   React.useEffect(() => {
    
    axios.get('top.json')
             .then(res => {
                 setBestitem(res.data)
             })
    }, []);

  console.log(props);
  return (
     <section className={style.best}>
              <div className="container">
                <div className={style.inner}>
                  {props.map((item)=>
                  
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
