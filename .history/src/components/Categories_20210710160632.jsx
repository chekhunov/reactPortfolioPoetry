import React from 'react';

const Categories = React.memo(function Categories({ items, onClickItem }) {
  const [activeItem, setActiveItem] = React.useState(null);

  const onSelectItem = (index) => {
    setActiveItem(index);
    onClickItem(index);
  };

  console.log('rerender categories');

  return (
    <div className="categories">
      <ul>
        <li className={activeItem === null ? 'active' : ''} onClick={() => onSelectItem(null)}>
          Все
        </li>
        {items && //проверка на null
          items.map((value, index) => (
            <li
              className={activeItem === index ? 'active' : ''}
              onClick={() => onSelectItem(index)}
              key={`${value}_${index}`}>
              {value}
            </li>
          ))}
      </ul>
    </div>
  );
});

export default Categories;
