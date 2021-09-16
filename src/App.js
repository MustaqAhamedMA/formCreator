import {useState} from 'react'
import ButtonTypes from './Components/ButtonTypes'
import InputDetails from './Components/InputDetails';
import MainInput from './Components/MainInput';



function App() {
  const [buttons, setButtons] = useState(['text','email','password','date','time','checkbox','dropdown','radio']);
  const [inputFieldDetails, setInputFieldDetails] = useState({})
  const [inputFieldDetailsView , setInputFieldDetailsView] = useState(false)
  const [inputDetails , setInputDetails] = useState([])

  const buttonOnClick = (type) => {
    switch (type) {
      case 'text':
        setInputFieldDetailsView(true)
        setInputFieldDetails({
          type: 'text',
          label : '',
          placeholder : ''
        })
        break;
      case 'password':
        setInputFieldDetailsView(true)
        setInputFieldDetails({
          type:'password',
          label : '',
          placeholder : ''
        })
        break;
      case 'email':
        setInputFieldDetailsView(true)
        setInputFieldDetails({
          type : 'email',
          label : '',
          placeholder : ''
        })
        break;
      case 'date':
        setInputFieldDetailsView(true)
        setInputFieldDetails({
          type: 'date',
          label : ''
        })
        break;
      case 'time':
        setInputFieldDetailsView(true)
        setInputFieldDetails({
          type : 'time',
          label : '',
        })
        break;
      case 'checkbox':
        setInputFieldDetailsView(true)
        setInputFieldDetails({
          type : 'checkbox',
          label : '',
        })
        break;
      case 'dropdown':
        setInputFieldDetailsView(true)
        setInputFieldDetails({
          type : 'dropdown',
          label : '',
          options : []
        })
        break;
      case 'radio':
        setInputFieldDetailsView(true)
        setInputFieldDetails({
          type : 'radio',
          label : '',
          group : '',
          options:[]
        })
        break;
    
      default:
      break;
    }
  }

  const InputDetailsSubmit = (data) => {
    setInputFieldDetailsView(false)
    setInputDetails([...inputDetails,data])
  }
  return (
    <div className="container">
      <ButtonTypes buttons = {buttons} buttonOnClick={buttonOnClick}/>
      <div className="row">
        <div className="col-md-8">
          <MainInput inputDetails={inputDetails}/>
        </div>
        <div className="col-md-4">
          {inputFieldDetailsView && <InputDetails inputFieldDetails={inputFieldDetails} InputDetailsSubmit={InputDetailsSubmit}/>}
        </div>
      </div>
    </div>
  );
}

export default App;
