export const getDataFromLS = () => {
    const data = localStorage.getItem('dataFlight')
    return data ? JSON.parse(data) : []
}