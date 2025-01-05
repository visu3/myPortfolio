import Link from 'next/link'

const Header = () => {
  return (
    <header className="bg-gray-800 text-white">
      <nav className="container mx-auto px-4 py-4">
        <ul className="flex space-x-4">
          <li><Link href="/" className="hover:text-gray-300">Home</Link></li>
          <li><Link href="#sap-abap" className="hover:text-gray-300">SAP ABAP</Link></li>
          <li><Link href="#sap-fiori" className="hover:text-gray-300">SAP Fiori</Link></li>
          <li><Link href="#sap-hana" className="hover:text-gray-300">SAP HANA</Link></li>
          <li><Link href="#ai-ml" className="hover:text-gray-300">AI/ML</Link></li>
          <li><Link href="#frontend" className="hover:text-gray-300">Frontend</Link></li>
          <li><Link href="#lc-nc" className="hover:text-gray-300">LC/NC</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header

