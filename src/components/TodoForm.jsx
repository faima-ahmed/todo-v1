import { TextField, Button, Box, Select, MenuItem } from "@mui/material";
import { useState } from "react";

function TodoForm() {
  const [title, setTitle] = useState();
  const [status, setStatus] = useState("Pending");

  function handleSubmit(e) {
    e.preventDefault();
    console.log(title, status);
  }
  return (
    <form onSubmit={handleSubmit}>
      <Box
        display="flex"
        flexDirection="column"
        gap={2}
        sx={{ width: "450px", mt: 5 }}
      >
        <TextField
          label="Title"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          fullWidth
        />
        <Select
          label="Status"
          value={status}
          onChange={(e) => {
            setStatus(e.target.value);
          }}
          fullWidth
        >
          <MenuItem name="pending" value="Pending">
            Pending
          </MenuItem>
          <MenuItem name="in-progress" value="In Progress">
            In Progress
          </MenuItem>
          <MenuItem name="completed" value="Completed">
            Completed
          </MenuItem>
        </Select>
        <Button type="submit" variant="contained" color="primary">
          Add
        </Button>
      </Box>
    </form>
  );
}

export default TodoForm;
