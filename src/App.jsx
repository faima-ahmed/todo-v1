import { Box } from "@mui/material";
import Home from "./components/home";
import TodoForm from "./components/TodoForm";

export default function App() {
  return (
    <>
      <Home />
      <Box sx={{ width: "80%", display: "flex", justifyContent: "center" }}>
        <TodoForm />
      </Box>
    </>
  );
}
