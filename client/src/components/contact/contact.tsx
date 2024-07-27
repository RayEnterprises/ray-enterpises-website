"use client";
import React from "react";
import FormControl from "@mui/material/FormControl";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import TextareaAutosize from "@mui/material/TextareaAutosize";

function Contact() {
  const [isFocused, setIsFocused] = React.useState(false);

  return (
    <div className="flex justify-center items-center xs:ml-4 xs:mr-4">
      <Grid container spacing={2} style={{ maxWidth: "600px" }}>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <TextareaAutosize
              aria-label="minimum height"
              minRows={1}
              placeholder="Nombre"
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              style={{
                resize: "none",
                border: "1px solid",
                borderRadius: "4px",
                padding: "8px",
                width: "100%",
                borderColor: isFocused ? "black" : "#ccc",
              }}
            />
          </FormControl>
        </Grid>

        <Grid item xs={12}>
          <FormControl fullWidth>
            <TextareaAutosize
              aria-label="minimum height"
              minRows={1}
              placeholder="Email"
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              style={{
                resize: "none",
                border: "1px solid",
                borderRadius: "4px",
                padding: "8px",
                width: "100%",
                borderColor: isFocused ? "black" : "#ccc",
              }}
            />
          </FormControl>
        </Grid>

        <Grid item xs={12}>
          <FormControl fullWidth>
            <TextareaAutosize
              aria-label="minimum height"
              minRows={8}
              placeholder="Mensaje"
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              style={{
                resize: "none",
                border: "1px solid",
                borderRadius: "4px",
                padding: "8px",
                width: "100%",
                borderColor: isFocused ? "black" : "#ccc",
              }}
            />
          </FormControl>
        </Grid>

        <Grid item xs={12} style={{ textAlign: "center" }}>
          <Button variant="contained" color="primary" className="w-[200px]">
            Enviar
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}

export default Contact;
