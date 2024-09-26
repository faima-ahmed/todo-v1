/* eslint-disable react/jsx-no-undef */
import { FormGroup, Button, Box, TextField } from "@mui/material";
import { useState } from "react";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider/LocalizationProvider";

const StudentForm = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [roll, setRoll] = useState("");
  const [stclass, setStclass] = useState("");
  const [date, setDate] = useState();
  const [gender, setGender] = useState("male");

  function resetValues() {
    setName("");
    setPassword("");
    setRoll("");
    setStclass("");
    setDate();
    setGender("");
  }
  function handleSubmit(e) {
    e.preventDefault();
    //console.log(gender, name, password, roll, stclass, date);

    const student = {
      name: name,
      password: password,
      roll: roll,
      stclass: stclass,
      date: date,
      gender: gender,
    };

    // localStorage.setItem("student", JSON.stringify(student));
    let students = JSON.parse(localStorage.getItem("students") || []);
    students.push(student);
    localStorage.setItem("students", JSON.stringify(students));
    toast.success("Student info saved successfully!");

    resetValues();
  }
  return (
    <form onSubmit={handleSubmit}>
      <h1>Student info:</h1>
      <Box display="flex" flexDirection="column" sx={{ mt: 3 }}>
        <FormGroup gap={3} sx={{ width: "600px", mt: 0 }}>
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
            type="number"
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
            type="number"
            value={stclass}
            onChange={(e) => {
              setStclass(e.target.value);
            }}
            fullWidth
          />
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              sx={{ mt: 1 }}
              label="Exam Date"
              value={date}
              onChange={(newDate) => {
                setDate(newDate);
              }}
            />
          </LocalizationProvider>

          <FormControl
            label="Gender"
            sx={{ mt: 1 }}
            value={gender}
            onChange={(e) => {
              setGender(e.target.value);
            }}
          >
            <FormLabel id="demo-row-radio-buttons-group-label">
              Gender
            </FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
            >
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Female"
              />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
              <FormControlLabel
                value="other"
                control={<Radio />}
                label="Other"
              />
            </RadioGroup>
          </FormControl>
          <Button
            type="submit"
            sx={{ mt: 1 }}
            variant="contained"
            color="primary"
          >
            Submit
          </Button>
        </FormGroup>
      </Box>
    </form>
  );
};

export default StudentForm;
