import type { ReactNode } from "react"

interface ProcessStepProps {
  number: number
  title: string
  children: ReactNode
  bgColor?: string
}

export function ProcessStep({ number, title, bgColor = 'bg-blue-900', children }: ProcessStepProps) {
  return (
    <div className="flex gap-4 mb-8">
      <div className="flex-shrink-0">
        <div className={`w-8 h-8 rounded-full ${bgColor} text-white flex items-center justify-center font-bold`}>
          {number}
        </div>
      </div>
      <div>
        <h3 className="font-bold text-lg mb-2">{title}</h3>
        <div className="text-gray-700">{children}</div>
      </div>
    </div>
  )
}
