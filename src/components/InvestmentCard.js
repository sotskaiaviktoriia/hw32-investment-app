import { useSelector, useDispatch } from "react-redux";

import { deposit, withdraw, reset } from "../actions/investment";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const InvestmentCard = () => {
  const { amount, error } = useSelector((state) => state.investment);
  const dispatch = useDispatch();

  const handleDeposit = () => {
    dispatch(deposit(10));
  };

  const handleWithdraw = () => {
    dispatch(withdraw(10));
  };

  const handleReset = () => {
    dispatch(reset());
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Investment: {amount}$
        </Typography>

        {error && (
          <Typography gutterBottom component="div">
            {error}
          </Typography>
        )}
      </CardContent>

      <CardActions>
        <Button size="small" onClick={handleDeposit}>
          Deposit 10$
        </Button>

        <Button size="small" onClick={handleWithdraw}>
          Withdraw 10$
        </Button>

        <Button size="small" onClick={handleReset}>
          Reset
        </Button>
      </CardActions>
    </Card>
  );
};

export default InvestmentCard;
