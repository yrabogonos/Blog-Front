import { FC, useEffect, useState, useRef } from "react";
import './mw.scss';
import sign from '../../assets/img/sign.jpg';
import axios from "axios";
import success from '../../assets/icons/good-status.png';
import failure from '../../assets/icons/bad-status.png';


interface Registration {
    email?: string,
    password?: string,
    fullname?: string,


}

type ModalWindow = {
    modalActive: boolean,
    setModalActive: (modalActive:boolean) => void
}

const ModalWindow:FC<ModalWindow> = (
    {
        modalActive,
        setModalActive
    }
) =>{

    const subRef = useRef<HTMLButtonElement | null>(null);

    const fullnameRef = useRef<any>(null);
    const emailRef = useRef<any>(null);
    const passwordRef = useRef<any>(null);
    const passwordConfirmRef = useRef<any>(null);


    // const [canScroll, setCanScroll] = useState(false);
    const [userData, setUserData] = useState<Registration>({});
    const [validity, SetValidity] = useState<boolean>(false); 
    const [result, setResult] = useState<boolean>(false);
    const [status, setStatus] = useState<boolean>(false);

    const SubmitHandler = async () => {
        if (validity) {
          try {
            const response = await axios.post('http://localhost:4444/auth/register', JSON.stringify(userData), {
              headers: {
                'Content-Type': 'application/json',
              },
            })
            .then(res =>{
                alert(res.status)
                if(res.status == 200){
                    setStatus(true);
                }
                else{
                    setStatus(false);
                }
            });
            console.log('Success');

          } catch (error) {
            alert('!error!')
            console.error('Error', error);
            setStatus(false);
            
          }
        }
        
        fullnameRef.current.value = '';
        emailRef.current.value = '';
        passwordRef.current.value = '';
        passwordConfirmRef.current.value = '';

        // setModalActive(false);
        setUserData({});
        setResult(true);
      };
    


    useEffect(()=>{
     

        if(userData.fullname &&  userData.email &&  userData.email!=''  && userData.password ){
            subRef.current?.classList.add('active');
            SetValidity(true);
        }
        else{
            subRef.current?.classList.remove('active');
        }

        modalActive? document.body.style.overflowY = 'hidden': document.body.style.overflowY = 'scroll';
    });
    if(modalActive){
        return(
            <section className="modal-window" onClick={()=>{
                setModalActive(false);
                // setCanScroll(true);
                fullnameRef.current.value = '';
                emailRef.current.value = '';
                passwordRef.current.value = '';
                passwordConfirmRef.current.value = '';
        
            }}>
              <div className="modal-body d-flex flex-column gap-2" onClick={(e:React.MouseEvent)=>{
                e.stopPropagation();
              }}>
                    <div className="modal-logo">
                        <img className="sign" src={sign} alt="logo" />
                    </div>
                    <div className="modal-inputs d-flex flex-column">
                        Full Name
                        <InputWithStatus reference={fullnameRef} userData={userData} setUserData={setUserData} type='FullName' />
                    </div>
                    <div className="modal-inputs d-flex flex-column">
                        Email
                        <InputWithStatus reference={emailRef} userData={userData} setUserData={setUserData} type='Email' />
                    </div>
                    <div className="modal-inputs d-flex flex-column">
                        Password
                        <ValidatedPassword reference={passwordRef} reference2={passwordConfirmRef} userData={userData} setUserData={setUserData} type='password' />
                    </div>
                    <div className="submit-wrap d-flex justify-content-between">
                        <button ref={subRef} className="submit-btn" onClick={SubmitHandler}>Submit</button>
                        <button className="cancel-btn" onClick={()=>{
                              setModalActive(false);
                            //   setCanScroll(true);
                              fullnameRef.current.value = '';
                              emailRef.current.value = '';
                              passwordRef.current.value = '';
                              passwordConfirmRef.current.value = '';
                        }}>Close</button>
                    </div>
                    <div className={result===true?'modal-res':'modal-res hidden'}>
                        {
                        status == true
                        ?<div className="res-body">
                            <div className="result good-res d-flex">
                                <div className="res-img-wrap">
                                    <img src={success} alt="status-good" />
                                </div>
                            
                            </div>
                            <p className="res-p">Congratulations! You`ve successfully signed up!</p>
                            <button className="close-btn-res" onClick={()=>{
                                 setModalActive(false);
                                 setResult(false);
                            }}>Continue</button>
                        </div>
                        :<div className="res-body">
                        <div className="result bad-res d-flex">
                            <div className="res-img-wrap">
                                <img src={failure} alt="status-bad" />
                            </div>
                        
                        </div>
                        <p className="res-p">Something went wrong! You`ve already registered! Please, <b>log in</b> to continue.</p>
                        <button className="close-btn-res" onClick={()=>{
                             setModalActive(false);
                             setResult(false);
                        }}>Close</button>
                    </div>
                        
                        }
                </div>
              </div>
             
            </section>
          );
    }
    else{
        return null;
    }
};
type InputWithStatus = {
    type: string,
    userData: Registration,
    setUserData: (userData:Registration) => void,
    reference?: any
}
const validateEmail = (email:string) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
};

