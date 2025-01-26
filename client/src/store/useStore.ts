import { create } from 'zustand'
import axios from 'axios'
import config from '@/config'

interface StoreState {
    stocks: { label: string }[]
    periods: { label: string }[]
    selectedStock: string | null
    selectedPeriod: string | null
    setSelectedStock: (stock: string) => void
    setSelectedPeriod: (period: string) => void

}

export const useStore = create<StoreState>((set) => ({

    // Loading
    isLoading: false,
    error: null,

    // Stocks
    stocks: [
        { label: 'A' },
        { label: 'B' },
        { label: 'C' },
        { label: 'D' },
        { label: 'E' },
    ],

    // Selected stock
    selectedStock: null,

    // Set selected stock
    setSelectedStock: (stock: string) => set({ selectedStock: stock }),

    // Periods
    periods: [
        { label: '1' },
        { label: '2' },
        { label: '3' },
        { label: '4' },
        { label: '5' },
        { label: '6' },
        { label: '7' },
        { label: '8' },
        { label: '9' },
        { label: '10' },
        { label: '11' },
        { label: '12' },
        { label: '13' },
        { label: '14' },
        { label: '15' },
    ],

    // Selected period
    selectedPeriod: null,

    // Set selected period
    setSelectedPeriod: (period: string) => set({ selectedPeriod: period }),
}))