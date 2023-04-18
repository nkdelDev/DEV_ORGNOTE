import './style.css';
import {useState} from 'react';
import Categories from './categories';

function HomePage() {

  const [titleModal, setTitleModal] = useState('');
  const [inputsModal, setInputsModal] = useState('dsdsadsad');
  let txt = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'


  let sectionNames  = [{id:1,title:'Add Notes',desc:txt,action:'add note'},
					             {id:2,title:'Delete Notes',desc:txt,action:'delete note'},
                       {id:3,title:'Create Links',desc:txt,action:'create link'},
                       {id:1,title:'Add Notes',desc:txt,action:'add note'},
					             {id:2,title:'Delete Notes',desc:txt,action:'delete note'},
                       {id:3,title:'Create Links',desc:txt,action:'create link'},
                       {id:1,title:'Add Notes',desc:txt,action:'add note'},
					             {id:2,title:'Delete Notes',desc:txt,action:'delete note'},
                       {id:3,title:'Create Links',desc:txt,action:'create link'},
                       {id:1,title:'Add Notes',desc:txt,action:'add note'},
					             {id:2,title:'Delete Notes',desc:txt,action:'delete note'},
                       {id:3,title:'Create Links',desc:txt,action:'create link'},
                       {id:1,title:'Add Notes',desc:txt,action:'add note'},
					             {id:2,title:'Delete Notes',desc:txt,action:'delete note'},
                       {id:3,title:'Create Links',desc:txt,action:'create link'},
                       {id:1,title:'Add Notes',desc:txt,action:'add note'},
					             {id:2,title:'Delete Notes',desc:txt,action:'delete note'},
                       {id:3,title:'Create Links',desc:txt,action:'create link'},
                       {id:1,title:'Add Notes',desc:txt,action:'add note'},
					             {id:2,title:'Delete Notes',desc:txt,action:'delete note'},
                       {id:3,title:'Create Links',desc:txt,action:'create link'},
                       {id:1,title:'Add Notes',desc:txt,action:'add note'},
					             {id:2,title:'Delete Notes',desc:txt,action:'delete note'},
                       {id:3,title:'Create Links',desc:txt,action:'create link'},
                       {id:1,title:'Add Notes',desc:txt,action:'add note'},
					             {id:2,title:'Delete Notes',desc:txt,action:'delete note'},
                       {id:3,title:'Create Links',desc:txt,action:'create link'},
                       {id:1,title:'Add Notes',desc:txt,action:'add note'},
					             {id:2,title:'Delete Notes',desc:txt,action:'delete note'},
                       {id:3,title:'Create Links',desc:txt,action:'create link'},
                       {id:1,title:'Add Notes',desc:txt,action:'add note'},
					             {id:2,title:'Delete Notes',desc:txt,action:'delete note'},
                       {id:3,title:'Create Links',desc:txt,action:'create link'},
					  ]
  let elements = []

  function handleClick(arrInputs,title){
    let elements = [];
    arrInputs.forEach((data) => {

      elements.push(
      <>
      <div className={'inputContainer'}>
        <label>
          {data}
          <input type="text" name={data} />
        </label>
        <input type="submit" value="Submit" />
      </div>
      </>
      )  
    })
    setInputsModal(elements)
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

  return (
    <>
    <div id="home" >
      <section id="HomeCategories">
        {elements}
      </section>

      <div id="HomeRightModal" onAnimationEndCapture={(e) => closeModal(e)}>
        <h1>{titleModal}</h1>
        <div className={'container'}>
          {inputsModal}
        </div>
      </div>
    </div>
    </>
  );
}

export default HomePage;