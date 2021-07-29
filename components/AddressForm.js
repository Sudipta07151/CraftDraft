import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import AuthContext from "context/authContext";

export default function AddressForm() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [zip, setZip] = useState("");

  // useEffect(() => error && toast.error("BAD SIGNUP REQUEST"));

  const { user, SetUserShopDataFunction, addToCart } =
    React.useContext(AuthContext);

  const handleFname = (e) => {
    setFname(e.target.value);
  };
  const handleLname = (e) => {
    setLname(e.target.value);
  };
  const handlePhone = (e) => {
    setPhone(e.target.value);
  };

  const handleAddress = (e) => {
    setAddress(e.target.value);
  };

  const handleZip = (e) => {
    setZip(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const user_data = {
      FirstName: fname,
      LastName: lname,
      address: address,
      email: user.email,
      phone: phone,
      zipcode: zip,
      city: "KOLKATA",
      state: "WESTBENGAL",
      user: user,
      product: addToCart,
    };
    console.log(user_data);
    SetUserShopDataFunction(user_data);
    setFname("");
    setLname("");
    setPhone("");
    setAddress("");
    setPhone("");
    setZip("");
  };
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Shipping address
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="firstName"
              name="firstName"
              label="First name"
              fullWidth
              onChange={handleFname}
              value={fname}
              autoComplete="given-name"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="lastName"
              name="lastName"
              label="Last name"
              onChange={handleLname}
              value={lname}
              fullWidth
              autoComplete="family-name"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="address1"
              name="address1"
              label="Address line 1"
              onChange={handleAddress}
              value={address}
              fullWidth
              autoComplete="shipping address-line1"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="phone"
              name="phone"
              label="Phone"
              fullWidth
              onChange={handlePhone}
              value={phone}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="city"
              name="city"
              label="City"
              fullWidth
              defaultValue={"KOLKATA"}
              disabled={true}
              autoComplete="shipping address-level2"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="state"
              name="state"
              label="State/Province/Region"
              defaultValue={"WESTBENGAL"}
              disabled={true}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="zip"
              name="zip"
              label="Zip / Postal code"
              onChange={handleZip}
              value={zip}
              fullWidth
              autoComplete="shipping postal-code"
            />
          </Grid>
        </Grid>
        <Button
          type="submit"
          color="primary"
          variant="contained"
          endIcon={<ArrowRightIcon />}
          style={{ marginTop: "20px" }}
        >
          Submit Address
        </Button>
      </form>
    </React.Fragment>
  );
}
