// Disable no-unused-vars, broken for spread args
/* eslint no-unused-vars: off */
import { contextBridge, ipcRenderer, IpcRendererEvent } from "electron";
import { Device } from "./types/device";

export type Channels = "alpacamessage";

const electronHandler = {
  ipcRenderer: {
    sendMessage(channel: Channels, device: Device) {
      ipcRenderer.send(channel, device);
    },
    on(channel: Channels, func: (device: Device) => void) {
      const subscription = (_event: IpcRendererEvent, device: Device) =>
        func(device);
      ipcRenderer.on(channel, subscription);

      return () => {
        ipcRenderer.removeListener(channel, subscription);
      };
    },
    once(channel: Channels, func: (device: Device) => void) {
      ipcRenderer.once(channel, (_event, device) => func(device));
    },
  },
};

contextBridge.exposeInMainWorld("electron", electronHandler);

export type ElectronHandler = typeof electronHandler;
