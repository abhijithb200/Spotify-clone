export const initialState={
    user:null,
    playlists:[],
    playing:false,
    item:null,
    //token:'BQDqajQ7DtGjGEA9IdnIUsTWL0ITHikD_l4h-pUmPyk8qDYMB1Mw5bMyVSLE2jpyPaxdB-d169LPJxMtrcVGTEW1XhIm9lusgkOnqAKcL-72QmRTQiYFY-lb3f0jc0R7Xz90RQrzyhI0t6U27fOyfbVCI9aqrcQndC0eb6vZNyysiATu',
}

const reducer =(state,action)=>{
    console.log(action);
    switch(action.type){
        case 'SET_USER':
            return {
                ...state,
                user:action.user
            }
        case 'SET_TOKEN':
            return{
                ...state,
                token:action.token
            }
        case 'SET_PLAYLISTS':
            return{
                ...state,
                playlists:action.playlists
            }
        case 'SET_DISCOVER_WEEKLY':
            return{
                ...state,
                discover_weekly:action.discover_weekly
            }
        default:
            return state
    }
}

export default reducer