import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export const EMAIL = 'jaypeedala31@gmail.com'
export const PHONE = '+65 8894 3684'
export const LOCATION = 'Singapore'
export const GITHUB = 'https://github.com/captainjaypee01'
export const LINKEDIN = 'https://www.linkedin.com/in/jbdala/'