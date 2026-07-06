import { readFile } from 'node:fs/promises'
import { join } from 'node:path'
import { ImageResponse } from 'next/og'

export const alt = 'UVic Muslim Students’ Association — prayer, events, and community at the University of Victoria'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function OpenGraphImage() {
  const logo = await readFile(join(process.cwd(), 'public', 'uvic-msa-logo-mark.png'))
  const logoSrc = `data:image/png;base64,${logo.toString('base64')}`

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px 96px',
          backgroundImage: 'linear-gradient(160deg, #f8f5ef 0%, #eef3f8 55%, #f8f5ef 100%)',
          color: '#1F2B3D',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 32 }}>
          {/* eslint-disable-next-line @next/next/no-img-element -- ImageResponse requires a plain img */}
          <img alt="" height={148} src={logoSrc} style={{ borderRadius: 24 }} width={148} />
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ fontSize: 26, letterSpacing: 8, textTransform: 'uppercase', color: '#354256' }}>
              University of Victoria
            </div>
            <div style={{ marginTop: 16, fontSize: 68, fontWeight: 700, lineHeight: 1.05, maxWidth: 820 }}>
              Muslim Students’ Association
            </div>
          </div>
        </div>
        <div style={{ marginTop: 56, marginLeft: 180, display: 'flex', fontSize: 30, color: '#354256' }}>
          Prayer · Events · Community · Jummah Fridays 1:30 PM
        </div>
      </div>
    ),
    { ...size },
  )
}
