const initialState = {
    lang: '$'
}

const langReducer = (state = initialState, action) => {
    console.log(action);
    switch(action.type){
        case 'SELECTED_LANGUAGE':
            return {
                lang: action.lang
            }
        default:
            return state
    }
}

export  {langReducer}