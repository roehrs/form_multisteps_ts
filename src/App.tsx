import {GrFormNext, GrFormPrevious} from 'react-icons/gr';
import UserForm from './components/UserForm';
import ReviewForm from './components/ReviewForm';
import Thanks from './components/Thanks';
import Steps from './components/Steps';

import  {useForm} from './hooks/useForm'; 
import {useState} from "react";
import {FiSend} from 'react-icons/fi';
import './App.css'

type FormFields ={
  name: string;
  email: string;
  review: string;
  comment: string;
}

const formTemplate: FormFields = {
  name: "",
  email: "",
  review: "",
  comment: "",
};

function App() {
  const [data, setData] = useState(formTemplate);

  const updateFieldHandle = (key: string, value:string) => {
    setData((prev) => {
      return {...prev, [key]: value}
    })
  }

  const formComponents = [<UserForm data={data} updateFieldHandle={updateFieldHandle}/>, <ReviewForm data={data} updateFieldHandle={updateFieldHandle}/>, <Thanks data={data}/>,]
  const {currentStep, currentComponent, changeStep, isLastStep, isFirstStep} = useForm(formComponents);

  return (
      <div className="app">
        <div className="header">
          <h2>Deixe a sua avaliação</h2>
          <p>Ficamos felizes com a sua compra, utilize o formulário abaixo para avaliar o produto.</p>
        </div>
        <div className="form-container">
          <Steps currentStep={currentStep}/>
          <form onSubmit={(e) => changeStep(currentStep + 1, e)}>
            <div className="inputs-container">
              {currentComponent}
              <div className="actions">
              {!isFirstStep && (
              <button type="button" onClick={() => changeStep(currentStep - 1)}>
              <GrFormPrevious />
              <span>Voltar</span>
            </button>
            )}
                {!isLastStep ? (
              <button type="submit" >
              <span>Avançar</span>
              <GrFormNext />
            </button>
            ) : (
              <button type="button" >
              <span>enviar</span>
              <FiSend />
            </button>
            )}
              </div>
            </div>
          </form>
        </div>
      </div>
  )
}

export default App
