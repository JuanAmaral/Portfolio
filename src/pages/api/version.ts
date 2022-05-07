import type { NextApiResponse } from 'next'
import { version } from '../../../package.json'

export default function getVersion(_req, res: NextApiResponse) {
  try {
    res.status(version ? 200 : 500).json({
      current_version: version,
      timestamp: new Date().toISOString(),
    })
  } catch (error) {
    res.status(500).json({
      error: error.message,
      type: error.name,
    })
  }
}
