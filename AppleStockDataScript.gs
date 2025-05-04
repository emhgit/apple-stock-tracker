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

function sendEmail(){
    //get current sheet
    const sheet = SpreadsheetApp.getActive().getSheetByName("Sheet1");

    //get latest low price
    const lastRow = sheet.getLastRow();
    const low = sheet.getRange(lastRow, 4).getValue();

    //check if price is below 200
    if(low < 200){
        //if so send email to me
        const myEmail = "myemail@gmail.com";
        const subject = "Alert: Apple Price Below $200";

        const timeStamp = sheet.getRange(lastRow, 1).getValue();
        const open = sheet.getRange(lastRow, 2).getValue();
        const high = sheet.getRange(lastRow, 3).getValue();
        const close = sheet.getRange(lastRow, 5).getValue();
        const volume = sheet.getRange(lastRow, 5).getValue();
       
        const body =
        `Time stamp: ${timeStamp}
        Open: ${open}
        High: ${high}
        Low: ${low}
        Close: ${close}
        Volume: ${volume}`;
       
        GmailApp.sendEmail(myEmail, subject, body);
    }
}
