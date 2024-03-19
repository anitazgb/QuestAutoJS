import {proxy} from "./api.js"
import {onClickReserveBtn} from "./reserveModal.js";
import {openDetailsModal} from "./detailsModal.js";
import {toCapitalize} from "./toCapitalize.js";

export const renderCars = (data) => {

    const container = document.querySelector('#carListContainer')

    if (!data.length) return container.innerHTML = "";
    const itemHtml = ({image, make, model, price,_id}) => (`
        <div class="carsList__item">
                    <img 
                        crossorigin="anonymous" 
                        src="${proxy}/api/${image}" 
                        alt={model} 
                        class="carsList__itemImg"
                    />
                    <h6 class="carsList__itemNameTxt">${toCapitalize(make?.name)} ${toCapitalize(model?.name)}</h6>
                    <p class='carsList__itemPriceTxt'>$${price}</p>
                    <div class="carsList__itemBottomBlock flexBetween">
                        <button class="mainBtn reserveBtn">Reserve</button>
                        <button data-id="${_id}"
                                class="carsList__itemViewBtn"
                        >View Details</button>
                    </div>
                </div>
        `)

    container.innerHTML = data.reduce((acc, cur) => {
        acc += itemHtml(cur)
        return acc;
    }, "")

    onClickReserveBtn()
    openDetailsModal(data)

}