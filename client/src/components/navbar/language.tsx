"use client";
import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import React, { useTransition } from "react";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { FormControl, MenuItem } from "@mui/material";
import TranslateIcon from "@mui/icons-material/Translate";

function Language() {
  const [_, startTransition] = useTransition();
  const router = useRouter();
  const locale = useLocale();

  const onSelectChange = (e: SelectChangeEvent) => {
    const nextLocale = e.target.value;
    router.replace(`/${nextLocale}`);
    startTransition(() => {});
  };

  return (
    <React.Fragment>
      <div className="relative">
        <TranslateIcon className="absolute mt-[14px]" />
      </div>
      <FormControl sx={{ m: 1, maxWidth: 70 }}>
        <Select
          variant="outlined"
          value={locale}
          onChange={onSelectChange}
          inputProps={{ "aria-label": "Language" }}
          MenuProps={{
            PaperProps: {
              style: {
                backgroundColor: "#2f2f2f",
                color: "white",
              },
            },
          }}
          sx={{
            "& .MuiInputBase-input": {
              color: "white",
            },
            "& .MuiSvgIcon-root": {
              color: "white",
            },
            "& .MuiOutlinedInput-notchedOutline": {
              border: "none !important",
            },
          }}
        >
          {["en", "es", "fr", "pt", "ru", "zh"].map((lang) => (
            <MenuItem
              key={lang}
              value={lang}
              sx={{
                "&.Mui-selected": {
                  backgroundColor: "#616161 !important",
                  outline: "none",
                },
                "&:hover": {
                  backgroundColor: "#424242",
                },
              }}
            >
              {lang.toUpperCase()}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </React.Fragment>
  );
}

export default Language;
