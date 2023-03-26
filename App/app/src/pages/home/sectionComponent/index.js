import styles from './style.module.css';
function SectionComponent(props) {
  
  let id = props.data.id
  let title = props.data.title;
  let desc = props.data.desc;

  console.log('valori passati al componente : ' + JSON.stringify(props.data))

  return (
 <section className={styles.container} id={id}>
   <span className={styles.Title}>
    {title}
   </span>
   <span className={styles.Description}>
    {desc}
   </span>
   <hr></hr>
 </section>
  );
}

export default SectionComponent;