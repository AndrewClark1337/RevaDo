import React from 'react'

function BookSubmissionComponent() {
  const [title, setTitle] = React.useState("");
  const [author, setAuthor] = React.useState("");
  const [genre, setGenre] = React.useState("");
  const [publishedYear, setPublishedYear] = React.useState(0);
  const [pages, setPages] = React.useState(0);

  async function createBook(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }
  return (
    <div>
      <form onSubmit={createBook}>
        <label> Title: 
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        /></label>
        <label> Author: 

        <input
          type="text"
          placeholder="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        </label>
        <label> Genre:
        <input
          type="text"
          placeholder="Genre"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
        />
        </label>
        <label> Published Year:
        <input
          type="number"
          placeholder="Published Year"
          value={publishedYear}
          onChange={(e) => setPublishedYear(parseInt(e.target.value))}
        />
        </label>
        <label> Pages:
        <input
          type="number"
          placeholder="Pages"
          value={pages}
          onChange={(e) => setPages(parseInt(e.target.value))}
        />
        </label>
        <button type="submit">Submit Book</button>
      </form>
    </div>
  )
}

export default BookSubmissionComponent
