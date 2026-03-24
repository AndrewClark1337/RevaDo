import React from 'react'
import type { Reading } from '../App';

function ReadingSearch({setReadings}: {setReadings: React.Dispatch<React.SetStateAction<Reading[]>>}) {
    const [sectorName, setSectorName] = React.useState('');
    const [status, setStatus] = React.useState('');
    async function searchReadings(){
        const params = new URLSearchParams();
        if(sectorName.trim() !== ''){
            params.append('sectorName', sectorName);
        }
        if(status.trim() !== ''){
            params.append('status', status);
        }
        const response = await fetch(`http://localhost:8083/meters?${params.toString()}`,{
            method: 'GET',
            headers: {'Content-Type': 'application/json'},
        });
        const data = await response.json();
        console.log(data);
        setReadings(data);
    }
  return (
    <nav>
      <label >Sector Name:
        <input type="text" value={sectorName} onChange={(e) => setSectorName(e.target.value)} />
      </label>
      <label >Status:
        <select  value={status} onChange={(e) => setStatus(e.target.value)} >
          <option value="">All</option>
          <option value="Active">Active</option>
          <option value="Maintenance">Maintenance</option>
        </select>
      </label>
      <button onClick={searchReadings}>Search</button>
    </nav>
  )
}

export default ReadingSearch
