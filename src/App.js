import {useState} from 'react'
import ButtonTypes from './Components/ButtonTypes'
import InputDetails from './Components/InputDetails';



function App() {
  const [buttons, setButtons] = useState(['text','email','password','date','time','checkbox','dropdown','radio']);
  const [inputFieldDetails, setInputFieldDetails] = useState({})
  const [type , setType] = useState('')
  const [inputFieldDetailsView , setInputFieldDetailsView] = useState(false)

  const buttonOnClick = (type) => {
    switch (type) {
      case 'text':
        setType(type)
        setInputFieldDetailsView(true)
        setInputFieldDetails({
          label : '',
          placeholder : ''
        })
        break;
      case 'password':
        setType(type)
        setInputFieldDetailsView(true)
        setInputFieldDetails({
          label : '',
          placeholder : ''
        })
        break;
      case 'email':
        setType(type)
        setInputFieldDetailsView(true)
        setInputFieldDetails({
          label : '',
          placeholder : ''
        })
        break;
      case 'date':
        setType(type)
        setInputFieldDetailsView(true)
        setInputFieldDetails({
          label : ''
        })
        break;
      case 'time':
        setType(type)
        setInputFieldDetailsView(true)
        setInputFieldDetails({
          label : '',
        })
        break;
      case 'checkbox':
        setType(type)
        setInputFieldDetailsView(true)
        setInputFieldDetails({
          label : '',
        })
        break;
      case 'dropdown':
        setType(type)
        setInputFieldDetailsView(true)
        setInputFieldDetails({
          label : '',
          options : []
        })
        break;
      case 'radio':
        setType(type)
        setInputFieldDetailsView(true)
        setInputFieldDetails({
          label : '',
          group : '',
          options:[]
        })
        break;
    
      default:
      break;
    }
  }

  const InputDetailsSubmit = () => {
    setInputFieldDetailsView(false)
  }
  return (
    <div className="container">
      <ButtonTypes buttons = {buttons} buttonOnClick={buttonOnClick}/>
      <div className="row">
        <div className="col-md-8"></div>
        <div className="col-md-4">
          {inputFieldDetailsView && <InputDetails inputFieldDetails={inputFieldDetails} InputDetailsSubmit={InputDetailsSubmit}/>}
        </div>
      </div>
    </div>
  );
}

export default App;
