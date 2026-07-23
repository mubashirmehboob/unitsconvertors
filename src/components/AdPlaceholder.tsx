import React from "react";

interface AdPlaceholderProps {
  slotId?: string;
  className?: string;
}

export default function AdPlaceholder({ slotId = "default-slot", className = "" }: AdPlaceholderProps) {
  // Hidden by default. This will render when real advertisement scripts/codes are integrated.
  return null;
}
