import "./App.css";
import Grid from "@mui/material/Grid";

import ReminderList from "./Components/ReminderList";
import Reminder from "./Models/Reminders";

const reminders: Reminder[] = [{ id: 1, title: "Reminder 1" }];

function App() {
  return (
    <Grid>
      <ReminderList items={reminders} />
    </Grid>
  );
}

export default App;
