export default function(container = document.body, prefix = 'js-') {
  let els = [].slice.call(container.querySelectorAll(`*[class*="${prefix}"]`))

  return els.reduce((acc, el) => {
    let cx = typeof el.className === 'string' ? el.className : el.className.baseVal

    ;(cx.match(new RegExp(`${prefix}(\\w+)`, 'gm')) || [])
      .map(cn => cn.split(prefix)[1])
      .map(key => {
        acc[key] = acc[key]
          ? acc[key].constructor === Array
          ? acc[key].concat(el)
          : [acc[key], el]
          : el
      })

    return acc
  }, {})
}
