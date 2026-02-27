import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: `"Inter", "Poppins", sans-serif`,
  },
  palette: {
    primary: {
      main: "#6D4FC2",
      dark: "#593bab",
    },
    secondary: {
      main: "#573ba5",
    },
  },
});

export default theme;
