import {bodyTypes} from "./constants.js";
import {checkIsBodyTypeFiltered} from "./checkIsBodyTypeFiltered.js";

export const renderFilters = ({makes, models, colors}) => {
    const selects = document.querySelectorAll('.carFilter--field')

    const filters = {
        make: makes,
        model: models,
        color: colors,
        bodyType: bodyTypes.map(item => ({_id: item, name: item}))
    }

    const renderOption = (item) => {
        const value = item?._id || ""
        const content = item ? item.name[0].toUpperCase() + item.name.slice(1) : "All"
        return `
        <option value="${value}">${content}</option>
    `
    }


    const renderOptions = (item) => {
        const key = item.id.replace('-select', '')

        item.innerHTML = filters[key].reduce((acc, cur) => {
            acc += renderOption(cur)
            return acc;
        }, renderOption())
    }
    selects
        .forEach(item => {
            const isSelect = item.tagName !== "SELECT"

            if (isSelect) return;
            renderOptions(item)
        })

    const setBodyTypeSelected = (curBodyType) => {
        const select = document.querySelector('#bodyType-select')

        const options = [...select.options]
        options.forEach(item => {
            if(item.value === curBodyType) {
                item.selected = true
            }
        })
    }

    checkIsBodyTypeFiltered(setBodyTypeSelected)

}