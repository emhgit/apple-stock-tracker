# Apple Stock Tracker
This is a Google Apps Script automation that populates a Google Sheet with real-time Apple Inc. (AAPL) stock data from the AlphaVantage API. This tool is ideal for investors, analysts, or anyone interested in tracking Apple's stock performance directly within Google Sheets.

![Screenshot](https://github.com/user-attachments/assets/78d44b22-6a78-4d13-b004-c5c5a1c7e0e4)

## Features

- **Email automation** based on stock price 

- Fetches real-time Apple stock data.

- Automatically updates a designated Google Sheet.

- No external dependencies required—runs entirely within Google Apps Script.

## Setup Instructions

Prerequisites: API key (I used free AlphaVantage key)

### 1. Open Google Sheets and create a new spreadsheet.
  
  - Navigate to Extensions > Apps Script.

### 2. Add the Script:

  - Delete any existing code in the editor.

  - Copy and paste the contents of AppleStockDataScript.gs from this repository into the editor.

### 3. Save and Name the Project:

  - Click on the project name (default is "Untitled project") and rename it as desired.

  - Click the floppy disk icon or press Ctrl + S to save.

### 4. Run the Script:

  - Click the play button to execute the script.

  - Authorize the script if prompted.

### 5. Set Up Automatic Updates (Optional):

  - In the Apps Script editor, go to Triggers (clock icon on the left).

  - Click on + Add Trigger.

  - Choose the function to run, select the deployment, and set the desired frequency (e.g., hourly).

## Notes
Ensure that your Google Sheet has the appropriate headers or structure expected by the script.

The script uses Google's built-in services; no additional APIs or keys are required.

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.

