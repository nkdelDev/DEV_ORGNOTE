import styles from './style.module.css';
//import Buttons from './sectionbuttons';
function Categories(props) {
  
  let id = props.data.id
  let title = props.data.title;
  let desc = props.data.desc;
  let action = props.data.action;

  let arrow_svg = (<svg width="20" viewBox="0 0 711 800" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M425.352 11.6925C409.156 -3.8975 382.936 -3.8975 366.781 11.6925L24.2629 342.22C-8.08763 373.439 -8.08763 424.087 24.2629 455.306L369.267 788.294C385.297 803.724 411.185 803.934 427.422 788.704C444.032 773.155 444.198 747.521 427.877 731.732L112.119 427.044C95.9234 411.414 95.9234 386.111 112.119 370.482L425.352 68.2159C441.548 52.6259 441.548 27.3221 425.352 11.6925Z" fill="#6C6767"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M696.352 11.6925C680.156 -3.8975 653.936 -3.8975 637.781 11.6925L295.263 342.22C262.912 373.439 262.912 424.087 295.263 455.306L640.267 788.294C656.297 803.724 682.185 803.934 698.422 788.704C715.032 773.155 715.198 747.521 698.877 731.732L383.119 427.044C366.923 411.414 366.923 386.111 383.119 370.482L696.352 68.2159C712.548 52.6259 712.548 27.3221 696.352 11.6925Z" fill="#3C3636"/>
 </svg>)

  function openRightModal(e,id,action = ''){
    e.preventDefault();
    let el = document.getElementById('HomeRightModal');

    if (el.classList.contains('open')) {
     // el.classList.add('close')
      el.classList.remove('open')
      el.classList.add('closeAnimation')
    }
    else {
     // el.classList.remove('close')
      el.classList.add('open')
      el.classList.remove('closeAnimation')
      el.classList.remove('close')
    }
    
    // da gestire a db successivamente
    let arrInputs = [];

    switch (id) {
      case 1:
        arrInputs = ['nome','desc','desc_1','desc_2','type']
        break;
      case 2:
        arrInputs = ['nome','desc','desc_1','desc_2','type','link']
        break;
      case 3:
        break;
      default:
        console.log('non gestito')
    }
    props.handleClick(arrInputs,action) // valore passato dal handleclick

  }




  return (
 <>

 <section className={styles.container_cat} id={id}>
  <div className={styles.content}>
    <span className={styles.Title}>
      {title}
    </span>
    <span className={styles.Description}>
      {desc}
    </span>
    </div>
  <div className={styles.action} onClick={(e) => openRightModal(e,id,action)}>{arrow_svg}</div>
 </section>


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