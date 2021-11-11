
const HU = {
  date: (date) => new Intl.DateTimeFormat('hu-HU').format(date),
  curreny:(curreny) => new Intl.NumberFormat('hu-HU',{style:'currency',currency: 'HUF'}).format(curreny),
  list: (list) => new Intl.ListFormat('hu-HU', { style:'long', type:'conjunction' }).format(list)
}



// export default HU
export default HU;