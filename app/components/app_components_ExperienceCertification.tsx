import Image from 'next/image'

interface Item {
  title: string
  description: string
  image: string
}

interface ExperienceCertificationProps {
  experiences: Item[]
  certifications: Item[]
}

const ExperienceCertification: React.FC<ExperienceCertificationProps> = ({ experiences, certifications }) => {
  return (
    <section className="mb-12">
      <h2 className="text-3xl font-bold mb-6">Experience & Certifications</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-2xl font-semibold mb-4">Experience</h3>
          {experiences.map((exp, index) => (
            <div key={index} className="mb-4 flex items-start">
              <Image src={exp.image} alt={exp.title} width={64} height={64} className="mr-4" />
              <div>
                <h4 className="text-xl font-medium">{exp.title}</h4>
                <p className="text-gray-600">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div>
          <h3 className="text-2xl font-semibold mb-4">Certifications</h3>
          {certifications.map((cert, index) => (
            <div key={index} className="mb-4 flex items-start">
              <Image src={cert.image} alt={cert.title} width={64} height={64} className="mr-4" />
              <div>
                <h4 className="text-xl font-medium">{cert.title}</h4>
                <p className="text-gray-600">{cert.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ExperienceCertification

