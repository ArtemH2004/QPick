import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ProductCard } from "@/store/reducers/card/types";

interface FavoritesState {
  card: ProductCard[];
}

const initialState: FavoritesState = {
  card: [],
};

const favoritesSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    setCardInFavorites(state, action: PayloadAction<ProductCard>) {
      const currentCardIndex = state.card.findIndex(
        (item) => item.id === action.payload.id
      );

      currentCardIndex === -1 && state.card.push(action.payload);
    },

    replaceCardFromFavorites(state, action: PayloadAction<ProductCard>) {
      state.card = state.card.filter((item) => item.id !== action.payload.id);
    },
  },
});

export const { setCardInFavorites, replaceCardFromFavorites } =
  favoritesSlice.actions;
export const favoritesReducer = favoritesSlice.reducer;
export const favoritesActions = favoritesSlice.actions;
