import Typography from "@mui/joy/Typography";
import SignUp from "../auth/sign-up";
import { Grid } from "@mui/joy";
import "./home.css";
const Home = () => {
  return (
    <Grid
      container
      justifyContent={"center"}
      alignItems={"center"}
      sx={{ height: "90vh", width: "90vw" }}
      spacing={2}
    >
      <Grid xs={6}>
        <div
          className="home-simple-about"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              color: "secondary.light",
              paddingBottom: "2em",
              paddingTop: "0.7em",
            }}
            level="h3"
          >
            TaskMaster
          </Typography>

          <Typography sx={{ textAlign: "center" }} level="h4">
            {" "}
            Organize your tasks effortlessly with drag-and-drop management,
            quick task creation, and project tracking
          </Typography>
        </div>
      </Grid>
      <Grid xs={6}>
        <div style={{ height: "60vh" }}>
          <SignUp />
        </div>
      </Grid>
    </Grid>
  );
};

export default Home;
