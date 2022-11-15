import { basketActions } from './../store/basket.slice';
import { useDispatch } from "react-redux";
import { bindActionCreators } from "@reduxjs/toolkit";
import { favActions } from '../store/favorites';


const actions = {
	...basketActions,
	...favActions
}

export const useActions = () => {
	const dispatch = useDispatch();
	return bindActionCreators(actions, dispatch)
}