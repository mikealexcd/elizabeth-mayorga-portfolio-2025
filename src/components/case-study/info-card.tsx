import Image, { ImageProps } from "next/image"
import type { ReactNode } from "react"

interface InfoSectionProps {
  title: string
  children: ReactNode
  className?: string
  bgColor?: string
  subtitle?: string
  media?: ImageProps
  id?: string
  transparentMedia?: boolean
}

export function InfoSection({ title, children, className = "", bgColor = "bg-gray-100", subtitle, media, id, transparentMedia = false }: InfoSectionProps) {
  return (
    <div className={`${bgColor} px-6 py-20 md:px-20`} id={id}>
      <div className={`max-w-7xl mx-auto ${className} flex flex-col md:flex-row gap-8 items-center`}>
        <div className={`${media ? 'md:w-2/3' : 'w-full'}`}>
          {subtitle && <p className="text-xs uppercase tracking-wider font-medium mb-1">{subtitle}</p>}
          <h3 className="font-bold text-3xl mb-4">{title}</h3>
          {children}
        </div>
        {media && (
          <div className="md:w-1/3">
            <Image
              src={media.src}
              alt={media.alt}
              className={`mx-auto h-auto rounded-lg ${!transparentMedia && 'shadow-lg'}`}
              width={media.width}
              height={media.height}
            />
          </div>
        )}
      </div>
    </div>
  )
}
