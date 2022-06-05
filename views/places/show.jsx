const React = require('react')
const Def = require('../default')

function show (data) {
    let comments = (
        <h3 className="inactive">
            No Comments yet!
        </h3>
    )
    if (data.place.comments.length) {
        comments = data.place.comments.map(c => {
          return (
            <div className="border">
              <h2 className="rant">{c.rant ? 'Rant! ðŸ˜¡' : 'Rave! ðŸ˜»'}</h2>
              <h4>{c.content}</h4>
              <h3>
                <stong>- {c.author}</stong>
              </h3>
              <h4>Rating: {c.stars}</h4>
            </div>
          )
        })
      }
    return (
        <Def>
            <main>
                <h1>{ data.place.name }</h1>
                <div className="col-sm-6">
                    <img height="500px" src={data.place.pic} alt={data.place.name} />
                    <h3>
                        Located in {data.place.city}, {data.place.state}.
                    </h3>
                </div>
                <div className="col-sm-6">
                    <h2>
                        Description
                    </h2>
                    <h3>
                        {data.place.showEstablished()}
                    </h3>
                    <h4>
                        Serving {data.place.cuisines}
                    </h4>
                </div>
                <hr />
                <h2>Comments</h2>
                {comments}
                <hr />
                <h3>Add a Comment</h3>
                <form method="POST" action={`/places/${data.place._id}/comment`}>
                    <div className="form-group">
                        <label htmlFor="author">Comment Author</label>
                        <input className="form-control" id="author" name="author" type="text" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="content">Comment</label>
                        <input className="form-control" id="content" name="content" type="textarea"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="rant">Rant</label>
                        <input className="form-control" id="rant" name="rant" type="checkbox" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="rating">Star Rating</label>
                        <input className="form-control" id="rating" name="rating" type="number" step="0.5"  />
                    </div>
                </form>
                <input className="btn btn-primary" type="submit" value="Submit Comment" />
                <hr />
                <a href={`/places/${data.id}/edit`} className="btn btn-warning"> 
                    Edit
                </a>
                <form method="POST" action={`/places/${data.id}?_method=DELETE`}>
                    <button type="submit" className="btn btn-danger">
                        Delete
                    </button>
                </form>

            </main>
        </Def>
    )
}

module.exports = show