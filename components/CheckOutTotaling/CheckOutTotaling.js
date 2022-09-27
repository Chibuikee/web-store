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
        <h3>Products</h3>
        {cartData?.CartData.map((item) => (
          <>
            <h3>{item.name}</h3>
            <h3>{item.retailPrice}</h3>
          </>
        ))}

        <div>
          <h6>Subtotals</h6>
          <h6>{Subtotals && Subtotals}</h6>
        </div>
      </div>
      <div>
        <h3>SHIPPING</h3>
        <div>
          <h6>
            Flat Rate<span>${FlatRate}</span>
          </h6>
          <h6>Whereto:{destination && destination}</h6>
        </div>
      </div>
      <div>
        <h3> TOTALS</h3>
        {TOTALS}
      </div>
    </div>
  );
}

export default CheckOutTotaling;
