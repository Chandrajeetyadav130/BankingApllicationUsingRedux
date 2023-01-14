import { Input, Button } from "@mantine/core";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { SimpleGrid } from '@mantine/core';
const deposit = (amount) => {
  return {
    type: "DEPOSIT",
    payload: {
      amount,
    },
  };
};

// deposit(100)

/*
{
  type: "DEPOSIT",
  payload: {
    amount: 100
  }
}
*/

const withdraw = (amount) => {
  return {
    type: "WITHDRAW",
    payload: {
      amount,
    },
  };
};

const collectInterest = () => {
  return {
    type: "COLLECT_INTEREST",
  };
};

const deleteAccount = () => {
  return {
    type: "DELETE_ACCOUNT",
  };
};

// collectInterest()

// withdraw(200)

// const [state, dispatch] = useReducer(reducer, initState); FROM USEREDUCER

// store.dispatch(); FROM REDUX
// const dispatch = useDispatch(); FROM REACT-REDUX

const Banking = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  const handleDeposit = () => {
    dispatch(deposit(Number(value)));
    setValue("");
  };

  const handleWithdraw = () => {
    dispatch(withdraw(Number(value)));
    setValue("");
  };

  const handleCollectInterest = () => {
    dispatch(collectInterest());
    setValue("");
  };

  const handleDeleteAccount = () => {
    dispatch(deleteAccount());
    setValue("");
  };

  return (
    <div>
      <div>
        <Input
          value={value}
          onChange={(event) => setValue(event.target.value)}
          style={{ width: "50%", marginBottom: "10px" }}
          type="text"
        />
      </div>
      <SimpleGrid
      cols={4}
      spacing="lg"
      breakpoints={[
        { maxWidth: 980, cols: 3, spacing: 'md' },
        { maxWidth: 755, cols: 2, spacing: 'sm' },
        { maxWidth: 600, cols: 1, spacing: 'sm' },
      ]}
    >
      <div><Button onClick={handleDeposit} style={{ marginRight: "10px" }}>
        Deposit
      </Button>
      </div>
      <div>  <Button onClick={handleWithdraw} style={{ marginRight: "10px" }}>
        Withdraw
      </Button></div>
      <div> <Button onClick={handleCollectInterest} style={{ marginRight: "10px" }}>
        Collect Interest
      </Button></div>
      <div> 
      <Button onClick={handleDeleteAccount}>Delete Account</Button>

      </div>
    </SimpleGrid>
      
    
     
    </div>
  );
};

export default Banking;
