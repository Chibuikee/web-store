function CheckOutTotaling({ cartData }) {
  const Subtotals = cartData.CartData.reduce(
    (a, c) => a + c.retailPrice * c.qty,
    0
  );
  const FlatRate = 15;
  const { destination } = cartData;
  const TOTALS = FlatRate + Subtotals;
  return (
    <div>
      <div>
        <h3 className="text-stone-500">Products</h3>
        <div className="h-[1px] w-full bg-stone-500 my-2"></div>
        {cartData?.CartData.map((item, key) => (
          <div
            key={key}
            className="flex justify-between w-full xxxs:max-w-[300px] m:w-full"
          >
            <h3>{item.name}</h3>
            <h3>{item.retailPrice}</h3>
          </div>
        ))}

        <div className="flex justify-between w-full xxxs:max-w-[300px] m:w-full mt-4">
          <h6 className="text-xs text-stone-500">Subtotals</h6>
          <h6>{Subtotals && Subtotals}</h6>
        </div>
      </div>
      <div>
        <div className="h-[1px] w-full bg-stone-500 my-2"></div>
        <h3>SHIPPING</h3>
        <div>
          <h6 className="text-stone-500 text-xs">
            Flat Rate<span>${FlatRate}</span>
          </h6>
          <h6>Whereto:{destination && destination}</h6>
        </div>
      </div>
      <div className="h-[1px] w-full bg-stone-500 my-2"></div>
      <div className="flex justify-between w-full xxxs:max-w-[300px] m:w-full">
        <h3> TOTALS</h3>
        {TOTALS}
      </div>
    </div>
  );
}

export default CheckOutTotaling;
