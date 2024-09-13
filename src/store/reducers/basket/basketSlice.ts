import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ProductCard } from "@/store/reducers/card/types";

interface BasketState {
  card: ProductCard[];
  count: number[];
}

const initialState: BasketState = {
  card: [],
  count: [],
};

const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    setCardInBasket(state, action: PayloadAction<ProductCard>) {
      const currentCardIndex = state.card.findIndex(
        (item) => item.id === action.payload.id
      );

      if (currentCardIndex === -1) {
        state.card.push(action.payload);
        state.count.push(1);
      }
    },

    replaceCardFromBasket(state, action: PayloadAction<ProductCard>) {
      const currentCardIndex = state.card.findIndex(
        (item) => item.id === action.payload.id
      );

      if (currentCardIndex !== -1) {
        state.card.splice(currentCardIndex, 1);
        state.count.splice(currentCardIndex, 1);
      }
    },

    increaseCardCount(state, action: PayloadAction<ProductCard>) {
      const currentCardIndex = state.card.findIndex(
        (item) => item.id === action.payload.id
      );

      if (currentCardIndex !== -1 && state.count[currentCardIndex] < 9) {
        state.count[currentCardIndex] += 1;
      }
    },

    decreaseCardCount(state, action: PayloadAction<ProductCard>) {
      const currentCardIndex = state.card.findIndex(
        (item) => item.id === action.payload.id
      );

      if (currentCardIndex !== -1 && state.count[currentCardIndex] > 1) {
        state.count[currentCardIndex] -= 1;
      }
    },
  },
});

export const {
  setCardInBasket,
  replaceCardFromBasket,
  increaseCardCount,
  decreaseCardCount,
} = basketSlice.actions;
export const basketReducer = basketSlice.reducer;
export const basketActions = basketSlice.actions;
