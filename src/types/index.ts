import type { ReactNode } from "react";

export interface TFeatures{
    id: number;
    icon: ReactNode;
    title: string;
    desc: string;
}

export interface TInput{
    label: string;
    name: string;
    id: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    required: boolean;
}

export interface ModalProps {
  title: string;
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}