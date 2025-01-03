import { catalogIndexeById } from "../../utils/catalog";

function calculateTotalPrice(cartObject) {
  let price = 0;
  for (const cartItemId in cartObject) {
    price += catalogIndexeById[cartItemId].price * cartObject[cartItemId];

  }
  return price;
}


const TotalPriceCell = () => {
  return <section className="flex bg-slate-100 p-1 text-green-700 rounded-md justify-evenly ">
    <p>Total: </p>
    <p>{`$${0}`}</p>
  </section>

};

export default TotalPriceCell;