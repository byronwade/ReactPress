// states/productsState.js
import { atom } from "recoil";

const productsState = atom({
	key: "productsState", // unique ID (with respect to other atoms/selectors)
	default: [], // default value (initial value)
});

export default productsState;
