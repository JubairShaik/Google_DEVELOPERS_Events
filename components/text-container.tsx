// components/TextContainer.tsx
import React from "react";

// Define color classes based on the variant
const colorVariants = {
  red: "bg-red-100 text-red-700 border-red-400",
  blue: "bg-blue-100 text-blue-700 border-blue-400",
  yellow: "bg-yellow-100 text-yellow-700 border-yellow-400",
  green: "bg-green-100 text-green-700 border-green-400",
};

interface TextContainerProps {
  title: string;
  children: React.ReactNode;
  variant: keyof typeof colorVariants;
}

const TextContainer: React.FC<TextContainerProps> = ({ title, children, variant }) => {
  const variantClasses = colorVariants[variant] || colorVariants.red;

  return (
    <div className={`p-6 rounded-lg shadow-md border w-5/6 md:w-full m-auto md:mt-8 ${variantClasses}`}>
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <p className="text-base leading-relaxed">{children}</p>
    </div>
  );
};

export default TextContainer;
