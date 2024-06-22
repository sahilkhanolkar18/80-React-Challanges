import * as React from "react";
import PokeBall from "../assets/pokeball.png";
import GreatBall from "../assets/greatball.png";
import UltraBall from "../assets/ultraball.png";

const products = [
  { id: 1, name: "Poké Ball", price: 10, image: PokeBall },
  { id: 2, name: "Great Ball", price: 20, image: GreatBall },
  { id: 3, name: "Ultra Ball", price: 30, image: UltraBall },
];

const calculateTotal = (cart: any) => {
  //@ts-ignore

  return cart.reduce((total, product) => {
    return total + product.quantity * product.price;
  }, 0);
};
//@ts-ignore

const initialState = [];

//@ts-ignore
const reducer = (cart, action) => {
  if (action.type === "add") {
    const inCart = Boolean(cart.find((item: any) => item.id === action.id));

    if (!inCart) {
      const product = products.find((p) => p.id === action.id);
      return [...cart, { ...product, quantity: 1 }];
    }

    return cart.map((item: any) =>
      item.id === action.id ? { ...item, quantity: item.quantity + 1 } : item
    );
  } else if (action.type === "update") {
    if (action.adjustment === "increment") {
      return cart.map((item: any) =>
        item.id === action.id ? { ...item, quantity: item.quantity + 1 } : item
      );
    }

    const item = cart.find(({ id }: any) => action.id === id);

    if (item.quantity === 1) {
      return cart.filter((item: any) => item.id !== action.id);
    } else {
      return cart.map((item: any) =>
        item.id === action.id ? { ...item, quantity: item.quantity - 1 } : item
      );
    }
  } else {
    throw new Error("This action type isn't supported.");
  }
};

const ShoppingCart = () => {
  //@ts-ignore
  const [cart, dispatch] = React.useReducer(reducer, initialState);

  const handleAddToCart = (id: any) => dispatch({ type: "add", id });
  //@ts-ignore

  const handleUpdateQuantity = (id, adjustment) => {
    dispatch({
      type: "update",
      id,
      adjustment,
    });
  };

  return (
    <main className=" h-full px-12 py-16 ">
      <div className="flex items-center px-4">
        <h1 className="text-[white] text-[24px] font-semibold"> POKÉ MART</h1>
      </div>
      <section className="mt-2 mb-4 px-4">
        <div>
          <ul className="flex flex-col gap-4 w-[500px] ">
            {products.map((product) => (
              <li
                key={product.id}
                className="text-[white] text-md flex items-center justify-between"
              >
                <div className="flex justify-center items-center gap-2">
                  <img
                    src={product.image}
                    alt="pokeball"
                    className="h-[20px]"
                  />
                  {product.name} - ${product.price}
                </div>

                <button
                  className="bg-[#f3a007] hover:bg-[#f59f008a] text-[black] py-2 px-4 rounded-md text-sm"
                  onClick={() => handleAddToCart(product.id)}
                >
                  Add to cart
                </button>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <hr className="text-[white]" />
      <aside className="bg-[#8a515a] px-4 py-3 rounded-lg mt-2">
        <div>
          <h2 className="text-[white]  text-[22px] font-semibold my-2">
            Shopping Cart
          </h2>
          <ul className="flex flex-col gap-4 w-[500px]">
            {cart.map((item: any) => (
              <li
                key={item.id}
                className="text-[white] text-md flex items-center justify-between "
              >
                <div className="flex justify-center items-center gap-2">
                  <img src={item.image} alt="pokeball" className="h-[20px]" />
                  {item.name}
                </div>
                <div className="flex justify-center items-center gap-3 ">
                  <button
                    onClick={() => handleUpdateQuantity(item.id, "decrement")}
                    className="h-[20px] w-[20px] text-[black] bg-[#F7F9F2] flex justify-center items-center rounded-sm"
                  >
                    -
                  </button>
                  <span className="w-[15px] text-center"> {item.quantity}</span>
                  <button
                    onClick={() => handleUpdateQuantity(item.id, "increment")}
                    className="h-[20px] w-[20px] text-[black]  bg-[#F7F9F2] flex justify-center items-center rounded-sm"
                  >
                    +
                  </button>
                </div>
              </li>
            ))}
            {!cart.length && <li className="text-[white]">Cart is empty</li>}
          </ul>
        </div>
        <hr className="my-4 text-[white]" />

        <h3 className="text-[white] text-lg font-semibold mb-1">
          Total: ${calculateTotal(cart)}
        </h3>
      </aside>
    </main>
  );
};

const Challange34 = () => {
  return <ShoppingCart />;
};

export default Challange34;
