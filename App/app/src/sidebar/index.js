

import styles from './style.css';
import logo1 from '../images/sidebar/logo1.png';
import logo2 from '../images/sidebar/logo2.png';
import logo3 from '../images/sidebar/logo3.png';
import logo4 from '../images/sidebar/logo4.png';
import logo5 from '../images/sidebar/logo5.png';
import notFound from '../images/default/notFound.png';
import {ReactComponent as Arrowsidebar} from '../images/sidebar/arrow_sidebar.svg';


let arrow_svg = (<Arrowsidebar/>)


let items = [
    {
      id:1,
      name:'immagine1 da fare come test',
      img:logo1,
      popup:null 
    },
    {
        id:2,
        name:'immagine2',
        img:logo2,
        popup:null 
      },
      {
        id:3,
        name:'immagine3',
        img:logo2,
        popup:null 
      },
      {
        id:1,
        name:'immagine1',
        img:logo1,
        popup:null 
      },
      {
          id:2,
          name:'immagine2',
          img:logo2,
          popup:null 
        },
        {
          id:3,
          name:'immagine3',
          img:logo2,
          popup:null 
        },
        {
          id:1,
          name:'immagine1',
          img:logo1,
          popup:null 
        },
        {
            id:2,
            name:'immagine2',
            img:logo2,
            popup:null 
          },
          {
            id:3,
            name:'immagine3',
            img:logo2,
            popup:null 
          },
          {
            id:1,
            name:'immagine1',
            img:logo1,
            popup:null 
          },
          {
              id:2,
              name:'immagine2',
              img:logo2,
              popup:null 
            },
            {
              id:3,
              name:'immagine3',
              img:logo2,
              popup:null 
            },
            {
              id:1,
              name:'immagine1',
              img:logo1,
              popup:null 
            },
            {
                id:2,
                name:'immagine2',
                img:logo2,
                popup:null 
              },
              {
                id:3,
                name:'immagine3',
                img:logo2,
                popup:null 
              }
]


let elements = [];

function onLoadImages(e) {
  let imagetag = e.target;
  var isLoaded = imagetag.complete && imagetag.naturalHeight !== 0;
  if(isLoaded){
    console.log('immagine caricata correttamente')
  }
  else {
    console.log('NON CARICATA')
    e.target.src = notFound;
  }
}

function popUpSidebarElement(e,name){

  // rimuovo tutti gli elementi che hanno come classe sideBarPopup
  const allPopUp = document.querySelectorAll('.sideBarPopup');

  allPopUp.forEach(el => {
    el.remove();
  });

  // attivo il popup da vedere 
  const node = document.createElement("div");
  const nodeSpan = document.createElement("span");
  node.classList.add('ElementPopup')
  const textnode = document.createTextNode(name);
  let elementWidth = document.getElementById('sidebar-container');
  let marginLeft = elementWidth.offsetWidth;
  let marginLeftAgg = elementWidth.offsetWidth / 5;
  let heightElement = e.currentTarget.offsetHeight;
  console.log(e.currentTarget.offsetLeft + '||' + e.currentTarget.offsetTop) // gestione per avere l'offset di sinitra e l'offset in alto
  const offsetLeft = (e.currentTarget.offsetLeft + marginLeft + marginLeftAgg ) + 'px';
  console.log(e.currentTarget.offsetTop); 
  node.style.marginLeft = offsetLeft;
  const currrentTarget = e.currentTarget;
  node.style.marginTop = ((currrentTarget.getBoundingClientRect().top) + window.pageYOffset) + 'px';
  node.style.position = 'absolute';
  node.style.zIndex = '9999';
  node.style.height = heightElement + 'px'
  node.appendChild(nodeSpan)
  nodeSpan.appendChild(textnode);
  let elementPopup = document.getElementById('containerPopUp');
  elementPopup.appendChild(node);
}

function popUpSidebarElementRemove(e){
    // rimuovo tutti gli elementi che hanno come classe sideBarPopup
    const allPopUp = document.querySelectorAll('.ElementPopup');

    allPopUp.forEach(el => {
      el.remove();
    });
}



items.forEach((data) => {
    elements.push(<li id={data.id} className={styles.element} data={data.name} onMouseOver={(e) =>{ popUpSidebarElement(e,data.name)}} onMouseLeave={(e) =>{ popUpSidebarElementRemove(e)}}> 
     <img src={data.img !== null ? data.img : notFound}
     alt="Logo"  
     onLoad  = {(e) => onLoadImages(e)} 
     onError = {(e) => onLoadImages(e)}     
      />
      </li>
      )  
})

function openClose(e){
  e.preventDefault()
  let sidebar_el = document.getElementById('sidebar');
  let sidebar_open_el = document.getElementById('sidebar-open');
  let page_app = document.getElementById('page_app');

  if(sidebar_el.classList.contains('disactivate_sidebar')){
    sidebar_el.classList.remove('disactivate_sidebar')
    sidebar_el.classList.add('active_sidebar')
    sidebar_open_el.classList.add('active')
    page_app.classList.add('open')
    page_app.classList.remove('close')  
  }
  else
  {
    sidebar_el.classList.remove('active_sidebar')
    sidebar_el.classList.add('disactivate_sidebar')
    sidebar_open_el.classList.remove('active')
    page_app.classList.add('close')
    page_app.classList.remove('open')  
  }

}

function Sidebar() {
  return (
    <>
   <div id={'sidebar'} className={'disactivate_sidebar'}>
     <div  id={'sidebar-container'}><ul>{elements}</ul></div>
     <div  id={'sidebar-open'} onClick={(e) => openClose(e)}>{arrow_svg}</div>
   </div>
    </>   
  );
}

export default Sidebar;