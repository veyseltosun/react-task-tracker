import React, { useState } from 'react'

function AddTask() {
    const [text, setText] = useState("");
    const [day, setDay] = useState("");
    const handleTextChange = (e) =>{
        setText(e.target.value)

    }
    const handleDayChange = (e) => setDay(e.target.value)
  return (
    <form className="add-form" >
      <div className="form-control">
        <label htmlFor="task">Task</label>
        <input
          id="task"
          name="text"
          type="text"
          placeholder="Enter a task name"
          // required
          value={text}
          onChange={handleTextChange}
        />
      </div>
      <div className="form-control">
        <label htmlFor="day">Day & Time</label>
        <input
          id="day"
          name="day"
          type="text"
          placeholder="Enter a day and time"
          // required
          value={day}
          onChange={handleDayChange}
        />
      </div>
      <input type="submit" value="Save Task" className="btn btn-block" />
    </form>
  )
}

export default AddTask