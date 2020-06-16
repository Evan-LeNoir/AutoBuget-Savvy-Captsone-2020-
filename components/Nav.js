export default navLink => `
<div class="test area this will need to be removed once has become an SPA and data can be handled.">
<p>For test purposes only right now</p>
<ul>  ${navLink
  .map(link => `<li><a href="/${link}" data-navigo>${link}</a></li>`)
  .join(" ")}</ul>
</div>`;
