import React from "react";
import Header from "./components/Header";
// import Main from './Components/Main'
import Order from "./components/Order/Order";

const orders = [
  {
    id: "27cba69d-4c3d-4098-b42d-ac7fa62b7664",
    date: "August 12",
    total: "$35.06",
    items: [
      {
        image:
          "https://m.media-amazon.com/images/I/61+xXaCgA1L._AC_UY1000_.jpg",
        name: "Black and Gray Athletic Cotton Socks - 6 Pairs",
        deliveryDate: "August 15",
        quantity: 1,
      },
      {
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRMIJo221-NoW2QkI379_6GT2V6PbEFzNK_g&usqp=CAU",
        name: "Adults Plain Cotton T-Shirt - 2 Pack",
        deliveryDate: "August 19",
        quantity: 2,
      },
    ],
  },
  {
    id: "b6b6c212-d30e-4d4a-805d-90b52ce6b37d",
    date: "June 10",
    total: "$41.90",
    items: [
      {
        image:
          "https://m.media-amazon.com/images/I/81pkjvvZcjL._AC_UF894,1000_QL80_.jpg",
        name: "Intermediate Size Basketball",
        deliveryDate: "June 17",
        quantity: 2,
      },
    ],
  },
];

function App() {
  return (
    <>
      <Header />
      <div className="App">
        <Order title="Your Orders" orders={orders} />
      </div>
    </>
  );
}

export default App;
