import Link from "next/link"
import type { ReactNode } from "react"

interface ButtonLinkProps {
  href: string
  children: ReactNode
  variant?: "primary" | "secondary"
  className?: string
}

export function ButtonLink({ href, children, variant = "primary", className = "" }: ButtonLinkProps) {
  const baseStyles = "inline-block rounded-full px-6 py-3 font-medium text-center transition-colors"
  const variantStyles =
    variant === "primary"
      ? !className ? "bg-blue-900 text-white hover:bg-blue-800" : "text-white"
      : "bg-white border border-gray-300 text-gray-800 hover:bg-gray-100"

  return (
    <Link href={href} className={`${baseStyles} ${variantStyles} ${className}`}>
      {children}
    </Link>
  )
}
