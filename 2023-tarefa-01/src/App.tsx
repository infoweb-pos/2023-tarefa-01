import { ChangeEvent, FormEvent, useState } from 'react'
import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
type InputProps = {
  type: string,
  placeholder: string,
  className: string,
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
}
const Input = ({ onChange, type, placeholder, className }: InputProps) => {
  return (
    <input
      type={type}
      className={className}
      placeholder={placeholder}
      onChange={onChange}
    />
  )
}

type FilterButtonProps = {
  role: string,
  className: string,
  text: string,
  onClick: () => void
}
const FilterButton = ({ role, className, text, onClick }: FilterButtonProps) => {

  return (
    <li
      role={role}
      className={className}
    >
      <a href="#" onClick={onClick} className="nav-link" >{text}</a>
    </li>
  )
}

type CardsProps = {
  texto: string,
  handleRemoveItem: (event: FormEvent) => void,
  expected: number
}

const CardToDo = ({ texto, handleRemoveItem, expected }: CardsProps) => {
  const [isChecked, setIsChecked] = useState(false);

  function vaiMostrar(){
    if(expected===0){
      return true
    }
    if(expected===1){
      return isChecked
    }
    if(expected===2){
      return !isChecked
    }
  }

  return (
    <>
      {(vaiMostrar()) ? (
        <div className={isChecked ? "todo-item complete" : "todo-item"}>
          <div className="checker">
            <input type="checkbox" checked={isChecked} onClick={() => setIsChecked(!isChecked)} />
          </div>
          <span> {texto} </span>
          <a className="float-right remove-todo-item" 
              onClick={handleRemoveItem}>
              <FontAwesomeIcon icon={faTrash} /></a>
        </div>)
        :
        null
      }
    </>
  )
}

function App() {
  const [task, setTask] = useState('')
  const [item, setItem] = useState<string[]>([]);
  const [expected, setExpected] = useState(0)

  console.log(item)

  function handAddItem(event: FormEvent) {
    event.preventDefault();
    setItem((oldItem) => [...oldItem, task])

  }
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="card card-white">
              <div className="card-body"></div>
              <form onSubmit={handAddItem}>
                <Input
                  type='text'
                  placeholder='Add Task'
                  className='form-control'
                  onChange={(event) =>{ 
                    setTask(event.target.value)
                  }
                  }
                />
              </form>
              <ul className="nav nav-pills todo-nav">
                <FilterButton
                  role='presentation'
                  className='nav-item all-task active'
                  text='All'
                  onClick= {() => setExpected(0)}
                />
                <FilterButton
                  role='presentation'
                  className='nav-item completed-task'
                  text='Completed'
                  onClick= {() => setExpected(1)}
                />
                <FilterButton
                  role='presentation'
                  className='nav-item active-task'
                  text='Active'
                  onClick= {() => setExpected(2)}
                />
              </ul>
              <div className="todo-list">
                {item.map((item) => (
                  <CardToDo
                    texto={item}
                    handleRemoveItem={(event) => {
                      event.preventDefault()
                      setItem((oldItem) => oldItem.filter((e) => e !== item))
                    }}
                    expected={expected}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
