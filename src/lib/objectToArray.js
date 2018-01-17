export default object => Object.keys(object).map(o => ({
  ...object[o],
  id: o,
}))
