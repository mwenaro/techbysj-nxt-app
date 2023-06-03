"use client";
import { ReactNode } from "react";
import { Button } from "../atoms";

interface CTAButtonProps {
  children?: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}

const CTAButton: React.FC<CTAButtonProps> = ({
  children,
  onClick,
  disabled,
  className,
}) => (
  <Button
    className={`bg-skin-accent     ${className}`}
    onClick={onClick}
    disabled={disabled}
  >
    {children}
  </Button>
);

export default CTAButton;
