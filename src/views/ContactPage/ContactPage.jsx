import   './styles.css';
import SuperiorBar from '../../components/SuperiorBar/SuperiorBar';
import { useContext } from 'react';
import { ItemsContext } from '../../context/ItemsContext';

const ContactPage =()=>{

  const{items}=useContext(ItemsContext);

  console.log(items);
  
    return(
        <div className='container-contact'>
          <SuperiorBar title={'Contact'} />
          <h2>hello ! from Contact page</h2>
        </div>
    )
}

export default ContactPage;