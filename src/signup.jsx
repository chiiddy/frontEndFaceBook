import React, {useState} from 'react'
import Close from './images/close.png'
import {HiQuestionMarkCircle} from 'react-icons/hi'
import Modal from 'react-modal'

export default function Signup({isOpen, toggle}) {
  const [firstName, setFirstName] = useState('')
  const [surname, setSurname] = useState('')
  const [email, setEmail] = useState('')
  const [gender, setGender] = useState('')
  const [password, setPassword] = useState('')

  const userName = (e) => {
    setFirstName(e.target.value)
  };
  const otherName =(e) => {
    setSurname(e.target.value)
  };
  const onChangeEmail = (e) => {
    setEmail(e.target.value)
  };
  const onChangeGender = (e) => {
    setGender(e.target.value)
  }
  const onChangePassword = (e) => {
    setPassword(e.target.value)
  }
  const onSubmit = (e) => {
    e.preventDefault()
  }

  
  return (
    <Modal
    style={{
      overlay: {
        position: "fixed",
        top: "0%",
        left: "0%",
        right: "0%",
        bottom: "0%",
        backgroundColor: "#00000078",
        zIndex: 100,
      },
    }}
    className="modal"
    isOpen={isOpen}
    shouldCloseOnOverlayclick={true}
    onRequestClose={toggle}
    ariaHideApp={false}
  >
    <div className='body'>
        <form className='main'>
        <div className='form'>
        <div className='signup'>
       <div><h1 className='signed'>Sign Up</h1></div>
      <div><p className='quickly'>it's quick and easy.</p></div>
      </div>
      <div><img className='closed' src={Close} alt='' onClick={toggle}/></div>
      </div>
      <hr></hr>
      <div className='firstLine'>
      <div className='name'>
        <input className='name' type='text' placeholder='First name' value={firstName} onChaange={userName}/>
      </div>
      <div>
      <input className='surnames' type='text' placeholder='Surname' value={surname} onChange={otherName}/>
      </div>
      </div>
      <div>
        <input className='mobile' type='text' placeholder='Mobile number or email address' value={email} onChange={onChangeEmail}/>
      </div>
      <div>
      <input className='passwrded' type='text' placeholder='New password' value={password} onChange={onChangePassword}/>
      </div>
      <div>
        <p className='dates'>Date of birth <HiQuestionMarkCircle className='question'/></p>
        <div className='totalSelect'>
      <div>
        <select className='firstSelect'>
        <option value="volvo">1</option>
  <option value="saab">2</option>
  <option value="opel">3</option>
  <option value="audi">4</option>
  <option value="volvo">5</option>
  <option value="saab">6</option>
  <option value="opel">7</option>
  <option value="audi">8</option>
  <option value="volvo">9</option>
  <option value="saab">10</option>
  <option value="opel">11</option>
  <option value="audi">12</option>
  <option value="volvo">13</option>
  <option value="saab">14</option>
  <option value="opel">15</option>
  <option value="audi">16</option>
  <option value="volvo">17</option>
  <option value="saab">18</option>
  <option value="opel">19</option>
  <option value="audi">20</option>
  <option value="volvo">21</option>
  <option value="saab">22</option>
  <option value="opel">23</option>
  <option value="audi">24</option>
  <option value="volvo">25</option>
  <option value="saab">26</option>
  <option value="opel">27</option>
  <option value="audi">28</option>
  <option value="volvo">29</option>
  <option value="saab">30</option>
  <option value="opel">31</option>
        </select>
      </div>
      <div>
        <select className='secondSelect'>
        <option value="saab">January</option>
  <option value="opel">February</option>
  <option value="audi">March</option>
  <option value="volvo">April</option>
  <option value="saab">May</option>
  <option value="opel">June</option>
  <option value="audi">July</option>
  <option value="volvo">August</option>
  <option value="saab">September</option>
  <option value="opel">October</option>
  <option value="audi">November</option>  
  <option value="audi">December</option> 
        </select>
      </div>
      <div>
        <select className='thirdSelect'>
        <option value="saab">2023</option>
  <option value="opel">2022</option>
  <option value="audi">2021</option>
  <option value="volvo">2020</option>
  <option value="saab">2019</option>
  <option value="opel">2018</option>
  <option value="audi">2017</option>
  <option value="volvo">2016</option>
  <option value="saab">2015</option>
  <option value="opel">2014</option>
  <option value="audi">2013</option> 
  <option value="saab">2012</option>
  <option value="opel">2011</option>
  <option value="audi">2010</option>
  <option value="volvo">2009</option>
  <option value="saab">2008</option>
  <option value="opel">2007</option>
  <option value="audi">2006</option>
  <option value="volvo">2005</option>
  <option value="saab">2004</option>
  <option value="opel">2003</option>
  <option value="audi">2002</option> 
  <option value="audi">2001</option> 
  <option value="audi">2000</option> 
  <option value="audi">1999</option> 
        </select>
      </div>
      </div>
      </div>
      <section value={gender} onClick={onChangeGender}>
        <div>
            <p className='gender'>Gender <HiQuestionMarkCircle className='questiomTwo'/></p>
            <div className='secondSelect'>
            <div className='female'>
                <label className='femaleWord'>Female</label>
                <input type='radio' placeholder='Female' />
            </div>
            <div className='male'>
                <label className='maleWord'>Male</label>
            <input type='radio' placeholder='Male' /> 
            </div>
            <div className='custom'>
                <label>Custom</label>
            <input type='radio' placeholder='Custom' />
            </div>
            </div>
        </div>
      </section>
      <div className='baseFooter'>
      <p className='footer'>People who use our service may have uploaded your contact information to<br></br>
       Facebook. Learn more.</p>
       </div>
<div>
<p className='baseFootter'>By clicking Sign Up, you agree to our Terms, Privacy Policy and Cookies Policy. <br></br>
You may receive SMS notifications from us and can opt out at any time.</p>
</div>
<div>
<button className='signupp' onSubmit={onSubmit}>Sign Up</button>
</div>
      </form>
    </div>
    </Modal>
  )
}
