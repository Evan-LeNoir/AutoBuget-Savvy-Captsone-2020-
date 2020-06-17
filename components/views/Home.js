export default () => `
<div id="log">
<h3>Please sign in</h3>
<form class="sign-in">
  <div>
    <label for="fname">E-Mail:</label><br>
    <input type="text" id="fname" name="fname" placeholder="Example@gmail.com">
  </div>
  <div>
    <label for="password">Password:</label><br>
    <input type="password" id="password" name="password" placeholder="Your password here">
  </div>
  <br>
  <div>
    <input type="checkbox" id="remember">
    <label for="remember">Keep me signed in</label><br>
    <input type="submit" value="Log-on">
  </div>
</form>
</div>`;
