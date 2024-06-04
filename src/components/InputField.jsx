import Button from "@mui/joy/Button";
import FormControl from "@mui/joy/FormControl";
import FormHelperText from "@mui/joy/FormHelperText";
import FormLabel from "@mui/joy/FormLabel";
import Input from "@mui/joy/Input";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/features/todoReducer.js";

export default function InputSubscription() {
  const [text, setText] = useState("");
  const [status, setStatus] = useState("initial");
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    setStatus("loading");
    try {
      // Replace timeout with real backend operation
      setTimeout(() => {
        setStatus("sent");
        dispatch(addTodo(text));
        setText("");
      }, 1500);
    } catch (error) {
      setStatus("failure");
    }
  };

  return (
    <form onSubmit={handleSubmit} id="demo">
      <FormControl>
        <FormLabel
          sx={(theme) => ({
            "--FormLabel-color": theme.vars.palette.primary.plainColor,
          })}
        >
          Enter To Do Things
        </FormLabel>
        <Input
          sx={{ "--Input-decoratorChildHeight": "45px" }}
          placeholder="Enter"
          required
          value={text}
          onChange={(event) => setText(event.target.value)}
          error={status === "failure"}
          endDecorator={
            <Button
              variant="solid"
              color="primary"
              loading={status === "loading"}
              type="submit"
              sx={{ borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }}
            >
              Add
            </Button>
          }
        />
        {status === "failure" && (
          <FormHelperText
            sx={(theme) => ({ color: theme.vars.palette.danger[400] })}
          >
            Oops! Something went wrong. Please try again later.
          </FormHelperText>
        )}

        {status === "sent" && (
          <FormHelperText
            sx={(theme) => ({ color: theme.vars.palette.primary[400] })}
          >
            Uploading...
          </FormHelperText>
        )}
      </FormControl>
    </form>
  );
}
