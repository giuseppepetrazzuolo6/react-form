import { useState } from "react";
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
  const [article, setArticle] = useState(articles)

  return (
    <>
      <div className="container mt-3">
        <div className="col-6 mx-auto">
          <h1 className="display-6 mb-3">Ultimi articoli su React</h1>
          <div className="card p-4">
            <form>
              <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="new article" aria-label="new article" aria-describedby="add-article" />
                <button className="btn btn-outline-secondary" type="submit" id="add-article">Add</button>
              </div>
            </form>
            <ul className="list-group">
              {
                article.map(item =>
                  <li className="list-group-item d-flex justify-content-between align-items-center" key={item.id}>
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
