import { bindActionCreators } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { basketActions } from "@/store/reducers/basket/basketSlice";
import { favoritesActions } from "@/store/reducers/favorites/favoritesSlice";
import { orderActions } from "@/store/reducers/order/orderSlice";

const actions = {
    ...basketActions,
    ...favoritesActions,
    ...orderActions,
};


export const useActions = () => {
    return bindActionCreators(actions, useDispatch());
};
