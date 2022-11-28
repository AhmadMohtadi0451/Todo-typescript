import Grid from "@mui/material/Grid";
import ReminderList from "./Components/ReminderList";
import Reminder from "./Models/Reminders";
import { useState } from "react";
import ReminderService from "./Api/Data";
import { useEffect } from "react";
import ReminderForm from "./Components/ReminderForm";

function App() {
  const [reminders, setReminders] = useState<Reminder[]>([]);
  useEffect(() => {
    loadReminders();
  }, []);

  const loadReminders = async () => {
    const reminders = await ReminderService.getReminders();
    setReminders(reminders);
  };
  const removeReminder = (id: number) => {
    setReminders(reminders.filter((reminder) => reminder.id !== id));
  };
  return (
    <Grid>
      <ReminderForm />
      <ReminderList onRemoveReminder={removeReminder} items={reminders} />
    </Grid>
  );
}

export default App;
