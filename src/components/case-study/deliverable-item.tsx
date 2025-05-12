interface DeliverableItemProps {
  text: string
}

export function DeliverableItem({ text }: DeliverableItemProps) {
  return (
    <li className="flex items-start mb-2">
      <span className="text-black mr-2">•</span>
      {text}
    </li>
  )
}
