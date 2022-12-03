import Grid from "@mui/material/Grid";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import Reminder from "../Models/Reminders";
import { Container } from "@mui/material";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";

interface ReminderListProps {
  items: Reminder[];
  onRemoveReminder: (id: number) => void;
  // onEditReminder: (title: string) => void;
}

const ReminderList = ({ items, onRemoveReminder }: ReminderListProps) => {
  return (
    <Container maxWidth="xl">
      {items.map((item) => (
        <Grid key={item.id}>
          <Grid
            sx={{
              display: "flex",
              justifyContent: "space-between",
              p: "10px",
              boxShadow: " rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;",
              borderRadius: "5px",
              minHeight: "52px",
              bgcolor: "white",
              color: "black",
              m: "10px",
            }}
          >
            <Grid sx={{ display: "flex", justifyContent: "center" }}>
              {item.title}
            </Grid>

            <Grid sx={{ display: "flex" }}>
              <ModeEditOutlineOutlinedIcon
                sx={{
                  width: "20px",
                  color: "rgb(37,100,207)",
                  cursor: "pointer",
                  mr: "10px",
                }}
              />
              <DeleteOutlinedIcon
                onClick={() => onRemoveReminder(item.id)}
                sx={{
                  width: "20px",
                  color: "rgb(37,100,207)",
                  cursor: "pointer",
                }}
              />
            </Grid>
          </Grid>
        </Grid>
      ))}
    </Container>
  );
};
export default ReminderList;
