"use client"

import { useState, createContext, useContext } from "react"

const AppContext = createContext()

export function AppProvider({ children }) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [editStudentId, setEditStudentId] = useState()

  function openModal() {
    setIsModalOpen(true)
  }
  function closeModal() {
    setIsModalOpen(false)
  }
  function toggleSidebar() {
    setIsSidebarOpen(!isSidebarOpen)
  }

  return (
    <AppContext.Provider
      value={{
        isModalOpen,
        openModal,
        closeModal,
        toggleSidebar,
        isSidebarOpen,
        editStudentId,
        setEditStudentId,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}
