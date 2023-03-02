const getDate = () => {
    const date = new Date();
    const day = date.getDate();
    const month = (date.getMonth() + 1).toLocaleString('en-US', {
      minimumIntegerDigits: 2,
      useGrouping: false
    })
    const year = date.getFullYear();
    return(`${day}.${month}.${year}`)
}

export default getDate