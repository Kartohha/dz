
//    return (
//       <div className="wrapper">
//         <div className="top"></div>
//         <div className="bot">
//         <div className="left"></div>
//         <div className="right"></div>
//         </div>
//       </div>
//     )
//  }
 
const App = (props) => {
  let [classRight, setClassRight] = React.useState('right')
  let [classh1, setClassh1] = React.useState('')
  let [h1Text, seth1Text] = React.useState('ЗАГОЛОВОК')
  let [classli, setClassli] = React.useState('')
  const rightClick = () => {
    setClassRight('right2')
  }
  const h1Click = () => {
    setClassh1('hnew')
    seth1Text('НЕ ЗАГОЛОВОК')
  }
  const blClick = () => {
    setClassli('linew')
  }
  return (
    // className, onClick являются свойствами
    <div className="app">
      <div className="wrapper">
      <div className="top"><h1 className={classh1} onClick={h1Click} >{h1Text}</h1></div>
      <div className="bot">
      <div className="left" onClick={blClick}>
      <ol>
        <li class={classli}>Один</li>
        <li class={classli}>Два</li>
        <li class={classli}>Три</li>
        <li class={classli}>Четыре</li>
        <li class={classli}>Пять</li>
        <li class={classli}>Шесть</li>
        <li class={classli}>Семь</li>
      </ol>
      </div>
         <div className={classRight} onClick={rightClick} ><span>***БЛОК С ТЕКСТОМ***</span></div>
         </div>
         </div>
    </div >
  )
}

const container = document.getElementById('app')
const root = ReactDOM.createRoot(container)
root.render(<App />) // передача свойств: <tag props />
