import React, {useState} from 'react'
import Facebook from './images/facebook.svg'
import Signup from './signup';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const [openModal, setOpenModal] = useState(false)
    const toggleModal = () => {
        setOpenModal(!openModal)
    }

    const onChangeEmail = (e) => {
        setEmail(e.target.value)
    };
    const onChangePasswrd = (e) => {
        setPassword(e.target.value)
    };
    const onSubmit = (e) => {
        e.preventDefault()
    };
  return (
    <>
    <div className='backGround'>
        <div className='facebooks'>
            <img src={Facebook} alt=''  className='faceBookLogo'/> <br></br> 
            <div>
            <h2 className='writings'>Facebook helps you connect and share <br></br>with the people in your life.</h2>
            </div>
            
        </div>
        <div>
            <form className='forms'>
                <div>
                <input type='text' placeholder='Email address or phone number' aria-label='Email address or phone number' value={email} onChange={onChangeEmail}/>
                </div>
                <div>
                <input type='text' placeholder='Password' aria-label='Email address or phone number'value={password} onChange={onChangePasswrd}/>
                </div>
                <div>
                <button className='log'onSubmit={onSubmit}>Log in</button>
                </div>
                <p className='password'>Forgotten password?</p>
                <div>
                    <button type='button' className='created' onClick={toggleModal}>Create new account</button>
                </div>
            </form>
            <div className='page'>
            <h3>Create a Page</h3>
            <div>
            <p className='brand'>for a celebrity, brand or business.</p>
            </div>
            </div>
        </div>

    </div>
    <Signup isOpen={openModal} toggle={toggleModal} />

    </>
  )
}
