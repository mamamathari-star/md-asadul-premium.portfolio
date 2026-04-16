'use client'

import { useEffect, useRef } from 'react'

export default function GrainBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationId: number

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    const drawNoise = () => {
      const imageData = ctx.createImageData(canvas.width, canvas.height)
      const data = imageData.data

      for (let i = 0; i < data.length; i += 4) {
        const val = Math.floor(Math.random() * 30)
        data[i] = val
        data[i + 1] = val
        data[i + 2] = val
        data[i + 3] = 18
      }

      ctx.putImageData(imageData, 0, 0)
      animationId = requestAnimationFrame(drawNoise)
    }

    resize()
    drawNoise()

    window.addEventListener('resize', resize)
    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-10 opacity-40"
      aria-hidden="true"
    />
  )
}
