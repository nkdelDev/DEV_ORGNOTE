import Utility from '../../../classes/utility';
import Sidebar from './../../../sidebar/index';
import style   from '../style.css' 
import {ReactComponent as Icon_A_Z} from '../../../images/default/a_to_z.svg';
import {ReactComponent as Icon_Z_A} from '../../../images/default/z_to_a.svg';

export default function Filter({data}) {

    console.log('dati passati all interno della applicazione : ' + data)

    return (
      <div className='filterCat'>
        <div>
            <div className='content alfabetic' >
                <div></div>
                <div><span>A-Z</span></div>
            </div>
        </div>
        <div>
            <div className='content'>
                sdas
            </div>
        </div>
        <div>
            <div className='content'>
                sdas
            </div>
        </div>
        <div>
            <div className='content alfabetic' >
                <div></div>
                <div><span>A-Z</span></div>
            </div>
        </div>
        <div>
            <div className='content'>
                sdas
            </div>
        </div>
        <div>
            <div className='content'>
                sdas
            </div>
        </div>
        <div>
            <div className='content alfabetic' >
                <div></div>
                <div><span>A-Z</span></div>
            </div>
        </div>
        <div>
            <div className='content'>
                sdas
            </div>
        </div>
        <div>
            <div className='content'>
                sdas
            </div>
        </div>
      </div>
    );
  }