import { Box, TextField, Stack, Button, Typography } from "@mui/material";
import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import "./TSignup.css";

const TSignup = () => {
 
  const [showerr, setShowerr] = useState(false);
  const navigate = useNavigate();
  const [loader, setLoader] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();

    if (e.target.username.value === "" || e.target.password.value === "") {
      toast.error("Please fill all fields", { position: "top-center" });
      setShowerr(true);
    } else {
      setLoader(true);

      const payload = {
        username: e.target.username.value,
        email: e.target.email.value,
        mobile: e.target.mobile.value,
        password: e.target.password.value,
        // role: e.target.role.value,
      };

      axios
        .post(
          "https://ecommerce-masai.herokuapp.com/signup"
          // "https://meesho-website-clone.herokuapp.com/register"
          , payload)
        .then((res) => {
          toast.success("Register SuccessFull", { position: "top-center" });
          setTimeout(() => {
            setShowerr(false);
            navigate("/Tlogin");
          }, 1000);
        })
        .catch((err) => {
          setShowerr(true);
          toast.error(err.response.data.errors[0]?.msg, { position: "top-center" });

          console.log(err.response.data.errors[0]?.msg);
        });
      setLoader(false);
    }
  };

  return (
    <>
   
      
          <Typography
            variant="h5"
            sx={{ marginTop: "100px", marginLeft: "40%" }}
          >
             <h2 className="heading">New Account</h2>
          </Typography>
          <Box className="box"
            sx={{ width: "400px", margin: "auto", marginTop: "30px" }}
            component="form"
            onSubmit={handleRegister}
          >
            <TextField
              sx={{ marginTop: "20px" }}
              variant="outlined"
              fullWidth
              id="username"
              InputLabelProps={showerr ? { style: { color: "red" } } : null}
              error={showerr}
              label={showerr ? "required" : "Username"}
              helperText={showerr ? "Enter valid username" : null}
              
            />

            <TextField
              sx={{ marginTop: "20px" }}
              variant="outlined"
              id="email"
              fullWidth
              InputLabelProps={showerr ? { style: { color: "red" } } : null}
              error={showerr}
              label={showerr ? "required" : "Email"}
              helperText={showerr ? "Enter valid email" : "# Email should be Unique. "}
            />
            <TextField
              sx={{ marginTop: "20px" }}
              variant="outlined"
              id="mobile"
              fullWidth
              error={showerr}
              label={showerr ? "required" : "Mobile"}
              helperText={
                showerr
                  ? "Enter valid Mobile"
                  : null
              }
            />

{/* //extra role// */}
            {/* <TextField
              sx={{ marginTop: "20px" }}
              variant="outlined"
              id="role"
              fullWidth
              error={showerr}
              label={showerr ? "required" : "Role"}
              helperText={
                showerr
                  ? "Enter Role"
                  : null
              }
            /> */}
{/* //rxtra role// */}

            <TextField
              sx={{ marginTop: "20px" }}
              type="password"
              variant="outlined"
              id="password"
              fullWidth
              error={showerr}
              label={showerr ? "required" : "Password"}
              helperText={
                showerr
                  ? "Enter valid  Password"
                  : "# Password with one Uppercase, Number, Alphabet, Specialchar.  "
              }
            />
            <Button
              sx={{  marginTop: "20px" ,marginLeft: "40%", height: "40px", bgcolor: "rgb(244,51,151)" , width: "20%" }}
              type="submit"
              variant="contained"
              fullWidth
            >
              Signup
            </Button>
            <div style={{ display: "flex" }}>
              <p>If you allready registered ?</p>
              <p
                style={{ color: "blue", cursor: "pointer" }}
                onClick={() => navigate("/tlogin")}
              >
                click here
              </p>
            </div>
            <ToastContainer />
          </Box>
       
     
      
    </>
  );
}

export default TSignup
