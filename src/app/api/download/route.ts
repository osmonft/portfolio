import { NextRequest, NextResponse } from 'next/server'
import { projects } from '@/data/projects'
import path from 'path'
import fs from 'fs'

const CONTENT_TYPES: Record<string, string> = {
  '.pdf':  'application/pdf',
  '.docx': 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  '.doc':  'application/msword',
  '.txt':  'text/plain',
}

export async function GET(request: NextRequest) {
  const slug = request.nextUrl.searchParams.get('slug')

  if (!slug) {
    return new NextResponse('Missing slug parameter.', { status: 400 })
  }

  const project = projects.find((p) => p.id === slug)

  if (!project || !project.docFile) {
    return new NextResponse('Document not found.', { status: 404 })
  }

  const filePath = path.join(process.cwd(), 'private', 'docs', project.docFile)

  let fileBuffer: Buffer
  try {
    fileBuffer = fs.readFileSync(filePath)
  } catch {
    return new NextResponse('File not available.', { status: 404 })
  }

  const ext = path.extname(project.docFile).toLowerCase()
  const contentType = CONTENT_TYPES[ext] ?? 'application/octet-stream'

  // Safe download filename — no path exposure, owner-branded
  const safeTitle = project.title.replace(/[^a-zA-Z0-9\s-]/g, '').replace(/\s+/g, '-')
  const downloadName = `${safeTitle}-Osmon-Djumagulov${ext}`

  // Log download event (console visible in Vercel Functions logs)
  console.log(
    `[download] ${new Date().toISOString()} | slug=${slug} | file=${project.docFile} | ua=${request.headers.get('user-agent') ?? 'unknown'}`
  )

  return new NextResponse(new Uint8Array(fileBuffer), {
    status: 200,
    headers: {
      'Content-Type':        contentType,
      'Content-Disposition': `attachment; filename="${downloadName}"`,
      'X-Robots-Tag':        'noindex, nofollow',
      'X-Owner':             'Osmon Djumagulov',
      'Cache-Control':       'no-store, no-cache',
    },
  })
}
