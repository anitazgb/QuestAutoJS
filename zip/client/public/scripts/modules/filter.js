import {getCars} from "./getCars.js";


export const filterCarsData = () => {
    const btn = document.querySelector('#filter-btn')
    const options = document.querySelectorAll('.carFilter--field')


    btn.addEventListener('click', () => {
        const filters = [...options].map(item => ({
            key: item.id.replace('-select',""),
            value: item.value
        }))

        getCars(false,filters)
    })
}