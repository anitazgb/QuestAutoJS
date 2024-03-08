import {fetchRequest, getOptionsUrl} from "./api.js";
import {renderFilters} from "./renderFilters.js";

export const getOptions = async () => {
    try {
        const data = await fetchRequest(getOptionsUrl)
        renderFilters(data)
    } catch (err) {
        console.error({err})
    }
}