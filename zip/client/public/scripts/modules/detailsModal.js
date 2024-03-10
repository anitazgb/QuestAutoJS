import {proxy} from "./api.js";


export const openDetailsModal = (data) => {

    const detailsLink = document.querySelectorAll('.detailsLink')

    const onOpen = (e) => {
        e.preventDefault()
        const curItem = data.find(item => item._id === e.target.dataset.id)
        if (!curItem) return;

        const carMakeText = document.querySelector('#carMakeText')
        const carImg = document.querySelector('#carImg')
        const carPriceText = document.querySelector('#carPriceText')
        const carDescriptionText = document.querySelector('#carDescriptionText')
        const viewDetailsModal = document.querySelector('#viewDetailsModal')

        const {make, model, price, image, description} = curItem

        carMakeText.innerHTML = `${make.name} ${model.name}`
        carImg.src = `${proxy}/api/${image}`
        carPriceText.innerHTML = price
        carDescriptionText.innerHTML = description

        viewDetailsModal.style.display = 'block'
    }
    detailsLink.forEach(item => {
        item.addEventListener('click', onOpen)
    })
}

export const closeDetailsModal = () => {
    const detailsCloseButton = document.querySelector('.detailsCloseButton')

    detailsCloseButton.addEventListener('click', () => {
        const viewDetailsModal = document.querySelector('#viewDetailsModal')
        viewDetailsModal.style.display = 'none'
    })
}