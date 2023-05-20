import styles from './style.module.css';
import Utility from '../../../classes/utility';
import {ReactComponent as PlusIcon} from '../../../images/default/plus.svg';
//import Buttons from './sectionbuttons';
function Categories(props) {
  
  let id = props.data.id
  let title = props.data.title;
  let desc = props.data.desc;
  let action = props.data.action;

  function openRightModal(e,id,action = ''){
    e.preventDefault();


    let el = document.getElementById('HomeRightModal');
    let elContainer = el.querySelector('.container');
    elContainer.classList.remove('noElementToScroll');

    if (el.classList.contains('open')) {
     
      el.classList.remove('open')
      el.classList.add('closeAnimation')
      let parent = e.currentTarget.parentElement;
      let activeCat = parent.parentElement.querySelectorAll(`.${styles.activeCat}`)
      console.log(activeCat)
      if(activeCat.length > 0){
        activeCat.forEach((element) => {
          element.classList.remove(styles.activeCat);
        });
      }

      
    }
    else {
    let parent = e.currentTarget.parentElement;
    let activeCat = parent.parentElement.querySelectorAll(`.${styles.activeCat}`)
    console.log(activeCat)
    if(activeCat.length > 0){
      activeCat.forEach((element) => {
        element.classList.remove(styles.activeCat);
      });
    }
    // parent.classList.add(styles.activeCat)
     console.log(parent)

      setTimeout(()=> {
        if(elContainer.scrollHeight === elContainer.clientHeight){
          elContainer.classList.add('noElementToScroll');
        }
     }
     ,5);

      el.classList.add('open')
      el.classList.remove('closeAnimation')
      el.classList.remove('close')
    }
    
    // da gestire a db successivamente
    let arrInputs = [];

    switch (id) {
      case 1:
        arrInputs = ['nome','desc','desc_1','desc_2','type','nome','desc','desc_1','desc_2','type','nome','desc','desc_1','desc_2','type','nome','desc','desc_1','desc_2','type']
        break;
      case 2:
        arrInputs = ['nome','desc','desc_1','desc_2','type','link']
        break;
      case 3:
        break;
      default:
        console.log('non gestito')
    }
    
    if (el.classList.contains('open')) {
      props.handleClick(arrInputs,action) // valore passato dal handleclick
    }


  }

function openAllElements(e,id){
   const descrizione =  document.querySelector('[data-id-cat="'+id+'"]') 
   descrizione.classList.toggle(`${styles.open}`);
} 


  return (
 <>

 <section className={styles.container_cat} id={id}>
  <div className={styles.content}>
    <span className={styles.Title}>
      {title.toUpperCase()}
    </span>
    <span data-id-cat={id} className={styles.Description}>
      {desc}
    </span>
    </div>
  <div className={styles.action} onClick={(e) => openRightModal(e,id,action)}><><PlusIcon></PlusIcon></></div>
 </section>
  <div className={styles.openSub}><button onClick={(e) => openAllElements(e,id)}></button></div>



{
  /*
div.main_container > div.rightModal {
    background-color: black;
    min-height: 80px;
    border: 3px solid white;
    padding: 10px;
    margin-top: 10px;
    border-radius: 1rem;
    position: fixed;
    margin-left: 55%;
    
}
*/
}



 </>   
 
  );
}

export default Categories;