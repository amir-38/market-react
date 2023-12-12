import React from "react";

import Components from "../components/components";
import Sort from "../components/sort";
import PizzaCard from "../components/pizzaBlock/pizzaCard";
import MyLoader from "../components/pizzaBlock/sceleton";

function Home() {
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    fetch("http://localhost:3000/items")
      .then((res) => res.json())
      .then((arr) => {
        setItems(arr);
        setIsLoading(false);
      });
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="content__top">
        <Components />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading
          ? [...new Array(6)].map((_, index) => <MyLoader key={index} />)
          : items.map((object) => <PizzaCard key={object.id} {...object} />)}
      </div>
    </>
  );
}
export default Home;
