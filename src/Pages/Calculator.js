import {
  Button,
  FormControl,
  FormControlLabel,
  Input,
  InputAdornment,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  TextField,
} from "@mui/material";
import React from "react";
import { FormLabel } from "react-bootstrap";
import { useParams } from "react-router-dom";
import plans from "../data/plans";

export default function Calculator({ customType = "loan" }) {
  const { type = customType } = useParams();
  const [selectedPlan, setSelectedPlan] = React.useState(plans[type][0]);
  const terms = {
    fd: "fixed deposit",
    rd: "recurring deposit",
    sd: "saving deposit",
    mis: "monthly income scheme",
    daily: "Daily Deposit Scheme",
    loan: "Loan",
  };
  const currentPlanOptions = plans[type];
  return (
    <div className="flex flex-col items-center justify-center ">
      <>
        <div className="flex flex-col max-w-[800px] w-full gap-5 p-5 my-4 bg-white sm:border rounded">
          <h1 className="font-mono text-3xl">
            Calculator for {terms[type]?.toUpperCase()}
          </h1>
          <TextField
            variant="standard"
            disabled
            label={`Start Date of ${terms[type]?.toUpperCase()} `}
            defaultValue={new Date().toISOString().slice(0, 10) + " (today)"}
          />
          <FormControl>
            <InputLabel id="demo-simple-select-label" className="capitalize">
              Select {terms[type]} Plan
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={selectedPlan}
              label={`Select ${terms[type]} Plan`}
              onChange={(e) => setSelectedPlan(e.target.value)}
            >
              {currentPlanOptions.map((plan) => (
                <MenuItem key={plan.name} value={plan}>
                  {plan.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <TextField
            variant="standard"
            disabled
            label={`Rate Of Interest (%) `}
            value={selectedPlan?.interest}
          />

          {type === "loan" ? (
            <>
              <FormControl fullWidth sx={{ m: 1 }} variant="standard">
                <InputLabel htmlFor="standard-adornment-amount">
                  Loan Amount
                </InputLabel>
                <Input
                  id="standard-adornment-amount"
                  type="number"
                  startAdornment={
                    <InputAdornment position="start">₹</InputAdornment>
                  }
                />
              </FormControl>
              <TextField
                variant="standard"
                type="number"
                label={`Loan Tenure (in months))`}
                defaultValue={"24"}
              />
              <FormControl>
                <InputLabel id="emi-label" className="capitalize">
                  Select Frequency of EMI
                </InputLabel>
                <Select
                  labelId="emi-"
                  // value={age}
                  label={`Select Frequency of EMI`}
                  // onChange={handleChange}
                >
                  <MenuItem value={10}>Daily</MenuItem>
                  <MenuItem value={20}>Weekly</MenuItem>
                  <MenuItem value={30}>Monthly</MenuItem>
                </Select>
              </FormControl>
            </>
          ) : (
            <>
              <FormControl>
                <FormLabel id="demo-radio-buttons-group-label">
                  Type of Customer
                </FormLabel>
                <RadioGroup
                  row
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="normal"
                  name="radio-buttons-group"
                >
                  <FormControlLabel
                    value="normal"
                    control={<Radio />}
                    label="Normal"
                  />
                  <FormControlLabel
                    value="senior"
                    control={<Radio />}
                    label="Senior Citizen"
                  />
                </RadioGroup>
              </FormControl>
              <FormControl fullWidth sx={{ m: 1 }} variant="standard">
                <InputLabel htmlFor="standard-adornment-amount">
                  Amount of Deposit :
                </InputLabel>
                <Input
                  id="standard-adornment-amount"
                  startAdornment={
                    <InputAdornment position="start">₹</InputAdornment>
                  }
                />
              </FormControl>
            </>
          )}
          <Button variant="outlined">Calculate</Button>
        </div>
      </>
    </div>
  );
}
