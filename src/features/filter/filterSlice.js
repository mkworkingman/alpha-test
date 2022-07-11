import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  initialSpeakers: null,
  currentSpeakers: null,
  time: null,
  currentGender: null,
  currentTime: null,
  loading: null,
  success: null
}

export const getSpeakers = createAsyncThunk('filter/getSpeakers', async () => {
    const response = await axios.get('https://pro.alphadevteam.com/api/tz/speakers')
    return response.data.response
  }
)

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setCurrentGender: (state, action) => {
      state.currentGender = action.payload
    },
    setCurrentTime: (state, action) => {
      state.currentTime = action.payload
    },
    search: state => {
      let speakers = state.initialSpeakers
      if (state.currentGender) speakers = speakers.filter(v => v.gender === state.currentGender)
      if (state.currentTime) speakers = speakers.filter(v => v.performance_time === state.currentTime)
      state.currentSpeakers = speakers
    },
    clear: state => {
      state.currentSpeakers = state.initialSpeakers
      state.currentGender = null
      state.currentTime = null
    }
  },
  extraReducers: builder => {
    builder
      .addCase(getSpeakers.pending, state => {
        state.loading = true
      })
      .addCase(getSpeakers.fulfilled, (state, action) => {
        state.initialSpeakers = action.payload
        state.currentSpeakers = action.payload
        state.time = [...new Set(action.payload.map(v => v.performance_time))]
        state.loading = false
        state.success = true
      })
      .addCase(getSpeakers.rejected, state => {
        state.loading = false
        state.success = false
      })
  },
})

export const { setCurrentGender, setCurrentTime, clear, search } = filterSlice.actions;

export default filterSlice.reducer
