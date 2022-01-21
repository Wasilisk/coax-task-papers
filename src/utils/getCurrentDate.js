const month = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

export const getCurrentDate = () => {
    const now = new Date();
    return `${month[now.getMonth()]} ${dayFormat(now)} - ${(dayFormat(now) + 1)}, ${now.getFullYear()}`
}

const dayFormat = (now) => {
    return ((now.getDate() > 9) ? now.getDate() : ('0' + now.getDate()))
}