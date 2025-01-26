"use client"

import React from 'react'
import Dropdown from './ui/Dropdown'
import { useStore } from '@/store/useStore'

const Menu = () => {

    // Store
    const {
        stocks,
        periods,
        selectedStock,
        selectedPeriod,
        setSelectedStock,
        setSelectedPeriod
    } = useStore()

    // Handle stock change
    const handleStockChange = (stock: string) => {
        setSelectedStock(stock)
    }

    // Handle period change
    const handlePeriodChange = (period: string) => {
        setSelectedPeriod(period)
    }

    return (
        <div className="flex flex-row w-full bg-gray-100 p-2 gap-2">
            <Dropdown
                buttonLabel={selectedStock || 'Stock'}
                options={stocks}
                onSelect={handleStockChange}
            />
            <Dropdown
                buttonLabel={selectedPeriod || 'Period'}
                options={periods}
                onSelect={handlePeriodChange}
            />
        </div>
    )
}

export default Menu