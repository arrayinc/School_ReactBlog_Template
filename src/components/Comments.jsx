import React from 'react'

const Comments = () => {
    return (
        <div>
            <h1>Leave a comment:</h1>
            <form>
  <label>
    Name:
    <input type="text" name="name" />
  </label>
  <input type="submit" value="Submit" />
</form>
            
        </div>
    )
}

export default Comments
