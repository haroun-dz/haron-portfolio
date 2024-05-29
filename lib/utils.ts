import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

import ATTESTATIONaichouche1 from "@/public/attestations/ATTESTATION.-aichouche 1.png";
import ATTESTATIONaichouche2 from "@/public/attestations/ATTESTATION.-aichouche 2.png";
import ATTESTATIONaichouche3 from "@/public/attestations/ATTESTATION.-aichouche 3.png";
import ATTESTATIONaichouche4 from "@/public/attestations/ATTESTATION.-aichouche 4.png";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const validateString = (
  value: unknown,
  maxLength: number
): value is string => {
  if (!value || typeof value !== "string" || value.length > maxLength) {
    return false;
  }

  return true;
};

export const getErrorMessage = (error: unknown): string => {
  let message: string;

  if (error instanceof Error) {
    message = error.message;
  } else if (error && typeof error === "object" && "message" in error) {
    message = String(error.message);
  } else if (typeof error === "string") {
    message = error;
  } else {
    message = "Something went wrong";
  }

  return message;
};

export {
  ATTESTATIONaichouche1,
  ATTESTATIONaichouche2,
  ATTESTATIONaichouche3,
  ATTESTATIONaichouche4,
};
