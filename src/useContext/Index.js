import React, { useContext } from 'react'

const Nama = React.createContext()
const Kelompok = React.createContext()

const Komponen = () => {
  return (
    <Nama.Provider value={'Praktikan'}>
      <Kelompok.Provider value={'02'}>
        <IsiKomponen />
      </Kelompok.Provider>
    </Nama.Provider>
  )
}

const IsiKomponen = () => {
  const nama = useContext(Nama)
  const kelompok = useContext(Kelompok)

  return (
    <h1>
      Halo Saya {nama} dari kelompok {kelompok} sedang belajar React Hooks.
    </h1>
  )
}

export default Komponen;
