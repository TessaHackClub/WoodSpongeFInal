// components/Stepper.tsx
import React from 'react';

interface Step {
  id: number;
  label: string;
}

interface StepperProps {
  steps: Step[];
  currentStep: number;
  onStepClick: (stepId: number) => void;
}

const Stepper: React.FC<StepperProps> = ({ steps, currentStep, onStepClick }) => {
  return (
    <div className="flex items-center justify-between">
      {steps.map((step) => (
        <div
          key={step.id}
          className={`flex items-center ${step.id === currentStep ? 'text-blue-600 font-semibold' : 'text-gray-500'
            } cursor-pointer`}
          onClick={() => onStepClick(step.id)}
        >
          <div
            className={`rounded-full h-8 w-8 flex items-center justify-center border-2 ${step.id === currentStep
              ? 'border-blue-600 bg-blue-100'
              : 'border-gray-400'
              }`}
          >
            {step.id < currentStep ? (
              <span className="text-blue-600">&#10003;</span>
            ) : (
              step.id
            )}
          </div>
          <span className="ml-2">{step.label}</span>
          {step.id !== steps.length && <div className="flex-1 border-b-2 border-gray-300 ml-2"></div>}
        </div>
      ))}
    </div>
  );
};

export default Stepper;