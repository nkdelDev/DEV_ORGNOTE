import styles from './style.module.css';

function Modal(props) {

  let arr_inputs = [];
  let inputs = props.inputs;

  return (
 <div className={styles.modal}>

    <div className={styles.modal_content}>
      <form>
      <span className={styles.title}>Title</span>
      <div className={styles.row}>
            <label for="input1">Label</label>
            <input id="input1"></input>
      </div>
      <div className={styles.row}>
            <label for="input1">Label</label>
            <input id="input1"></input>
      </div>
      </form>

    </div>

 </div>
  );
}

export default Modal;