export const selectAllPositions = (state) => state.positions;

export const selectVisiblePositions = (state, filters = []) => {

    if(filters.length === 0){
        return state.positions
    }

    return state.positions.filter(position => {
        const positionFilters = [].concat(position.role, position.level, ...languages, ...tools)
    })
}