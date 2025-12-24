"use client"

import Tilt from "react-parallax-tilt"
import { ReactNode } from "react"

export default function GlassTiltCard({ children }: { children: ReactNode }) {
  return (
    <Tilt
      tiltMaxAngleX={8}
      tiltMaxAngleY={8}
      scale={1.02}
      transitionSpeed={1200}
      glareEnable
      glareMaxOpacity={0.12}
      glareColor="white"
      glarePosition="all"
      className="glass"
    >
      <div className="p-8">{children}</div>
    </Tilt>
  )
}