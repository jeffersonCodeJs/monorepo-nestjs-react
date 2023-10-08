import './App.css'

export default function App() {

  const handleFetch = async () => {
    const res = await fetch("/api")
    const data = await res.text()
    alert(`Response of the api (${data})`)
    console.log(`Response of the api (${data})`)
  }

  return (
    <div>
      <h1>Monorepo With Nest js and React Vite</h1>
      <button onClick={handleFetch}>Click me</button>
    </div>
  )
}


