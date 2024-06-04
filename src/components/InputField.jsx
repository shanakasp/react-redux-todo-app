import Button from "@mui/joy/Button";
import FormControl from "@mui/joy/FormControl";
import FormHelperText from "@mui/joy/FormHelperText";
import FormLabel from "@mui/joy/FormLabel";
import Input from "@mui/joy/Input";
import * as React from "react";

export default function InputSubscription() {
  const [data, setData] = React.useState({
    test: "",
    status: "initial",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    setData((current) => ({ ...current, status: "loading" }));
    try {
      // Replace timeout with real backend operation
      setTimeout(() => {
        setData({ test: "", status: "sent" });
      }, 1500);
    } catch (error) {
      setData((current) => ({ ...current, status: "failure" }));
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
          value={data.test}
          onChange={(event) =>
            setData({ test: event.target.value, status: "initial" })
          }
          error={data.status === "failure"}
          endDecorator={
            <Button
              variant="solid"
              color="primary"
              loading={data.status === "loading"}
              type="submit"
              sx={{ borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }}
            >
              Add
            </Button>
          }
        />
        {data.status === "failure" && (
          <FormHelperText
            sx={(theme) => ({ color: theme.vars.palette.danger[400] })}
          >
            Oops! something went wrong, please try again later.
          </FormHelperText>
        )}

        {data.status === "sent" && (
          <FormHelperText
            sx={(theme) => ({ color: theme.vars.palette.primary[400] })}
          >
            Uploading
          </FormHelperText>
        )}
      </FormControl>
    </form>
  );
}
