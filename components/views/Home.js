export default () => `
<section id="log">
  <h3>Please sign in</h3>
    <form class="sign-in">
      <div id="col">
        <label for="fname">E-Mail:</label>
        <input type="text" id="login" name="fname" placeholder="Example@gmail.com">
      </div>
<br>
      <div id="col">
        <label for="password">Password:</label>
        <input type="password" id="login" name="password" placeholder="Your password here">
      </div>
      <br>
      <div>
        <input type="checkbox" id="remember">
        <label for="remember">Keep me signed in</label><br>
        <input type="submit" value="Log-on">
      </div>
    </form>
</section>`;
