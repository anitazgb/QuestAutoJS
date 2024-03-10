import {filterCarsData} from "./modules/filter.js";
import {getCars} from "./modules/getCars.js";
import {search} from "./modules/search.js";
import {closeReserveModal} from "./modules/reserveModal.js";
import {closeDetailsModal} from "./modules/detailsModal.js";
import {getOptions} from "./modules/getOptions.js";





window.addEventListener('DOMContentLoaded',() => {
    getCars(true)
    getOptions()
    filterCarsData()
    search()
    closeReserveModal()
    closeDetailsModal()
})

