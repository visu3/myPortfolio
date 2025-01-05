import Image from 'next/image'
import Section from './components/Section'
import ExperienceCertification from './components/ExperienceCertification'
import Introduction from './components/Introduction'
import HitCounter from './components/HitCounter'

export default function Home() {
  const introContent = `
    Hello! I'm [Your Name], a passionate and experienced professional specializing in SAP technologies, 
    AI/ML, and frontend development. With a strong background in implementing and optimizing SAP solutions, 
    I bring a unique blend of technical expertise and business acumen to every project. My journey in the 
    world of technology has led me to explore cutting-edge areas like artificial intelligence and machine 
    learning, while also honing my skills in creating intuitive and responsive user interfaces. I'm 
    constantly seeking new challenges and opportunities to leverage technology in solving complex business 
    problems. Welcome to my portfolio, where you can explore my skills, experiences, and the innovative 
    projects I've worked on throughout my career.
  `

  const experiences = [
    {
      title: 'SAP Consultant',
      description: 'Worked on various SAP projects, implementing ABAP, Fiori, and HANA solutions.',
      image: '/placeholder.svg',
    },
    {
      title: 'Frontend Developer',
      description: 'Developed responsive web applications using React and Next.js.',
      image: '/placeholder.svg',
    },
  ]

  const certifications = [
    {
      title: 'SAP Certified Development Associate',
      description: 'ABAP with SAP NetWeaver 7.50',
      image: '/placeholder.svg',
    },
    {
      title: 'AWS Certified Solutions Architect',
      description: 'Associate Level',
      image: '/placeholder.svg',
    },
  ]

  return (
    <div className="space-y-12">
      <section className="text-center">
        <Image
          src="/placeholder.svg"
          alt="Your Name"
          width={200}
          height={200}
          className="rounded-full mx-auto mb-4"
        />
        <h1 className="text-4xl font-bold mb-2">Your Name</h1>
        <p className="text-xl text-gray-600">SAP Expert | AI/ML Enthusiast | Frontend Developer</p>
        <HitCounter />
      </section>

      <Introduction content={introContent} />

      <ExperienceCertification experiences={experiences} certifications={certifications} />

      <Section 
        id="sap-abap" 
        title="SAP ABAP"
        images={['/placeholder.svg', '/placeholder.svg', '/placeholder.svg']}
      >
        <div>
          <p className="mb-4">
            Extensive experience in developing and maintaining SAP ABAP applications. Proficient in Object-Oriented ABAP, ABAP Workbench, and SAP Fiori integration.
          </p>
          <ul className="list-disc list-inside">
            <li>Developed custom reports and interfaces using ABAP</li>
            <li>Implemented and optimized ABAP programs for improved performance</li>
            <li>Created and maintained ABAP Web Dynpro applications</li>
            <li>Integrated ABAP with external systems using RFC and web services</li>
            <li>Implemented BAPI and function modules for business processes</li>
          </ul>
        </div>
      </Section>

      <Section 
        id="sap-fiori" 
        title="SAP Fiori"
        images={['/placeholder.svg', '/placeholder.svg', '/placeholder.svg']}
      >
        <div>
          <p className="mb-4">
            Skilled in designing and developing SAP Fiori applications for enhanced user experience. Proficient in SAPUI5 and OData services.
          </p>
          <ul className="list-disc list-inside">
            <li>Developed responsive Fiori applications using SAPUI5</li>
            <li>Integrated Fiori apps with backend ABAP systems</li>
            <li>Customized and extended standard Fiori applications</li>
            <li>Implemented OData services for efficient data handling</li>
            <li>Utilized Fiori design principles for intuitive user interfaces</li>
          </ul>
        </div>
      </Section>

      <Section 
        id="sap-hana" 
        title="SAP HANA"
        images={['/placeholder.svg', '/placeholder.svg', '/placeholder.svg']}
      >
        <div>
          <p className="mb-4">
            Experience in leveraging SAP HANA for high-performance analytics and real-time data processing. Proficient in HANA modeling and optimization techniques.
          </p>
          <ul className="list-disc list-inside">
            <li>Designed and implemented HANA information models</li>
            <li>Optimized SQL scripts for HANA performance</li>
            <li>Developed HANA XS applications for real-time analytics</li>
            <li>Implemented HANA Live for operational reporting</li>
            <li>Utilized HANA Studio for database administration and monitoring</li>
          </ul>
        </div>
      </Section>

      <Section 
        id="ai-ml" 
        title="AI/ML"
        images={['/placeholder.svg', '/placeholder.svg', '/placeholder.svg']}
      >
        <div>
          <p className="mb-4">
            Passionate about applying AI and Machine Learning techniques to solve complex business problems. Experience in Python and popular ML libraries.
          </p>
          <ul className="list-disc list-inside">
            <li>Implemented predictive models using scikit-learn and TensorFlow</li>
            <li>Developed natural language processing solutions using NLTK and spaCy</li>
            <li>Applied deep learning techniques for image recognition tasks</li>
            <li>Created recommendation systems using collaborative filtering</li>
            <li>Implemented time series forecasting for business analytics</li>
          </ul>
        </div>
      </Section>

      <Section 
        id="frontend" 
        title="Frontend"
        images={['/placeholder.svg', '/placeholder.svg', '/placeholder.svg']}
      >
        <div>
          <p className="mb-4">
            Proficient in modern frontend technologies and frameworks. Experienced in building responsive and accessible web applications.
          </p>
          <ul className="list-disc list-inside">
            <li>Developed single-page applications using React and Next.js</li>
            <li>Implemented responsive designs using Tailwind CSS and Bootstrap</li>
            <li>Created interactive data visualizations using D3.js</li>
            <li>Built progressive web applications (PWAs) for offline capabilities</li>
            <li>Implemented state management using Redux and Context API</li>
          </ul>
        </div>
      </Section>

      <Section 
        id="lc-nc" 
        title="Low-Code/No-Code"
        images={['/placeholder.svg', '/placeholder.svg', '/placeholder.svg']}
      >
        <div>
          <p className="mb-4">
            Experienced in using low-code and no-code platforms to rapidly develop and deploy applications. Proficient in various LC/NC tools and methodologies.
          </p>
          <ul className="list-disc list-inside">
            <li>Built business applications using Microsoft Power Apps and Power Automate</li>
            <li>Developed automated workflows using Zapier and IFTTT</li>
            <li>Created interactive dashboards using Tableau and Power BI</li>
            <li>Implemented chatbots and virtual assistants using Dialogflow</li>
            <li>Developed mobile apps using OutSystems low-code platform</li>
          </ul>
        </div>
      </Section>
    </div>
  )
}

