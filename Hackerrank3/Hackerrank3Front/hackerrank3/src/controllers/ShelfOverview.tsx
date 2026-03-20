import React, { useEffect } from 'react'
import type { Inventory } from '../App'
import InventoryCard from './InventoryCard'
import InventorySearch from './InventorySearch'

function ShelfOverview() {
    const [inv, setInv] = React.useState<Inventory[]>([])
    const [isMini, setIsMini] = React.useState<boolean>(true)
    async function fetchInventory() {
        try {
            const response = await fetch('http://localhost:8083/inventory',{
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            const data = await response.json()
            setInv(data)
        } catch (error) {
            console.error('Error fetching inventory:', error)
        }
    }
   function refresh()
   {
    fetchInventory()
    setIsMini(true)
   }
    useEffect(() => {
        fetchInventory()
        setIsMini(true)
    }, [])
  return (
    <div>
        {inv.length === 0 ? (
            <button onClick={refresh}>Load Inventory</button>
        ) : (
            <>
            <InventorySearch setIsMini={setIsMini} setInv={setInv} />
            <button onClick={refresh}>Refresh Inventory</button>
            <ul>
                <h2>Inventory Overview</h2>
                    {inv.map((item, index) => (
                        <li key={index}>
                            <InventoryCard  key={index} inventory={item} isMini={isMini} />
                        </li>
                    ))}
            </ul>
            </>
        )
            }
    </div>
  )
}

export default ShelfOverview