const InputWithStatus:FC<InputWithStatus> = (
    {
        type,
        userData,
        setUserData, 
        reference
    }
) =>{
    const statusRef = useRef<HTMLDivElement | null>(null);

    const changeHandler = (e:React.ChangeEvent<HTMLInputElement>) =>{
        const input = e.currentTarget;
        switch(type)
        {
            case 'FullName':
                if(input.value.length <= 5 && input.value.length != 0){ 
                    statusRef.current?.classList.remove('correct');
                    statusRef.current?.classList.add('wrong');   
                    const updatedObj = { ...userData, fullname:''}; 
                    setUserData(updatedObj);
                   
                }
                else if(input.value.length === 0){
                    statusRef.current?.classList.remove('wrong');
                    statusRef.current?.classList.remove('correct');  
                }
                else{
            
                    statusRef.current?.classList.remove('wrong');
                    statusRef.current?.classList.add('correct'); 
                    const updatedObj = { ...userData, fullname:input.value.trim()}; 
                    setUserData(updatedObj);
                }
                break;
            case 'Email':
                if(validateEmail(input.value)!= null){ 
                    statusRef.current?.classList.remove('wrong');
                    statusRef.current?.classList.add('correct'); 
                    const updatedObj = { ...userData, email:input.value.trim()}; 
                    setUserData(updatedObj);
                }
                else if(input.value.length === 0){
                    statusRef.current?.classList.remove('wrong');
                    statusRef.current?.classList.remove('correct');       
                }
                else{
            
                    statusRef.current?.classList.remove('correct');
                    statusRef.current?.classList.add('wrong');   
                    const updatedObj = { ...userData, email:''}; 
                    setUserData(updatedObj);
                }
                break;

        }
    }
   
    
    return(
      <div className="modal-input d-flex gap-2">
            <input ref={reference} className="input-elem" type="text" onChange={changeHandler} />
            <div ref={statusRef} className="status-bar"></div>
      </div>
    );
};
const validPassword = (password:string)=> password.length < 5? false: true;

const ValidatedPassword:FC<InputWithStatus & { reference2:any } > = (
    {
        setUserData,
        userData,
        reference,
        reference2
    }
) =>{
    const statusRef = useRef<HTMLDivElement | null>(null);
    const statusRefRep =  useRef<HTMLDivElement | null>(null);
  

    const [typedPassword, setTypedPassword] = useState<string>('');
    const [confirmedPassword, setConfirmedPassword] = useState<string>('');
  

    const PasswordEntry = (e:React.ChangeEvent<HTMLInputElement>)=>{
        setTypedPassword(e.target.value);
    }
    const PasswordConfirmed = (e:React.ChangeEvent<HTMLInputElement>)=>{
        setConfirmedPassword(e.target.value);
    }

    useEffect(()=>{
        if(validPassword(typedPassword) && typedPassword != ''){
            statusRef.current?.classList.add('correct');
            statusRef.current?.classList.remove('wrong');
        }
        else if(typedPassword === ''){
            statusRef.current?.classList.remove('wrong');
            statusRef.current?.classList.remove('correct');
        }
        else{
            statusRef.current?.classList.remove('correct');
            statusRef.current?.classList.add('wrong');
        }
    
        if(validPassword(confirmedPassword) && typedPassword === confirmedPassword && confirmedPassword!= ''){
            statusRefRep.current?.classList.add('correct');
            statusRefRep.current?.classList.remove('wrong');
            const updatedObj = { ...userData, password:confirmedPassword.trim() }; 
            setUserData(updatedObj);
      
        }
        else if(confirmedPassword === ''){
            statusRefRep.current?.classList.remove('wrong');
            statusRefRep.current?.classList.remove('correct');
        }
        else{
            statusRefRep.current?.classList.remove('correct');
            statusRefRep.current?.classList.add('wrong');
         
            const updatedObj = { ...userData, password:''}; 
            setUserData(updatedObj);
        }
        
    },[typedPassword, confirmedPassword])
   
    return(
        <div className="modal-password d-flex">
            <div className="modal-passwords d-flex flex-column gap-2">
                <div className="modal-input d-flex gap-2">
                    <input ref={reference} className="input-elem" type="password" onChange={PasswordEntry}/>
                    <div ref={statusRef} className="status-bar"></div>
                </div>
                <div className="modal-rep-input d-flex flex-column">
                    Repeat
                    <div className="d-flex gap-2">
                        <input ref={reference2} className="input-elem" type="password" onChange={PasswordConfirmed} />
                        <div ref={statusRefRep} className="status-bar"></div>
                    </div>
                </div>
                
            </div>
           
        </div>
    );
}


export default ModalWindow;

