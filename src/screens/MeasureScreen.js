import React from "react";
import { Border } from "../components/Border";
import {
  Box,
  Button,
  Grid,
  TextField,
  Autocomplete,
  MenuItem,
} from "@mui/material";
import { AiOutlineFileSearch } from "react-icons/ai";
import StickyHeadTable from "../components/Table";
import TimerTable from "../components/TimerTable";
import StopWatch from "../components/StopWatch";

const MeasureCT = () => {
  return (
    <>
      <Border>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              {/* <TextField label="Cutting Die" size="small" fullWidth /> */}
              <Autocomplete
                disablePortal
                options={["Keera", "Tulen", "Airi"]}
                sx={{ width: "100%" }}
                renderInput={(params) => (
                  <TextField {...params} label="Cutting Die" fullWidth />
                )}
              />
            </Grid>

            <Grid item xs={6}>
              {/* <TextField label="Model Name" size="small" fullWidth /> */}
              <Autocomplete
                disablePortal
                options={["Keera", "Tulen", "Airi"]}
                sx={{ width: "100%" }}
                renderInput={(params) => (
                  <TextField {...params} label="Model Name" fullWidth />
                )}
              />
            </Grid>

            <Grid item xs={6}>
              <TextField select label="Stage" fullWidth>
                {[
                  {
                    value: "Keera",
                    label: "Keera",
                  },
                  {
                    value: "Veres",
                    label: "Veres",
                  },
                  {
                    value: "Liliana",
                    label: "Liliana",
                  },
                  {
                    value: "Violet",
                    label: "Violet",
                  },
                ].map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>

            <Grid item xs={6}>
              <TextField select label="Section" fullWidth>
                {[
                  {
                    value: "Keera",
                    label: "Keera",
                  },
                  {
                    value: "Veres",
                    label: "Veres",
                  },
                  {
                    value: "Liliana",
                    label: "Liliana",
                  },
                  {
                    value: "Violet",
                    label: "Violet",
                  },
                ].map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>

            <Grid item xs={12} textAlign="center">
              <Button
                variant="contained"
                style={{ backgroundColor: "#4caf50" }}
                startIcon={<AiOutlineFileSearch />}
                size="large"
              >
                Search
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Border>
      <Border>
        <StickyHeadTable />
      </Border>
      <Border>
        <StopWatch />
      </Border>
    </>
  );
};

export default MeasureCT;
