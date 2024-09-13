import { bindActionCreators } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { basketActions } from "@/store/reducers/basket/basketSlice";
import { favoritesActions } from "@/store/reducers/favorites/favoritesSlice";

const actions = {
    ...basketActions,
    ...favoritesActions
};


export const useActions = () => {
    return bindActionCreators(actions, useDispatch());
};
