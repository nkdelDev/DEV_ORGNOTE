import './style.css';
import SectionComponent from './sectionComponent';

function HomePage() {
  
  let txt = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'


  let sectionNames  = [{id:1,title:'Add Notes',desc:'sono le note visionate recentemente'},
					             {id:2,title:'Delete Notes',desc:txt},
                       {id:3,title:'Create Links',desc:'sono le note visionate recentemente'}
					  ]
  let elements = []

  sectionNames.forEach((data) => {
          elements.push(<SectionComponent data={data}></SectionComponent>)  
  })

  return (
 <section id="HomePage">
   {elements}
 </section>
  );
}

export default HomePage;