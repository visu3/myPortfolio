import React from 'react'

interface IntroductionProps {
  content: string
}

const Introduction: React.FC<IntroductionProps> = ({ content }) => {
  return (
    <section className="mb-12">
      <h2 className="text-3xl font-bold mb-4">Introduction</h2>
      <div className="bg-white shadow-md rounded-lg p-6">
        <p className="text-lg leading-relaxed">{content}</p>
      </div>
    </section>
  )
}

export default Introduction

