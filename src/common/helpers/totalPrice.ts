import { RootState } from "@/store/store";
import { useSelector } from "react-redux";

export const totalPrice = (): number => {
    const basket = useSelector((state: RootState) => state.basket);
    let sum = 0;
    for (let i = 0; i < basket.card.length; i++) {
        sum += basket.card[i].price * basket.count[i];
    }

    return sum;
}