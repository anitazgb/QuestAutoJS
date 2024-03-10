import {getCars} from "./getCars.js";
import {searchCarsUrl} from "./api.js";


export const search = () => {
    const searchInp = document.querySelector('#brand-search')

    searchInp.addEventListener('change',(e) => {
        const filter = [{key: 'make',value: e.target.value}]
        getCars(false,filter,searchCarsUrl)
    })
}