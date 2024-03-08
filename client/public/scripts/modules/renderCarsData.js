import {proxy} from "./api.js"
import {onClickReserveBtn} from "./reserveModal.js";
import {openDetailsModal} from "./detailsModal.js";

export const renderCars = (data) => {

    const container = document.querySelector('#carListContainer')

    if (!data.length) return container.innerHTML = "";
    const itemHtml = ({image, make, model, price,_id}) => (`
            <div class="box">
                <img crossorigin="anonymous" src="${proxy}/api/${image}" alt="suv car">
                <h3>${make?.name} ${model?.name}</h3>
                <span>$${price}</span>
                <button class="btn reserveBtn">Reserve</button>
                <a class="detailsLink" data-id="${_id}">View Details</a>
            </div>
        `)

    container.innerHTML = data.reduce((acc, cur) => {
        acc += itemHtml(cur)
        return acc;
    }, "")

    onClickReserveBtn()
    openDetailsModal(data)

}