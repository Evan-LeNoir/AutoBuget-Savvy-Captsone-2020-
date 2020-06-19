export default () => `
<h1>User Dashboard</h1>
<!--needs to reflect the user who's currently logged in-->
<hr />
<div>
  <label for="myVehicles">Change Vehicle:</label>
  <!--pre-filled options for demonstration purposes only-->
  <select id="myVehicles" name="myVehicles">
    <option>2020 Audi A8 L</option>
    <option>2020 Indian Scout Twenty</option>
    <option>2012 Porsche Cayenne Diesel</option>
  </select>
</div>
<form>
  <input type="submit" id="addFuel" name="fuelUp" value="Fuel UP!" />
  <input type="submit" id="maintain" name="Maintenance" value="Log Maintenance" />
</form>
<h2 id="vehicle">Your -<i>insert selected vehicle here</i>-'s statics</h2>
<section id="statistics">
  <div id="fuelStatistics">
    <h3>Last Fuel-Up:</h3>
    <p>Number value here</p>
  </div>
  <div id="mileageStatistics">
    <h3>Last recorded mileage:</h3>
    <p>Number value here</p>
  </div>
</section>
<div class="mpgAverage">
  <h3>Average MPG</h3>
  <p>Number value here</p>
</div>`;
