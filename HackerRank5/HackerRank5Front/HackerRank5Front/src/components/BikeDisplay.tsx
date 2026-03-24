import React, { useEffect } from 'react'
import type { Bike } from '../App'
import BikeItem from './BikeItem'

function BikeDisplay() {
    const [bikes, setBikes] = React.useState<Bike[]>([])
    const [critical, setCritical] = React.useState<boolean>(false)
    async function fetchBikes() {
        const params = new URLSearchParams();

        try {
            console.log('Fetching bikes with critical filter:', critical);
            if(!critical) {
            params.append('needsService', 'false');
            const response = await fetch(`http://localhost:8083/fleet?${params.toString()}`,{
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            const data = await response.json()
            setBikes(data)
        }
        else {
           params.append('needsService', 'true');
            const response = await fetch(`http://localhost:8083/fleet?${params.toString()}`,{
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            const data = await response.json()
            setBikes(data)
        }
    }
        catch (error) {
            console.error('Error fetching bikes:', error)
        }

    }
    useEffect(() => {
        fetchBikes()
    }, [])
  return (
    <section className="bike-display">
        <label className="critical-filter">
        Show only critical bikes: <input type="checkbox" checked={!critical} onChange={(e) => {setCritical(!e.target.checked); fetchBikes()}} />
        </label>
        <br></br>
        <div className="bike-list">
      {bikes.map((bike) => (
        <BikeItem key={bike.id} bike={bike} refresh={fetchBikes} />
      ))}
      </div>
    </section>
  )
}

export default BikeDisplay
