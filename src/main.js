const div1 = dom.create('<div>创建的第一个div</div>')
const div2 = dom.create('<div>创建的第二个div</div>')
const div3 = dom.create('<div>创建的第三个div</div>')

dom.after(after_, div1)

dom.before(before_, div1)

dom.append(parent1, div3)

dom.wrap(div2, wrap_)

const resRemove = dom.remove(remove_)
console.log(resRemove)

const resEmpty = dom.empty(empty_)

dom.attr(attr_, 'class', 'red')
const resAttr = dom.attr(attr_, 'class')
console.log(`attr---${resAttr}`)

dom.text(text_, "hello world")
console.log(`text---${dom.text(text_)}`)

dom.html(html_, "<strong>hello world</strong>")
console.log(`html---${dom.html(html_)}`)

dom.style(style_, 'border', '2px solid blue')
const s = {
  color: 'red',
  fontSize: '30px'
}
dom.style(style_, s)
console.log(`style---${dom.style(style_, 'color')}`)

dom.class.add(class_, 'blue')
// dom.class.remove(class_, 'blue')
console.log(`class.has---${dom.class.has(class_, 'blue')}`)

let fn = () => {
  console.log('点击了')
}
dom.on(on_, 'click', fn)
dom.off(off_, 'click', fn)

let fff = dom.find('.blue', find_)
console.log('find找到的是伪数组---')
console.log(fff)

const resSib = dom.siblings(siblings_)
console.log(resSib)

dom.each(each_.children, (n) => {
  console.log(n)
})

let resIndex = dom.index(index_)
console.log(resIndex)