

export const openReserveModal = () => {
    const modal = document.querySelector('#reservationModal')
    modal.style.display = 'block'
}

export const closeReserveModal = () => {
    const closeBtn = document.querySelector('#reserve-close-button')
    const modal = document.querySelector('#reservationModal')
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none'
    })
}

export const onClickReserveBtn = () => {
    const reserveBtns = document.querySelectorAll('.reserveBtn')
    reserveBtns.forEach(item => {
        item.addEventListener('click',openReserveModal)
    })
}
