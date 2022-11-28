import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { Button } from "@mui/material";

function ReminderForm(): JSX.Element {
  return (
    <Container maxWidth="xl">
      <Grid padding="10px" width="100%">
        <TextField
          fullWidth
          id="filled-basic"
          label="Add a task"
          variant="filled"
        />
        <Grid
          display="flex"
          justifyContent="flex-end"
          mt="0.01px"
          height="40px"
          borderRadius="0 0 5px 5px "
          boxShadow=" rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;"
        >
          <Button
            sx={{
              alignSelf: "center",
              height: "70%",
              mr: "10px",
              fontSize: "15px",
            }}
            variant="text"
            href="#outlined-buttons"
          >
            Add
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}

export default ReminderForm;
