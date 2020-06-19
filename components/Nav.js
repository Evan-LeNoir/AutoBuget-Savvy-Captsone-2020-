export default navLink => `
<div class="navTest">
<p>For test purposes only right now. Will be removed once a public version is ready.</p>
<ul>
  ${navLink
    .map(link => `<li><a href="/${link}" data-navigo>${link}</a></li>`)
    .join(" ")}
</ul>
</div>`;
