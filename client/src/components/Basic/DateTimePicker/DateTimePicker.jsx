import * as React from "react";
import dayjs from "dayjs";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";

export default function BasicDateTimePicker({
  label,
  value,
  onChange,
  disabled,
  name,
  className,
  style,
}) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateTimePicker
        renderInput={(props) => (
          <TextField
            {...props}
            margin="normal"
            name={name}
            className={className}
            style={style}
          />
        )}
        label={label}
        value={value ? value : null}
        onChange={(e) => onChange({ target: { name: name, value: new Date(e) } })}
        disabled={disabled}
        inputFormat={"DD/MM/YYYY HH:mm"}
      />
    </LocalizationProvider>
  );
}
