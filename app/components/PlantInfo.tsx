interface PlantInfoProps {
    info: string
  }
  
  export default function PlantInfo({ info }: PlantInfoProps) {
    const lines = info.split('\n').filter(line => line.trim() !== '')
    const infoObject: { [key: string]: string } = {}
    let commonName = ''
    let scientificName = ''
    let description = ''
  
    lines.forEach(line => {
      const [key, value] = line.split(':')
      if (key && value) {
        const trimmedKey = key.trim()
        const trimmedValue = value.trim()
        if (trimmedKey === 'Common Name') commonName = trimmedValue
        else if (trimmedKey === 'Scientific Name') scientificName = trimmedValue
        else if (trimmedKey === 'Description') description = trimmedValue
        else infoObject[trimmedKey] = trimmedValue
      }
    })
  
    return (
      <div className="bg-white rounded-lg shadow-md p-6 max-w-2xl w-full">
        <h2 className="text-3xl font-bold mb-2 text-green-700">{commonName}</h2>
        <p className="text-xl italic mb-4 text-gray-600">{scientificName}</p>
        <p className="mb-6 text-gray-700">{description}</p>
        
        <h3 className="text-2xl font-semibold mb-4 text-green-600">Plant Details</h3>
        <table className="w-full border-collapse">
          <tbody>
            {Object.entries(infoObject).map(([key, value]) => (
              <tr key={key} className="border-b">
                <td className="py-2 pr-4 font-semibold text-green-800 w-1/3">{key}</td>
                <td className="py-2 pr-4 font-semibold text-green-600 w-1/3">{value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  }