import React from 'react'
import type { Bike } from '../App'

function BikeItem({ bike, refresh }: { bike: Bike, refresh: () => void }) {
    const [status, setStatus] = React.useState(bike.status)
    const errRef = React.useRef<HTMLDialogElement>(null);
    const openModal = () => errRef.current?.showModal();
    const closeModal=()=> errRef.current?.close();

    function getStatusColor(): string {
        switch (status) {
            case 'AVAILABLE':
                return 'green';
            case 'RENTED':
                return 'blue';
            case 'MAINTENANCE':
                return 'orange';
            case 'OUT_OF_ORDER':
                return 'red';
            default:
                return 'gray';
        }
    }

    async function updateStatus() {
        const params = new URLSearchParams();
        params.append('status', status);
        try {
            const response = await fetch(`http://localhost:8083/fleet/${bike.id}/status?${params.toString()}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                
            });
            await refresh();
            
            if(response.status==403){
                openModal();
            }
        } catch (error) {
            console.error('Error updating bike status:', error);
        }
    }

    function range() : number {
        return (bike.batteryLevel *1.2)
    }
  return (
    <div className="bike-item" style={{borderColor:getStatusColor()}}>
      <h2>{bike.modelType}</h2>
      <label>Battery Level: <meter value={bike.batteryLevel} min={0} max={100} low={20} optimum={80} high={50} />
      </label>
      <p>Estimated Range: {range().toFixed(1)} km</p>
      <p>Status: {bike.status}</p>
      <p>Location: ({bike.latitude}, {bike.longitude})</p>
      <p>Last Service Date: {new Date(bike.lastServiceDate).toLocaleDateString()}</p>
      <select value={status} onChange={(e) => setStatus(e.target.value)}>
        <option value="AVAILABLE">Available</option>
        <option value="RENTED">Rented</option>
        <option value="MAINTENANCE">Maintenance</option>
        <option value="OUT_OF_ORDER">Out of Order</option>
      </select>
      <button onClick={updateStatus}>Update Status</button>
      <dialog ref={errRef}>
        <p>Operation Blocked: Bring bike to charging hub first.</p>
        <button onClick={closeModal}>Close</button>
      </dialog>
    </div>
  )
}

export default BikeItem
