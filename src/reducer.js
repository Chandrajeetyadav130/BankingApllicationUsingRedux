const bankingReducer = (state = 500, action) => {
  console.log("Action Received in Reducer ->", action);

  switch (action.type) {
    case "DEPOSIT":
      return state + action.payload.amount;

    case "WITHDRAW":
      return state - action.payload.amount;

    case "COLLECT_INTEREST":
      return state * 1.03; // increase the state (balance) by 3%

    case "DELETE_ACCOUNT":
      return 0;
    default:
      return state;
  }
};

export default bankingReducer;

/*
Deposit :

{
  type: "DEPOSIT",
  payload: {
    amount: 100
  }
}
_________________________

Withdraw :

{
  type: "WITHDRAW",
  payload: {
    amount: 50
  }
}

_________________________

Collect Interest
{
  type: "COLLECT_INTEREST"
}

_________________________

Delete Account
{
  type: "DELETE_ACCOUNT"
}

*/
