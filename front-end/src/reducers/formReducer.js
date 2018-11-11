const initialState = {
  visible: false
};
 const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case "OPEN_FORM":
		return {
			...state,
			visible:!state.visible
		}
      break;
    default:
      return state;
  }
};

export default formReducer;
