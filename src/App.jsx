import { Box } from "@mui/material";
import Home from "./components/home";
import StudentForm from "./components/StudentForm";
import { ToastContainer } from "react-toastify";
import StudentTable from "./components/StudentTable";

export default function App() {
  return (
    <>
      <Home />

      <ToastContainer />
      <Box sx={{ width: "90%", margin: "0 auto" }}>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <StudentForm />
        </Box>
        <Box>
          <StudentTable />
        </Box>
      </Box>
    </>
  );
}
