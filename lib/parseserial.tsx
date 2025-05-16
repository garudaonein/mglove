// lib/parseSerial.ts

export function filterSerialLines(lines: string[]): {
  hrSpO2: string[];
  temperature: string[];
  ecg: number[];
  signal: string[];
} {
  const hrSpO2: string[] = [];
  const temperature: string[] = [];
  const ecg: number[] = [];
  const signal: string[] = [];

  for (const line of lines) {
    const trimmed = line.trim();

    if (/^HR=.*SPO2=.*$/.test(trimmed)) {
      hrSpO2.push(trimmed);
    } else if (/^temperatureC=.*temperatureF=.*$/.test(trimmed)) {
      temperature.push(trimmed);
    } else if (/^\d{3,4}$/.test(trimmed)) {
      ecg.push(parseInt(trimmed));
    } else if (
      trimmed.startsWith("Signal mode") ||
      trimmed.startsWith("From mySerial:") ||
      trimmed.startsWith("Signal Sent") ||
      trimmed.includes("Signal sequence")
    ) {
      signal.push(trimmed);
    }
  }

  return { hrSpO2, temperature, ecg, signal };
}
