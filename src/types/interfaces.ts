export interface SleepData {
  date: string;
  hoursSlept: number;
  deepSleep: number;
  lightSleep: number;
  remSleep: number;
  quality: number;
}

export interface CaffeineData {
  date: string;
  coffee: number;
  energyDrink: number;
  tea: number;
  custom: number;
}

export interface HealthData {
  weight: string;
  bloodPressure: string;
  glucoseLevel: string;
  mood: string;
}

export interface SleepFormData {
  bedTime: Date | null;
  wakeTime: Date | null;
  quality: number;
  mood: string;
  notes: string;
}

export interface SleepGoals {
  targetBedtime: Date | null;
  targetWakeTime: Date | null;
  targetDuration: number;
  targetQuality: number;
}