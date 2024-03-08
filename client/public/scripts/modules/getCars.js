import {fetchRequest, getCarsUrl} from "./api.js";
import {renderCars} from "./renderCarsData.js";
import {checkIsBodyTypeFiltered} from "./checkIsBodyTypeFiltered.js";

export const getCars = async (getFromQuery,filters = [],url = getCarsUrl) => {
    const filterOptions = filters

    const clb = (curBodyType) => filterOptions.push({key: 'bodyType',value: curBodyType})
    if(getFromQuery) checkIsBodyTypeFiltered(clb)

    const getUrlWithFiltersQuery = (url) => {
        const params =  filterOptions.reduce((acc,cur) => {
            acc += cur.value ? `${cur.key}=${cur.value}&` : ""
            return acc
        },"?")

        return `${url}${params}`
    }
    try {
        const {data} = await fetchRequest(getUrlWithFiltersQuery(url))

        renderCars(data)
    } catch (err) {
        console.error({err})
    }

}