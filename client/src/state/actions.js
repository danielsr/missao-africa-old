export const types = {
  SET_LOADING: 'SET_LOADING',
  SET_MSG: 'SET_MSG'
}

export const actions = {
  setLoading: isLoading => ({ type: types.SET_LOADING, isLoading }),
  setMsg: msg => ({ type: types.SET_MSG, msg })
}
