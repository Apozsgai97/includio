import { AccessibilityData } from "./action";

export function calculateScore(accessibilityData: AccessibilityData) {
  let score = 0;
  if (accessibilityData.ramp === "yes") score += 20;
  if (accessibilityData.doors === "yes") score += 10;
  if (accessibilityData.parking === "yes") score += 10;
  if (accessibilityData.dimension === "yes") score += 6;
  if (accessibilityData.grabRails === "yes") score += 4;
  if (accessibilityData.emergencyButton === "yes") score += 4;
  if (accessibilityData.ceilingLift === "yes") score += 4;
  if (accessibilityData.showerBed === "yes") score += 2;
  if (accessibilityData.space === "yes") score += 10;
  if (accessibilityData.restroomAccess === "yes") score += 5;
  if (accessibilityData.insideStairs === "yes") score += 5;
  if (accessibilityData.tables === "yes") score += 10;
  if (accessibilityData.dog === "yes") score += 10;

  return score;
}
