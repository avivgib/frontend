import { httpService } from '../http.service'

export const carService = {
    query,
    getById,
    save,
    remove,
    addCarMsg
}

async function query(filterBy = { txt: '', price: 0 }) {
    return httpService.get(`car`, filterBy)
}

function getById(carId) {
    return httpService.get(`car/${carId}`)
}

async function remove(carId) {
    return httpService.delete(`car/${carId}`)
}

async function save(car) {
    var savedCar
    if (car._id) {
        savedCar = await httpService.put(`car/${car._id}`, car)
    } else {
        savedCar = await httpService.post('car', car)
    }
    return savedCar
}

async function addCarMsg(carId, txt) {
    const savedMsg = await httpService.post(`car/${carId}/msg`, { txt })
    return savedMsg
}