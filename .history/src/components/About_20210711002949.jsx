import React from 'react';
import style from './About.module.scss';

const About = () => {
  return (
    <section id="about" className={style.about}>
      <img className={style.imgBg} src="img/new.jpg" alt="bg" />
      <div className="container">
        <div className={style.inner}>
          <div className={style.innerText}>
            <div className="title">Автобиография</div>
            <div className={style.text}>
              Родилась 7 августа 1955 г. на Урале, в г. Верхотуре Свердловской области. Прожила там
              восемь лет, закончила два класса. После переехала с родителями в Казахстан г.
              Актюбинск пошла в третий класс. В 1972 году закончила школу в Актюбинске. После школы
              устроилась работать на метеорологическую станцию. Проходила стажировку, а после —
              работала техником-наблюдателем. В 1975 году приехала в Харьков погостить к знакомым.
              Город мне очень понравился: здания, парки, друзья предложили мне остаться работать и
              жить в Харькове, я согласилась. Устроилась работать на Турбинный завод им. Кирова
              учеником крановщика, а через полгода — крановщицей. Жила в общежитии, там
              познакомилась с будущим мужем, который тоже работал на Турбинном заводе,
              токарем-карусельщиком. 21 февраля 1976 года мы поженились. У нас родились дети: дочка
              Оксана и сын Игорь. Когда дети были маленькими, я устроилась работать в детский сад,
              вначале няней, а после закончив педучилище заочно, стала работать воспитателем. В этом
              саду я проработала 26 лет. Воспитывала и готовила детей к школе. Я очень любила свою
              профессию, благодаря моему труду наблюдала как из трехлетних детей формируются
              личности. Детки которых я воспитывала всегда мне помогали, и с ними мне было и трудно,
              и интересно. Даже сейчас спустя столько времени они меня помнят и я стараюсь
              поддерживать связь с моими воспитанниками Мои дети Игорь и Оксана выучились, получили
              высшее образование, обзавелись семьями. Сейчас у нас большая, дружная семья. У Игоря
              растет сын Вадим и дочка Елизавета. У Оксаны - дочка Элина. У нас с мужем есть дача,
              там мы проводим все свое свободное время. Я очень сильно устаю после работы на даче и
              когда я вижу плоды своего труда — радуюсь это чувство компенсирует усталось сполна от
              этого я получаю удовольствие, это дорогого стоит. Писать стихи я начала, когда училась
              в школе. Вначале я переписывала стихи Лермонтова, Пушкина, Есенина, Блока. Далее стала
              писать сама, но, к сожалению, тетрадь с стихами не сохранилась. После родственникам и
              друзьям стала писать поздравления в стихах. Сейчас я на пенсии, имею рабочий стаж 36
              лет и статус ветеран труда.
            </div>
          </div>
          <img className={style.img} src="img/about.jpg" alt="photo user" />
        </div>
      </div>
    </section>
  );
};

export default About;
