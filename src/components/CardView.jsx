import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import React from "react";
import { useSelector } from "react-redux";

export default function BasicCard() {
  const todos = useSelector((state) => state.todo);

  return (
    <Card sx={{ minWidth: 275, marginTop: "20px", backgroundColor: "#98C6F1" }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Word of the Day
        </Typography>

        {todos.map((todo) => (
          <Typography key={todo.id} sx={{ mb: 1.5 }} color="text.secondary">
            {todo.text}
          </Typography>
        ))}
      </CardContent>
    </Card>
  );
}
