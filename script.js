// const fcc = React.createElement('i', { key: 'c11'}, 'Italic React');
// const fc = React.createElement('span', { key: 'c1'}, [fcc]);
// const sc = React.createElement('b', { key: 'c2'}, 'Bold React');
// console.log(sc);
// const h2 = React.createElement('h2', { id:'firstElement' }, [sc, fc]);
// console.log(h2);
import React from "react";
import { createRoot } from "react-dom/client"

function Card(props){
    const { key, brand, image, title, price } = props;
    return (
        <div className="card" key = {key}>
          <img src={image} alt="iphone" width="100px" height="100px"/>
          <div className="card-content">
            <h3>{title}</h3>
            <p>{brand}</p>
            <p>
              <b>${price}</b>
            </p>
          </div>
        </div>
      )
}

const root = createRoot(document.querySelector("#root"));

fetch('https://dummyjson.com/products')
  .then((res) => res.json())
  .then((data) => {
    root.render((
        <div id="container" >
            {             
                data.products.map((value) => {
                    console.log(value);
                    return(<Card 
                        key = {value.id}
                        title = { value.title }
                        brand = { value.brand }
                        price = { value.price }
                        image = { value.images[0] }
                    />)
                })
            }
        </div>
    ))
  })
// const h2 = (<h2>React Element</h2>)
// console.log(h2);
// const root = ReactDOM.createRoot(document.querySelector('#root'));
// root.render(h2);