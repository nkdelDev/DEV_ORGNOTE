import styles from './style.module.css';
function Buttons(props) {
  
  

  let id = (props.data.id != '') ? props.data.id : '';
  let action = (props.data.action != null) ? props.data.action : 'Conferma';
                      
  function openModal(e) {
    let target = e.target;
    let parent_target = target.parentElement;
    console.log(parent_target);

  }

  

  return (
    <>
    
    <div className={styles.buttons_container} data-id={id}>
        <button className={styles.button_green} onClick={(e) => openModal(e)} >{action}</button>
        <button className={styles.button_red}>annulla</button>   
    </div>

    {/*<Modal></Modal>*/}
    </>
  );
}

export default Buttons;