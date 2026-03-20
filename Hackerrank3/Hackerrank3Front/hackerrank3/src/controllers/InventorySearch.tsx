import React, { useEffect } from 'react'
import type { Inventory } from '../App';

function InventorySearch({setInv, setIsMini}: {setInv: React.Dispatch<React.SetStateAction<Inventory[]>>, setIsMini: React.Dispatch<React.SetStateAction<boolean>>}) {
    const [categories, setCategories] = React.useState<string[]>([])
    const [cat, setCat] = React.useState<string>("")
    const [view, setView] = React.useState<number>(1)
    const [name, setName] = React.useState<string>("")
    async function getCategories()
    {
        try{
            const response = await fetch('http://localhost:8083/category',{
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const data = await response.json();
            console.log(data);
            setCategories(data);
        } catch (error) {
            console.error('Error fetching categories:', error);
        }
    }
    async function catSearch(category: string)
    {
        var params = new URLSearchParams();
        params.append('category', category);
        try{
            const response = await fetch(`http://localhost:8083/inventory?${params}`,{
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const data:Inventory[] = await response.json();
            console.log(data);
            setInv(data);
            setIsMini(true);

        } catch (error) {
            console.error('Error fetching inventory by category:', error);
        }
    }
    async function nameSearch(name: string)
    {
        var params = new URLSearchParams();
        params.append('name', name);
        try{
            const response = await fetch(`http://localhost:8083/inventory?${params}`,{
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const data:Inventory[] = await response.json();
            console.log(data);
            setInv(data);
            setIsMini(false);
        } catch (error) {
            console.error('Error fetching inventory by name:', error);
        }
    }
    useEffect(() => {
        getCategories();
    }, [])
    if (view==1) {
    return (
        <div>
            <h2>Search Inventory by Category</h2>
            <form onSubmit={(e) => {
                e.preventDefault();
                catSearch(cat);
            }}>
            <select value={cat} onChange={(e) => setCat(e.target.value)}>
                <option value="">Select a category</option>
                {categories.map((category, index) => (
                    <option key={index} value={category}>{category}</option>
                ))}
            </select>
            <button type="submit">Search</button>
            </form>
            <button onClick={() => setView(2)}>Search by Product Name</button>
        </div>
    )
    }
    else if (view==2) {
        return (
            <div>
                <h2>Search Inventory by Product Name</h2>
                <form onSubmit={(e) => {
                    e.preventDefault();
                    nameSearch(name);
                }}>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter product name" />
                    <button type="submit">Search</button>
                </form>
                <button onClick={() => setView(1)}>Search by Category</button>
            </div>
        )
    }
}
export default InventorySearch
