import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import React, { useState } from "react";

interface NewReminderProps {
  onAddReminder: (title: string) => void;
}

function ReminderForm({ onAddReminder }: NewReminderProps): JSX.Element {
  const [title, setTitle] = useState("");

  const clearInput = () => {
    setTitle("");
  };

  const submitForm = (event: React.FormEvent) => {
    event.preventDefault();
    if (!title) return;
    onAddReminder(title);
    clearInput();
  };
  return (
    <Container maxWidth="xl">
      <Grid padding="10px" width="100%">
        <form>
          <TextField
            fullWidth
            id="filled-basic"
            label="Add a task"
            variant="filled"
            onChange={(event) => setTitle(event.target.value)}
          ></TextField>

          <Grid
            display="flex"
            justifyContent="flex-end"
            mt="0.01px"
            height="40px"
            borderRadius="0 0 5px 5px "
            boxShadow=" rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;"
          >
            {" "}
            <Button
              onClick={submitForm}
              sx={{
                alignSelf: "center",
                height: "70%",
                mr: "10px",
                fontSize: "15px",
              }}
              type="submit"
              variant="text"
              href="#outlined-buttons"
            >
              Add
            </Button>
          </Grid>
        </form>
      </Grid>
    </Container>
  );
}

export default ReminderForm;
