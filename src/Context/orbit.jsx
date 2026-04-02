import { useEffect, useRef } from "react";

const outer = [
  'ReactVite-icon.svg', 'JAVA-icon.png', 'python-icon.webp',
  'JavaScript-icon.png', 'SpringBoot-icon.png', 'MySQL-icon.svg',
  'html-icon.png', 'css-icon.png', 'Eclipse-icon.png'
]
const inner = [
  'Photoshop-icon.png', 'Illustrator-icon.png',
  'VisualStudio-icon.png', 'Jupyter-icon.png', 'Pandas-icon.png',
  'Anaconda-icon.jpg'
]

export default function OrbitSkills() {
  const sceneRef = useRef(null)
  const frameRef = useRef(null)
  const tRef = useRef(0)

  useEffect(() => {
    const scene = sceneRef.current
    if (!scene) return

    const outerEls = scene.querySelectorAll('.sat-outer')
    const innerEls = scene.querySelectorAll('.sat-inner')
    const cx = 310, cy = 300
    const rOuter = 220, rInner = 140  // 148→228, 88→138

    const animate = () => {
      tRef.current += 0.004
      const t = tRef.current

      outerEls.forEach((el, i) => {
        const angle = t + (i / outer.length) * Math.PI * 2
        const x = cx + rOuter * Math.cos(angle) - 24
        const y = cy + rOuter * Math.sin(angle) - 24
        el.style.left = x + 'px'
        el.style.top = y + 'px'
        el.style.transform = ''
      })
      innerEls.forEach((el, i) => {
        const angle = -t * 1.5 + (i / inner.length) * Math.PI * 2
        const x = cx + rInner * Math.cos(angle) - 20
        const y = cy + rInner * Math.sin(angle) - 20
        el.style.left = x + 'px'
        el.style.top = y + 'px'
        el.style.transform = ''
      })

      frameRef.current = requestAnimationFrame(animate)
    }

    frameRef.current = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(frameRef.current)
  }, [])

  return (
    <div className="orbit-scene" ref={sceneRef}>
      <div className="orbit-ring ring-outer" />
      <div className="orbit-ring ring-inner" />
      <div className="orbit-center"><p>&lt; CH /&gt;</p></div>

      {outer.map((file, i) => (
        <div key={i} className="satellite sat-outer"
          data-name={file.replace(/-icon\.(png|svg|webp|jpg)/, '')}>
          <img src={`orbit/${file}`} alt={file} />
        </div>
      ))}
      {inner.map((file, i) => (
        <div key={i} className="satellite sat-inner"
          data-name={file.replace(/-icon\.(png|svg|webp|jpg)/, '')}>
          <img src={`orbit/${file}`} alt={file} />
        </div>
      ))}
    </div>
  )
}