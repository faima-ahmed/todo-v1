import {
  FormGroup,
  Button,
  Box,
  TextField,
  Select,
  MenuItem
} from "@mui/material";
import { useState } from "react";

const StudentForm = () => {
    const [name, setName]= useState("");
    const [password, setPassword]= useState();
    const [roll, setRoll]=useState();
    const[class, setClass]=useState("");
    const[date, setDate]=useState();
    const [gender, setGender] = useState("Male");


    function handleSubmit(e){
        e.preventDefault();
        console.log(gender);
    }
  return (
    <form onSubmit={handleSubmit}>
      <h1>Student info:</h1>
        <Box display="flex"
        flexDirection="column"
        gap={2}
        sx={{ width: "450px", mt: 5 }}>

      <FormGroup>
        <TextField label="Username" onChange={(e) => {
            setName(e.target.value);
          }}
          fullWidth/>

        <TextField type="password" label="Password"
        onChange={(e) => {
            setPassword(e.target.value);
          }}
          fullWidth/>

        <TextField label="Roll number"/>

        <TextField label="Class"/>

        <TextField label="Exam date"/>

        <Select label="Gender" 
        value={gender}
        onChange={(e)=>{
            setGender(e.target.value);
        }}
        fullWidth
        >
          <MenuItem type="radio" name="male" value="male">
            Male
          </MenuItem>
          <MenuItem type="radio" name="female" value="female">
            Female
          </MenuItem>
          <MenuItem type="radio" name="otherr" value="other">
            Other
          </MenuItem>
        </Select>

        <Button variant="contained" color="secondary">
          Submit
        </Button>
      </FormGroup>
        </Box>
    </form>
  );
};

export default StudentForm;
