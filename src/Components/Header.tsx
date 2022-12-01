import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

type Props = {};

const Header = (props: Props) => {
  return (
    <Grid mb={4} p="20px" bgcolor="rgb(37,100,207)">
      <Typography color="white" variant="h6">
        {" "}
        To Do
      </Typography>
    </Grid>
  );
};

export default Header;
