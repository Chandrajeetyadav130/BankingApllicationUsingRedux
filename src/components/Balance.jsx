import { useSelector } from "react-redux";

/*
{
  claimsHistory: [],
  accounting: 500,
  policies: []
}
*/

const Balance = () => {
  // READING THE STATE!!
  // NOT WRITING!!
  const balance = useSelector((globalState) => globalState);
  return (
    <div>
      <h1>Balance : Rs. {balance}</h1>
    </div>
  );
};

export default Balance;
