import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatPrice(price: number): string {
  const lakhs = price / 100000;
  
  if (lakhs >= 100) {
    const crores = lakhs / 100;
    return `₹${crores.toFixed(2)} Crore${crores > 1 ? 's' : ''}`;
  }
  
  return `₹${lakhs.toFixed(1)} Lakhs`;
}
