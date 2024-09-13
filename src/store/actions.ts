import { bindActionCreators } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { basketActions } from "@/store/reducers/basket/basketSlice";

const actions = {
    ...basketActions,
};


export const useActions = () => {
    return bindActionCreators(actions, useDispatch());
};
