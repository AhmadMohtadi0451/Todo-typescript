import axios from "axios";
import Reminder from "../Models/Reminders";

class ReminderService {
  http = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/",
  });

  async getReminders() {
    const response = await this.http.get<Reminder[]>("/todos");
    return response.data;
  }

  async addReminder(title: string) {
    const response = await this.http.post<Reminder>("/todos", { title });
  }
  async removerReminder(id: number) {
    const response = await this.http.delete("/todos" + id);
  }
}

export default new ReminderService();
