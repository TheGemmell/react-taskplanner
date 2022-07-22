
export default function Task({data, remove, index}) {
  // console.log(data)

  console.log(index)

  return (
    <div>
      <h1>{data.name}</h1>
      {index}
      <h2>{data.description}</h2>
      <h3>{data.member}</h3>
      <h4>{data.date}</h4>
      <button onClick={() => {
        remove(index)
      }}>Delete Me</button>
    </div>
  )
}