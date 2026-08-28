export type SeatingOption = "indoor" | "outdoor";

export const MAX_PARTY_SIZE = 8;

// 0 = Sunday, 1 = Monday, 2 = Tuesday ... 6 = Saturday
export const CLOSED_DAYS_OF_WEEK = [1, 2]; // Cafe is closed Mon & Tue

export const OPEN_HOUR = 9; // 9:00
export const CLOSE_HOUR = 16; // 16:00
export const LAST_SEATING_MINUTES_BEFORE_CLOSE = 30;

// Generates ["09:00", "09:30", ... "15:30"]
export function generateTimeSlots(): string[] {
  const slots: string[] = [];
  const lastSlotMinutes = CLOSE_HOUR * 60 - LAST_SEATING_MINUTES_BEFORE_CLOSE;

  for (let minutes = OPEN_HOUR * 60; minutes <= lastSlotMinutes; minutes += 30) {
    const hour = Math.floor(minutes / 60);
    const minute = minutes % 60;
    slots.push(`${hour.toString().padStart(2, "0")}:${minute.toString().padStart(2, "0")}`);
  }

  return slots;
}

export const partySizeOptions: number[] = Array.from(
  { length: MAX_PARTY_SIZE },
  (_, i) => i + 1
);