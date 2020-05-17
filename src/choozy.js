export default function(container = document, attr = 'ref') {
  let els = [].slice.call(container.querySelectorAll(`*[${attr}]`))
  return els.reduce((acc, el) => {
    let key = el.getAttribute(attr)
    el.removeAttribute(attr)
    acc[key] = acc[key]
      ? acc[key].constructor === Array
        ? acc[key].concat(el)
        : [acc[key], el]
      : el
    return acc
  }, {})
}
