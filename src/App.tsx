import Grid from "@mui/material/Grid";
import ReminderList from "./Components/ReminderList";
import Reminder from "./Models/Reminders";
import { useState } from "react";
import ReminderService from "./Api/Data";
import { useEffect } from "react";

function App() {
  const [reminders, setReminders] = useState<Reminder[]>([]);
  useEffect(() => {
    loadReminders();
  }, []);

  const loadReminders = async () => {
    const reminders = await ReminderService.getReminders();
    setReminders(reminders);
  };
  return (
    <Grid>
      <ReminderList items={reminders} />
    </Grid>
  );
}

export default App;
