export type dataType = {
    departCity: string
    arrivCity: string
    dateToGoCity: string
    dateOfReturnTrip: string
    roundTripFlight: boolean
}

export const setDataToLC = (data: dataType) => {
    localStorage.setItem('dataFlight', JSON.stringify(data))
}


