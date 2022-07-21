import { useState } from "react"

export default function TaskForm({addTask}) {
  const [ formData, setFormData ] = useState({
    name: "Task Name",
    desc: "Task Description",
    member: "Who needs to do it",
    date: "Today"
  })

  function handleSubmit(event) {
    addTask(formData)
  }

  function handleFormChange(event) {
    const propChanging = event.target.id
    const valueToChange = event.target.value

    setFormData({
      ...formData,
      [propChanging]: valueToChange,
    })
  }

  return (
    <div>
      <label>Name</label>
      <input id="name" value={formData.name} onChange={handleFormChange} type="text"/>
      <br />

      <label>Description</label>
      <input id="desc" value={formData.desc} onChange={handleFormChange} type="text"/>
      <br />

      <label>Assigned To:</label>
      <input id="member" value={formData.member} onChange={handleFormChange} type="text"/>
      <br />

      <label>Date:</label>
      <input id="date" value={formData.date} onChange={handleFormChange} type="text" />
      <br />
      <button onClick={handleSubmit}>
        Create
      </button>
    </div>
  )
}