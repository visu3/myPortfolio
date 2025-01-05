import ImageCarousel from './ImageCarousel'

interface SectionProps {
  id: string
  title: string
  children: React.ReactNode
  images?: string[]
}

const Section: React.FC<SectionProps> = ({ id, title, children, images }) => {
  return (
    <section id={id} className="mb-12">
      <h2 className="text-3xl font-bold mb-4">{title}</h2>
      <div className="bg-white shadow-md rounded-lg p-6">
        <div className="flex flex-col md:flex-row md:space-x-6">
          <div className="md:w-1/2 mb-6 md:mb-0">{children}</div>
          <div className="md:w-1/2">
            {images && images.length > 0 && <ImageCarousel images={images} />}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Section

