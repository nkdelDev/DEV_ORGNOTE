
import styles from './style.css';


let arrow_svg = (<svg width="30" viewBox="0 0 711 800" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M425.352 11.6925C409.156 -3.8975 382.936 -3.8975 366.781 11.6925L24.2629 342.22C-8.08763 373.439 -8.08763 424.087 24.2629 455.306L369.267 788.294C385.297 803.724 411.185 803.934 427.422 788.704C444.032 773.155 444.198 747.521 427.877 731.732L112.119 427.044C95.9234 411.414 95.9234 386.111 112.119 370.482L425.352 68.2159C441.548 52.6259 441.548 27.3221 425.352 11.6925Z" fill="#6C6767"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M696.352 11.6925C680.156 -3.8975 653.936 -3.8975 637.781 11.6925L295.263 342.22C262.912 373.439 262.912 424.087 295.263 455.306L640.267 788.294C656.297 803.724 682.185 803.934 698.422 788.704C715.032 773.155 715.198 747.521 698.877 731.732L383.119 427.044C366.923 411.414 366.923 386.111 383.119 370.482L696.352 68.2159C712.548 52.6259 712.548 27.3221 696.352 11.6925Z" fill="#3C3636"/>
</svg>)

let items = [
    {
      id:1,
      name:'add',
      img:null,
      popup:null 
    },
    {
        id:2,
        name:'delete',
        img:null,
        popup:null 
      },
      {
        id:3,
        name:'section',
        img:null,
        popup:null,
        subSection:[
         {
            name:'section1',
            img:null,
            popup:null 
         },
         {
            name:'section1',
            img:null,
            popup:null 
         },
         {
            name:'section1',
            img:null,
            popup:null 
         }
        ]

        
      }
]

let elements = [];

items.forEach((data) => {
    elements.push(<div id={data.id} className={styles.element} data={data.name}></div>)  
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
     <div  id={'sidebar-container'}></div>
     <div  id={'sidebar-open'} onClick={(e) => openClose(e)}>{arrow_svg}</div>
   </div>
    </>   
  );
}

export default Sidebar;