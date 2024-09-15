import { AppBar, Grid, Toolbar, Typography } from "@mui/material";
import { useState } from "react";
import { Device } from "./types/device";

export default function App() {
  const [devices, setDevices] = useState<Device[]>([]);

  window.electron.ipcRenderer.on("alpacamessage", (msg: Device) => {
    // set devices to be unique on serial number

    setDevices(
      [...devices, msg].filter(
        (device, index, self) =>
          index ===
          self.findIndex((t) => t.serialNumber === device.serialNumber)
      )
    );
  });

  return (
    <Grid item container xs={12}>
      <AppBar position="sticky" sx={{ paddingLeft: 0 }}>
        <Toolbar sx={{ paddingLeft: 0 }}>
          <Typography variant="h1">Dark Dragons Device Finder</Typography>
        </Toolbar>
      </AppBar>
      <Typography title="Devices" variant="h2">
        Devices
      </Typography>
      <Grid
        item
        container
        xs={12}
        rowSpacing={1}
        justifyContent="center"
        alignItems="left"
        sx={{ margin: "0.5em", border: "1px solid #f5f5f5", marginTop: 0 }}
      >
        <Grid
          item
          container
          xs={12}
          sx={{
            paddingY: "0.25em !important",
            backgroundColor: "#f5f5f5",
            fontWeight: "bold",
          }}
        >
          <Grid item xs={4} sx={{ padding: "0.25em" }}>
            Device Type
          </Grid>
          <Grid item xs={4} sx={{ padding: "0.25em" }}>
            Device Name
          </Grid>
          <Grid item xs={4} sx={{ padding: "0.25em" }}>
            Serial Number
          </Grid>
        </Grid>
        {devices.map((device, index) => (
          <Grid
            item
            container
            xs={12}
            sx={{
              paddingY: "0.25em !important",
              backgroundColor: index % 2 === 1 ? "#f5f5f5" : undefined,
            }}
          >
            <Grid item xs={4} sx={{ padding: "0.25em" }}>
              {device.deviceType}
            </Grid>
            <Grid item xs={4} sx={{ padding: "0.25em" }}>
              {device.deviceName}
            </Grid>
            <Grid item xs={4} sx={{ padding: "0.25em" }}>
              <a href={`http://${device.address}`} target="_blank">
                {device.serialNumber}
              </a>
            </Grid>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
}
