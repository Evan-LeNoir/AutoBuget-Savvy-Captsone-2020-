export default () => `  <h1>Patrol Powered Cars</h1>
<h3>Enter your car's information</h3>
<div id="petrol">
  <form id="register" method="POST" action="">
    <div>
      <label for="vehicleType">Vehicle Type:</label>
      <input type="radio" name="vehicleType" id="vehicleType" value="Car/Truck" checked>Car/Truck
      <input type="radio" name="vehicleType" id="vehicleType" value="Motorcycle">Motorcycle
      <input type="radio" name="vehicleType" id="vehicleType" value="Diesel">Diesel
    </div>
    <div>
      <label for="carMaker">Make:</label>
      <input type="text" name="maker" id="carMaker" placeholder="Audi">
    </div>
    <div>
      <label for="makerModel">Model:</label>
      <input type="text" name="model" id="makerModel" placeholder="A8">
    </div>
    <div>
      <label for="modelTrim">Trim:</label>
      <input type="text" name="trim" id="modelTrim" placeholder="Sport, Prestige, S-Line etc">
    </div>
    <div>
      <label for="engineCylinders">Cylinders:</label>
      <select id="cylinders" name="Cylinders">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4" selected>4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="8">8</option>
        <option value="10">10</option>
        <option value="Other">Other</option>
      </select>
    </div>
    <div>
      <label for="engine">Engine Size:</label>
      <input type="number" name="engineSize" id="engine" placeholder="5.2">
      <label>liters</label>
    </div>
    <div>
      <label for="mileage">Mileage:</label>
      <input type="number" name="currentMileage" id="mileage" placeholder="Enter current mileage">
      <label>Miles only</label>
    </div>
  </form>
  <br>
  <h3>Now upload a photo of your vehicle!</h3>
  <form id="registerCarPic" method="POST" action="">
    <div>
      <label for="photoURL">Photo URL:</label>
      <!--This will be changed to database once I convert to SPA-->
      <input type="text" name="Photo URL" id="username" placeholder="Photo's URL">
    </div>
    <div>
      <label for="carName">What's your vehicle's name?</label>
      <input type="Car Name" name="carName" id="carName" placeholder="ie; Betsy, Big Bertha, Ol'Faithful, etc etc">
    </div>
    <input type="submit" name="addCar" value="Add This Vehicle">
  </form>
</div>`;
