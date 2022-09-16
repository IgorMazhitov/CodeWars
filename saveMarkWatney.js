function saveMark(c1,c2) {

    var c1_spl = c1.split(", ");
    var c1_lat = c1_spl[0].split("° ");
    var c1_long = c1_spl[1].split("° ");
    var c2_spl = c2.split(", ");
    var c2_lat = c2_spl[0].split("° ");
    var c2_long = c2_spl[1].split("° ");
    var marsRadius = 3390000;
    
    var c1_lat_rad = (c1_lat[1] == "N" ? Number(c1_lat[0]) * 0.0174533 : Number(c1_lat[0]) * -0.0174533);
    var c1_long_rad = (c1_long[1] == "E" ? Number(c1_long[0]) * 0.0174533 : Number(c1_long[0]) * -0.0174533);
    var c2_lat_rad = (c2_lat[1] == "N" ? Number(c2_lat[0]) * 0.0174533 : Number(c2_lat[0]) * -0.0174533);
    var c2_long_rad = (c2_long[1] == "E" ? Number(c2_long[0]) * 0.0174533 : Number(c2_long[0]) * -0.0174533);
    
    var deltaLat = c2_lat_rad - c1_lat_rad;
    var deltaLong = c2_long_rad - c1_long_rad;
    var hav_deltaLat = (1 - Math.cos(deltaLat)) / 2; //Math.pow((Math.sin(deltaLat / 2)), 2);
    var hav_deltaLong = (1 - Math.cos(deltaLong)) / 2; //Math.pow((Math.sin(deltaLong / 2)), 2);
    var h = hav_deltaLat + Math.cos(c1_lat_rad) * Math.cos(c2_lat_rad) * hav_deltaLong;
    var distance = 2 * marsRadius * Math.asin(Math.sqrt(h)) / 1000;
    distance = Math.floor(distance / 10) * 10;
    return "" + distance + "KM";
    
  }