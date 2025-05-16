// lib/mockSerial.ts
import { filterSerialLines } from "./parseserial";

const sampleSerial = `
Send:
'1' = HR + SpO2
'2' = Temperature
'3' = ECG
'4' = Signal trigger
'0' = Stop
Place finger on sensor...
HR=-999 ValidHR=0 SPO2=-999 ValidSPO2=0
Invalid input. Use 0, 1, 2, 3, or 4.
HR=-999 ValidHR=0 SPO2=-999 ValidSPO2=0
HR=-999 ValidHR=0 SPO2=-999 ValidSPO2=0
HR=-999 ValidHR=0 SPO2=-999 ValidSPO2=0
HR=-999 ValidHR=0 SPO2=-999 ValidSPO2=0
Stopped. Awaiting new input.
Invalid input. Use 0, 1, 2, 3, or 4.
Temperature mode started.
temperatureC=33.9375 temperatureF=92.7500
Invalid input. Use 0, 1, 2, 3, or 4.
temperatureC=33.9375 temperatureF=92.7500
temperatureC=33.7500 temperatureF=92.8625
temperatureC=33.8125 temperatureF=92.7500
temperatureC=33.6250 temperatureF=92.6375
temperatureC=33.8125 temperatureF=92.7500
Stopped. Awaiting new input.
Invalid input. Use 0, 1, 2, 3, or 4.
ECG mode started.
511
Invalid input. Use 0, 1, 2, 3, or 4.
512
512
525
520
520
500
700
480
510
505
495
515
512
512
525
520
520
500
720
480
510
505
495
515
512
512
525
520
520
500
680
480
510
505
495
515
512
512
525
520
520
500
700
480
510
505
495
515
512
512
525
520
520
500
710
480
510
505
495
515
Stopped. Awaiting new input.
Invalid input. Use 0, 1, 2, 3, or 4.
Signal mode activated.
Signal Sent
Waiting for 'off' or 'error' from SoftwareSerial...
From mySerial: start
From mySerial: reading
From mySerial: error
Signal sequence complete.
Stopped. Awaiting new input.
Invalid input. Use 0, 1, 2, 3, or 4.
`;

export function getMockFilteredData() {
  const lines = sampleSerial.trim().split("\n");
  return filterSerialLines(lines);
}
