// lib/serial.ts
import { SerialPort, ReadlineParser } from 'serialport';

let latestData = '';

const port = new SerialPort({
  path: '/dev/ttyUSB0', // Change for your system (e.g., COM3 on Windows)
  baudRate: 9600,
});

const parser = port.pipe(new ReadlineParser({ delimiter: '\n' }));

parser.on('data', (data: string) => {
  console.log('Serial Data:', data);
  latestData = data.trim();
});

export const getLatestSerialData = () => latestData;
