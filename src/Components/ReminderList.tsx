import React from "react";
import Reminder from "../Models/Reminders";

interface ReminderListProps {
  items: Reminder[];
}

const ReminderList = ({ items }: ReminderListProps) => {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>{item.title}</li>
      ))}
    </ul>
  );
};
export default ReminderList;