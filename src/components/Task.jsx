
export default function Task({data}) {
  // console.log(data)
  return (
    <div>
      <h1>{data.name}</h1>
      <h2>{data.description}</h2>
      <h3>{data.member}</h3>
      <h4>{data.date}</h4>
    </div>
  )
}