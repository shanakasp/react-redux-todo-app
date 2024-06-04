import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo } from "../redux/features/todoReducer";
export default function BasicCard() {
  const todos = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };
  return (
    <Card sx={{ minWidth: 275, marginTop: "20px", backgroundColor: "#98C6F1" }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          To Do List
        </Typography>

        {todos.map((todo) => (
          <Box
            key={todo.id}
            sx={{ display: "flex", alignItems: "center", mb: 1.5 }}
          >
            <Typography
              sx={{ fontSize: 14, fontWeight: "bold", flexGrow: 1 }}
              color="text.secondary"
            >
              {todo.text}
            </Typography>
            <Box sx={{ display: "flex" }}>
              <Button variant="soft" onClick={() => handleDelete(todo.id)}>
                Delete
              </Button>
            </Box>{" "}
          </Box>
        ))}
      </CardContent>
    </Card>
  );
}
