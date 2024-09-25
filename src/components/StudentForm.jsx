import {
  FormGroup,
  Button,
  Box,
  TextField,
  
} from "@mui/material";
import { useState } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';


const StudentForm = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [roll, setRoll] = useState("");
  const [stclass, setStclass] = useState("");
  const [date, setDate] = useState();
  const [gender, setGender] = useState("male");

 
    var student={
      name:name,
      password:password,
      roll:roll,
      stclass:stclass,
      date:date,
      gender:gender
    }

    localStorage.setItem('students', JSON.stringify(student));
 

  function handleSubmit(e) {
    e.preventDefault();
    console.log(gender, name, password, roll, stclass, date);
  }
  return (
    <form onSubmit={handleSubmit}>
      <h1>Student info:</h1>
      <Box display="flex" flexDirection="column" sx={{ width: "450px", mt: 3 }}>
        <FormGroup gap={3} sx={{ width: "450px", mt: 0 }}>
          <TextField
            label="Username"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            fullWidth
          />

          <TextField
            sx={{ mt: 1 }}
            type="password"
            label="Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            fullWidth
          />

          <TextField
            sx={{ mt: 1 }}
            type='number'
            label="Roll number"
            value={roll}
            onChange={(e) => {
              setRoll(e.target.value);
            }}
            fullWidth
          />

          <TextField
            sx={{ mt: 1 }}
            label="Class"
            type='number'
            value={stclass}
            onChange={(e) => {
              setStclass(e.target.value);
            }}
            fullWidth
          />

          {/* <select>
            {setStclass.form({length:20}, (_, i) => i+1).map((stclass.value) =(
                <option value={stclass} key={stclass}>
                    {stclass}
                </option>
            ))}
          </select> */}

          {/* <TextField
            sx={{ mt: 1 }}
            label="Exam date"
            value={date}
            onChange={(e) => {
              setDate(e.target.value);
            }}
            fullWidth

          /> */}

          <LocalizationProvider
            dateAdapter={AdapterDayjs}
            value={date}
            fullWidth
          >
            <DatePicker
              sx={{ mt: 1 }}
              label="Exam Date"
              value={date}
              onChange={(newDate) => {
                setDate(newDate);
              }}
            />
          </LocalizationProvider>

          {/* <Select
            label="Gender"
            sx={{ mt: 1 }}
            value={gender}
            onChange={(e) => {
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
          </Select> */}
      <FormControl  label="Gender"
            sx={{ mt: 1 }}
            value={gender}
            onChange={(e) => {
              setGender(e.target.value);
            }}>
      <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
        <FormControlLabel value="other" control={<Radio />} label="Other" />
      </RadioGroup>
    </FormControl>
     <Button
            type="submit"
            sx={{ mt: 1 }}
            variant="contained"
            color="secondary"
          >
            Submit
          </Button>
        </FormGroup>
      </Box>
    </form>
  );
};

export default StudentForm;
