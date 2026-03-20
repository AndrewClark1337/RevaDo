import React from 'react'
import type { Inventory } from '../App'

function InventoryCard({inventory, isMini}: {inventory: Inventory, isMini?: boolean}) {
    const stockPercentage = (inventory.stockLevel / inventory.capacity) * 100
    const [minimized, setMinimized] = React.useState(isMini)
    function checkStock(){
        if (stockPercentage < 20) {
            return "low-stock-theme";
        }
        else if (stockPercentage ==100) {
            return "full-stock-theme";
        }
        else {
            return "normal-stock-theme";
        }
    }
    function minimize()
    {
        setMinimized(!minimized)
    }
    if (!minimized) {
        return (
            <div className={`inv-item ${checkStock()}`}>
                <h2>{inventory.productName}</h2>
                <p>{inventory.category}</p>
                <p>Shelf Location: {inventory.shelfLocation}</p>
            
                <p>Capacity: {stockPercentage.toFixed(2)}%</p>
                <p>Last Updated: {new Date(Number(inventory.lastUpdated)).toLocaleString()}</p>
                <button onClick={minimize}>Minimize</button>
            </div>
        )
    }
    else {
        return(
            <div className={`inv-item ${checkStock()}`}>
                <h2>{inventory.productName}</h2>
                <p>Capacity: {stockPercentage.toFixed(2)}%</p>
                <button onClick={minimize}>Details</button>
            </div>
        )
    }
}

export default InventoryCard
  