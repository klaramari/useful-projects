function NewCard() {
  return (
    <div className="card">
      <form>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            className="input"
            name="title"
            placeholder="Give the project a distinct title"
          ></input>
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <input
            type="textarea"
            className="input big"
            name="description"
            placeholder="Describe in detail what the project should do."
          ></input>
        </div>
        <div>
          <label htmlFor="author">Author:</label>
          <input
            type="email"
            className="input"
            name="author"
            placeholder="example@example.com"
          ></input>
        </div>
        <div className="difficultyStatusSelector">
          <div className="difficultySelector">
            <div>Easy</div>
            <div>Medium</div>
            <div>Hard</div>
          </div>
        </div>
        <input type="submit"></input>
      </form>

      {/*}
        <div className="custom-radio">
          <label>
            <input type="radio" value="easy" name="difficulty"></input>Easy
          </label>
          <label>
            <input type="radio" value="medium" name="difficulty"></input>Medium
          </label>
          <label>
            <input type="radio" value="hard" name="difficulty"></input>Hard
          </label>
        </div>
        <div className="radio">
          <label>
            <input type="radio" value="open" name="status"></input>Open
          </label>
          <label>
            <input type="radio" value="progress" name="status"></input>In
            Progress
          </label>
          <label>
            <input type="radio" value="closed" name="status"></input>Closed
          </label>
        </div>
        */}
    </div>
  );
}

export default NewCard;
