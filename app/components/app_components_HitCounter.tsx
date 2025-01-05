'use client'

import { useState, useEffect } from 'react'

const HitCounter = () => {
  const [hitCount, setHitCount] = useState<number | null>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const updateHitCount = async () => {
      try {
        const response = await fetch('/api/hit-count')
        if (!response.ok) {
          const errorData = await response.json()
          throw new Error(errorData.error || 'Failed to fetch hit count')
        }
        const data = await response.json()
        setHitCount(data.hitCount)
      } catch (error) {
        console.error('Error fetching hit count:', error)
        setError(error.message)
      }
    }

    updateHitCount()
  }, [])

  if (error) {
    return <div className="text-sm text-red-600 mt-4">Error: {error}</div>
  }

  return (
    <div className="text-sm text-gray-600 mt-4">
      {hitCount !== null ? `This page has been viewed ${hitCount} times.` : 'Loading hit count...'}
    </div>
  )
}

export default HitCounter

