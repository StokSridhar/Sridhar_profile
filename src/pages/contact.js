const contact = () => {
  return (
    <>
    <div className="container">
    <h1>Get in Touch With Us</h1>
        <div class="mb-3">
            <label for="name" class="form-label">Name:</label>
            <input class="form-control" id="name"/>
        </div>
        <div class="mb-3">
            <label for="mobilenumber" class="form-label">Mobile:</label>
            <input class="form-control" id="mobilenumber"/>
        </div>
        <div class="mb-3">
            <label for="emailid" class="form-label">Email:</label>
            <input class="form-control" id="emailid"/>
        </div>
        <div class="mb-3">
            <label for="lookingfor" class="form-label">Looking For:</label>
            <textarea class="form-control" id="lookingfor" rows="3"></textarea>
        </div>
        <div class="mb-3">
        <button type="submit" class="btn btn-primary mb-3">Submit</button>
        </div>
    </div>
    </>
  )
}

export default contact