function AddCard() {
    return (
        <div class="sign-up-container">
    <h1>Sign Up</h1>
    <form>
      <div class="form-group">
        <input type="text" id="username" name="username" placeholder="Enter your username" required/>
      </div>
      <div>
        <input type="email" id="email" name="email" placeholder="Enter your email" required/>
      </div>
      <button type="submit" class="submit-btn">Sign Up</button>
    </form>
  </div>
    )
}