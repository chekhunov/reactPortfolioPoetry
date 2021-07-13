import React from 'react';
import style from './Poetry.module.scss';

function Poetry() {
  const [contentItem, setContentItem] = React.useState([]);

  React.useEffect(() => {
    axios.get('content.json').then((res) => {
      setContentItem(res.data);
    });
  }, []);
  return (
    <section className={style.poetry}>
      <img className={style.img} src="img/bg6.jpg" alt="bg" />
      <div className="container">
        <div className={style.wrapper}>
          <h3>fgdghfdhdhgdfh</h3>
        </div>
      </div>
    </section>
  );
}

export default Poetry;
