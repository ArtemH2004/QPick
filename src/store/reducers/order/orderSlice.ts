import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import {
  OrderCard,
  OrderAddress,
  OrderRecipient,
} from "@/store/reducers/order/types";

interface OrderState {
  card: OrderCard;
  address: OrderAddress;
  recipient: OrderRecipient;
}

const initialState: OrderState = {
  card: { number: "", date: "", cvv: "" },
  address: {
    type: "delivery",
    address: "",
    apartment: "",
    entrance: "",
    floor: "",
    intercom: "",
    comment: "",
  },
  recipient: { name: "", surname: "", phone: "" },
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    setAddress: (state, action: PayloadAction<OrderAddress>) => {
      state.address = action.payload;
    },

    setCard: (state, action: PayloadAction<OrderCard>) => {
      state.card = action.payload;
    },

    setRecipient: (state, action: PayloadAction<OrderRecipient>) => {
      state.recipient = action.payload;
    },

    clearAddress: (state) => {
      state.address = initialState.address;
    },

    clearCard: (state) => {
      state.card = initialState.card;
    },

    clearRecipient: (state) => {
      state.recipient = initialState.recipient;
    },

    clearOrder: () => initialState,
  },
});

export const {
  setAddress,
  setCard,
  setRecipient,
  clearAddress,
  clearCard,
  clearRecipient,
  clearOrder,
} = orderSlice.actions;
export const orderReducer = orderSlice.reducer;
export const orderActions = orderSlice.actions;
