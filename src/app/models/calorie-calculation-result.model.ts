// src/app/models/calorie-calculation-result.model.ts
export interface CalorieCalculationResult {
  weight: number;
  duration: number;
  activity: string;
  activityMet: number;
  caloriesBurned: number;
}