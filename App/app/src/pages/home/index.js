import './style.css';
import {useState} from 'react';
import Categories from './categories';
import Utility from '../../classes/utility';
import Buttons from './../../component/buttons';
import Filter from './filtri/index';

function HomePage() {

  const [titleModal, setTitleModal] = useState('');
  const [buttonsModal,setTButtonsModal] = useState('');
  const [inputsModal, setInputsModal] = useState('');
  let txt = 'JavaScript 2022 ted JavaScript engine to execute the code on users devices.'


  let sectionNames  = [{id:1,title:'javascript',desc:txt,action:'add new element'},
					             {id:2,title:'php',desc:'txt',action:'add new element'},
                       {id:3,title:'css',desc:'txt',action:'add new element'},
					  ]
  let elements = []

  function handleClick(arrInputs,title){
    let elements = [];
    arrInputs.forEach((data) => {

      elements.push(
      <>
      <div className={'inputContainer'}>
        <label>{data}</label>
        <input type="text" name={data} />
      </div>
      </>
      )  
    })
    setInputsModal(elements)
    let obj = {id : 1}
    setTButtonsModal(<Buttons data={obj}></Buttons>)
    setTitleModal(title)
  }

  sectionNames.forEach((data) => {

          elements.push(
          <>
          <Categories handleClick={handleClick} data={data}></Categories>
          </>
          )  
  })

  if(elements.count <= 0){
     elements= <div>non ci sono elementi presenti</div>
  }


  function closeModal() {
    let el = document.getElementById('HomeRightModal');
    if(el.classList.contains('closeAnimation')){
      el.classList.remove('closeAnimation')
      el.classList.add('close')
    }
  }


  function Scrolling(e){

    if(Utility.getEndScrolling(e.target))
      {
        e.target.classList.add('noElementToScroll');
      }
      else {
        e.target.classList.remove('noElementToScroll');
      }
  }

  return (
    <>
    <div id="home" >
      <section id="HomeCategories">

        <span className='titleCat'>ELENCO CATEGORIE</span>
        <Filter></Filter>
        {elements}
      </section>

      <div id="HomeRightModal" onAnimationEndCapture={(e) => closeModal(e)}>
        <h1>{titleModal}</h1>
        <div className={'container'} onScroll={(e) => Scrolling(e)}>
          {inputsModal}
        </div>
        {buttonsModal}
      </div>
    </div>
    </>
  );
}

export default HomePage;