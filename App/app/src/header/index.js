import './style.css';

function Header() {
  
  let labels = ['home','categories','new','login'] 
  let elements = []

  labels.forEach((data) => {

    switch (data) {
      case 'login':
          elements.push(<div class="element login" >{data}</div>)
        break;
    
      default:
          elements.push(<div class="element" >{data}</div>)  
        break;
    }
  })

  return (
 <nav>
   {elements}
 </nav>
  );
}

export default Header;
