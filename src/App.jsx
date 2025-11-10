function App() {

  const articles = [
    {
      id: 1,
      title: "Introduzione a React"
    },
    {
      id: 2,
      title: "Come funziona il Virtual DOM"
    },
    {
      id: 3,
      title: "Guida a useState e useEffect"
    },
    {
      id: 4,
      title: "Ottimizzare le performance in React"
    },
    {
      id: 5,
      title: "React Router: creare una SPA completa"
    }
  ];


  return (
    <>
      <div className="container">
        <div className="col-6 mx-auto">
          <h1 className="display-6">Ultimi articoli su React</h1>
          <div className="card">
            <ul class="list-group">
              {
                articles.map(item =>
                  <li class="list-group-item d-flex justify-content-between align-items-center">
                    {item.title}
                    <button className="btn btn-success">Read</button>
                  </li>
                )

              }

            </ul>

          </div>
        </div>
      </div>
    </>
  )
}

export default App
