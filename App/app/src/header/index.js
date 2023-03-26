import './header.css';

function Header() {
  
  let labels = ['home','categories','new','login'] 
  let elements = []

  labels.forEach((data) => {
    if(data === 'login'){
      elements.push(<div class="element login" >{data}</div>)  
    }
    else{
      elements.push(<div class="element" >{data}</div>)  
    }
  })

  return (
 <nav>
   {elements}
 </nav>
  );
}

export default Header;
