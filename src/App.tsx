import './App.css'



  const AddTask = () => {
    return (
      <>
        <form action="javascript:void(0);">
          <input
            type="text"
            className="form-control add-task"
            placeholder="Criar Task..."
          />
        </form>
      </>
    )
  }

  const Items = () => {
      let list = [
        "All",
        "Active",
        "Completed"
      ];
    return (
      <>
        {list.map((nome, i) => 
        <li role="presentation" className="nav-item active-task">
          <a href='#' className='nav-link'>{nome}</a>
        </li>)}
      </>
    )
  }

  const Todolist = () => {
    let list = [
      "Create theme",
      "Work on Wordpress",
      "Organize office main department",
      'Error solve in HTML template'
    ];
    return (
      <div className='todo-list'>
        {list.map((nome, i) => 
        <div className='todo-item'>
          <div className='checker'>
            <span><input type='checkbox'/></span>
          </div>

          <span>{nome}</span>
          
          <a href="javascript:void(0);" className="float-right remove-todo-item">
            <i className="icon-close"></i>
          </a>
        </div>)}
      </div>
    )
  }

  const App = () => {
    return (
        <div className="container">
          <div className="row">
              <div className="col-md-12">
              <div className="card card-white">
                  <div className="card-body">
                    <AddTask/>
                    <ul className="nav nav-pills todo-nav">
                      <Items/>
                    </ul>
                    <Todolist/>
              </div>
            </div>
          </div>
        </div>
      </div>

      
    )
  }

export default App