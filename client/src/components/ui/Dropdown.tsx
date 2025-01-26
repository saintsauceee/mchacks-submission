import { ChevronDownIcon } from 'lucide-react'
import React, { useState, useRef, useEffect } from 'react'

interface DropdownProps {
  buttonLabel: string
  options: { label: string }[]
  onSelect: (option: string) => void
}

const Dropdown: React.FC<DropdownProps> = ({ buttonLabel, options, onSelect }) => {

  // State
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const toggleDropdown = () => {
    setIsDropdownOpen(prevState => !prevState)
  }

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setIsDropdownOpen(false)
    }
  }

  const handleOptionClick = (option: string) => {
    onSelect(option)
    setIsDropdownOpen(false)
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <div
      className="relative"
      ref={dropdownRef}
    >
      <button
        onClick={toggleDropdown}
        className="flex flex-row items-center px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"
      >
        {buttonLabel}
        <ChevronDownIcon
          className="w-4 h-4 ml-2"
        />
      </button>
      {
        isDropdownOpen && (
          <div className="absolute mt-2 w-48 bg-white border rounded shadow-lg max-h-[300px] overflow-y-scroll">
            {
              options.map((option, index) => (
                <a
                  key={index}
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                  onClick={() => handleOptionClick(option.label)}
                >
                  {option.label}
                </a>
              ))
            }
          </div>
        )
      }
    </div>
  )
}

export default Dropdown