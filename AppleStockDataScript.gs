function checkHours(){
  let currHour = new Date().getHours();
  Logger.log(currHour);
  if(currHour >= 9 && currHour < 16){
    fetchData();
  }
}

function fetchData() {
  //get active spreadsheet
  const sheet = SpreadsheetApp.getActive().getSheetByName("Sheet1")

  const url = "https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=AAPL&interval=1min&apikey=APIKEY";

  try{
      //make an api call to alpha vantage
      const stockData = UrlFetchApp.fetch(url).getContentText()

      //save json data in usable format
      const data = JSON.parse(stockData);
      const timeSeries = data["Time Series (1min)"];
      const lastestTimeStamp = Object.keys(timeSeries)[0];

      const open = timeSeries[lastestTimeStamp]["1. open"];
      const high = timeSeries[lastestTimeStamp]["2. high"];
      const low = timeSeries[lastestTimeStamp]["3. low"];
      const close = timeSeries[lastestTimeStamp]["4. close"];
      const volume = timeSeries[lastestTimeStamp]["5. volume"];
      const dataToAppend = [
        lastestTimeStamp,
        `$${parseFloat(open).toFixed(2)}`,
        `$${parseFloat(high).toFixed(2)}`,
        `$${parseFloat(low).toFixed(2)}`,
        `$${parseFloat(close).toFixed(2)}`,
        volume
      ];

      Logger.log(dataToAppend);

      //append row of data
      sheet.appendRow(dataToAppend);

      //get the last row (the one just added)
      const lastRow = sheet.getLastRow();
      //align all 6 cells in the new row to the left
      sheet.getRange(lastRow, 1, 1, 6).setHorizontalAlignment("left");
  } catch(error){
    Logger.log(error);
  }
}
