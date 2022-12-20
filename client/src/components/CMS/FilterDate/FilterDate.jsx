import * as React from "react";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

export default function FilterDate(props) {
    const format = "DD/MM/YYYY";
    const formatMonth = "MM/YYYY";
    const formatYear = "YYYY";
    return (
        <LocalizationProvider
            dateAdapter={AdapterDayjs}
            className={props.className}
        >
            <DatePicker
                views={props.views}
                label={props.label}
                value={props.value}
                onChange={(newValue) =>
                    props.onChange &&
                    props.onChange({ name: props.name, value: newValue })
                }
                inputFormat={
                    props.views
                        ? props.views[props.views.length - 1]?.toUpperCase() ===
                          "YEAR"
                            ? formatYear
                            : props.views[
                                  props.views.length - 1
                              ]?.toUpperCase() === "MONTH"
                            ? formatMonth
                            : format
                        : format
                }
                renderInput={(params) => (
                    <TextField
                        {...params}
                        id={props.id}
                        className={props.className}
                        name={props.name}
                        sx={props.style}
                    />
                )}
                disabled={props.disabled}
            />
        </LocalizationProvider>
    );
}
