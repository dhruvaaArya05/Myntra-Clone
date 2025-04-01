import { configureStore, createSlice } from "@reduxjs/toolkit";
import { womenActivewearItems } from "../data/womenActivewearItems";
import { watchesItems } from "../data/watchesItems";
import { menActivewear } from "../data/menActivewear";

const womenActivewearSlice = createSlice({
  name: 'womenActivewear',
  initialState: womenActivewearItems,
  reducers: {
    addInitialItems: (state, action) => {
      return state;
    },
  }
});

const watchesSlice = createSlice({
  name: 'watches',
  initialState: watchesItems,
  reducers: {
    addInitialItems: (state, action) => {
      return state;
    }
  }
})

const menActivewearSlice = createSlice({
  name: 'menActivewear',
  initialState: menActivewear,
  reducers: {
    addInitialItems: (state, action) => {
      return state;
    }
  }
})

const myntraWishlistSlice = createSlice({
  name: 'myntraWishlist',
  initialState: [],
  reducers: {
    addToWishlist: (state, action) => {
      state.push(action.payload);
    },
    removefromWishlist: (state, action) => {
      return state.filter((id) => id !== action.payload);
      // let newState = [];
      // for (let i = 0; i < state.length; i++) {
      //   if (state[i] != action.payload) {
      //     newState = [...newState, state[i]];
      //   }
      // }
      // return newState;
    }
  }
})

const myntraBagSlice = createSlice({
  name: 'myntraBag',
  initialState: [],
  reducers: {
    addToBag: (state, action) => {
      state.push(action.payload);
    },
    removefromBag: (state, action) => {
      return state.filter((id) => id !== action.payload);
      // let newState = [];
      // for (let i = 0; i < state.length; i++) {
      //   if (state[i] != action.payload) {
      //     newState = [...newState, state[i]];
      //   }
      // }
      // return newState;
    }
  }
})

const myntraStore = configureStore({
  reducer: {
    womenActivewear: womenActivewearSlice.reducer,
    myntraBag: myntraBagSlice.reducer,
    menActivewear: menActivewearSlice.reducer,
    watches: watchesSlice.reducer,
    myntraWishlist: myntraWishlistSlice.reducer,
  }
});

export const womenActwearActions = womenActivewearSlice.actions;
export const myntraBag = myntraBagSlice.actions;
export const menActivewears = menActivewearSlice.actions;
export const watchesActions = watchesSlice.actions;
export const myntraWishlist = myntraWishlistSlice.actions;

export default myntraStore;
