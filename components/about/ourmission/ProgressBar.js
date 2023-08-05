import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import CircularProgress, {
  circularProgressClasses,
} from "@mui/material/CircularProgress";
import LinearProgress, { linearProgressClasses } from "@mui/material/LinearProgress";

const BorderLinearProgress = styled(LinearProgress)(({ theme,color }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === "light" ? color : "#6fb72f",
  },
}));


export default function CustomizedProgressBars() {
  return (
    <>
      <div className="progress_container">
        <Box sx={{ flexGrow: 1 }}>
          <h3>Graphics Design(95%)</h3>
          <BorderLinearProgress variant="determinate" value={95} color="secondary" />
        </Box>
        <Box sx={{ flexGrow: 1 }}>
          <h3> Html Css(92%)</h3>
          <BorderLinearProgress variant="determinate" value={92} color="success" />
        </Box>
        <Box sx={{ flexGrow: 1 }}>
          <h3>Wordpress(90%)</h3>
          <BorderLinearProgress variant="determinate" value={90} color="inherit" />
        </Box>
      </div>
    </>
  );
}
