import { createSlice } from '@reduxjs/toolkit'
import { getAllApartments } from "../ApartmentData.js";

const apartmentlistSlice = createSlice({
  name: 'apartmentlist',
  initialState: {
    list: getAllApartments().slice(0, 6),
  },
  reducers: {
    loadMoreApartments(state, action) {
      const { amount } = action.payload
      // const amount = action.payload.amount
      console.log("Dodaję więcej książek", amount)
      const nextTenApartments = getAllApartments().slice(11, 21)
      state.list = [...state.list, ...nextTenApartments]
      // nawias kwadratowy, który w 15 linijce na zewnątrz mówi stwórz nową tablicę
      // ...state.list mówi "do tej nowej tablicy wrzuć wszystkie nowe elementy z list z obecnego stanu"
      // ...nextTenBooks mówi "do tej nowej tablicy która już jest w state.list dodaj na końcu elementy tablicy nextTenBooks"
      console.log(state)
    },
  }
})

export const { loadMoreApartments } = apartmentlistSlice.actions

export default apartmentlistSlice.reducer
