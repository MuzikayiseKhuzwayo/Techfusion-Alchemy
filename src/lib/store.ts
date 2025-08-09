import { create } from 'zustand';

export type FormData = {
  name: string;
  companyName: string;
  primaryGoal: string;
  biggestChallenge: string;
  contactEmail: string;
};

type FormState = {
  step: number;
  formData: FormData;
  setFormData: (data: Partial<FormData>) => void;
  nextStep: () => void;
  prevStep: () => void;
  goToStep: (step: number) => void;
  reset: () => void;
};

const initialState: { step: number; formData: FormData } = {
  step: 0,
  formData: {
    name: '',
    companyName: '',
    primaryGoal: '',
    biggestChallenge: '',
    contactEmail: '',
  },
};

export const useFormStore = create<FormState>((set) => ({
  ...initialState,
  setFormData: (data) => set((state) => ({ formData: { ...state.formData, ...data } })),
  nextStep: () => set((state) => ({ step: state.step + 1 })),
  prevStep: () => set((state) => ({ step: state.step - 1 })),
  goToStep: (step) => set({ step }),
  reset: () => set(initialState),
}));