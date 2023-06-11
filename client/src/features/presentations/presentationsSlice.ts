import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { PresentationId, PresentationState } from './types/Presentation';
import * as api from './api';

const initialState: PresentationState = {
  presentations: [],
  error: undefined,
};

export const getPresentations = createAsyncThunk('presentations/load', () =>
  api.getPresentations()
);

export const removePresentation = createAsyncThunk('presentations/remove', (id: PresentationId) =>
  api.removePresentation(id)
);

export const addPresentation = createAsyncThunk('presentations/add', (presentation: FormData) =>
  api.addPresentation(presentation)
);

const presentationSlice = createSlice({
  name: 'presentations',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPresentations.fulfilled, (state, action) => {
        state.presentations = action.payload;
      })
      .addCase(getPresentations.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(removePresentation.fulfilled, (state, action) => {
        state.presentations = state.presentations.filter(
          (presentation) => presentation.id !== +action.payload
        );
      })
      .addCase(addPresentation.fulfilled, (state, action) => {
        console.log(action.payload);
        state.presentations.push(action.payload);
      });
  },
});

export default presentationSlice.reducer;
