# 📈 Apple Stock Tracker
This is a Google Apps Script automation that populates a Google Sheet with real-time Apple Inc. (AAPL) stock data from the AlphaVantage API. This tool is ideal for investors, analysts, or anyone interested in tracking Apple's stock performance directly within Google Sheets.

## 🚀 Features
Fetches real-time Apple stock data.

Automatically updates a designated Google Sheet.

No external dependencies required—runs entirely within Google Apps Script.

## 📋 Setup Instructions
0. Get your FREE api key from AlphaVantage
Create a Google Sheet:

### 1. Open Google Sheets and create a new spreadsheet.

### 2. Access the Script Editor:

  - Navigate to Extensions > Apps Script.

### 3. Add the Script:

  - Delete any existing code in the editor.

  - Copy and paste the contents of AppleStockDataScript.gs from this repository into the editor.

### 4. Save and Name the Project:

  - Click on the project name (default is "Untitled project") and rename it as desired.

  - Click the floppy disk icon or press Ctrl + S to save.

### 5. Run the Script:

  - Click the play ▶️ button to execute the script.

  - Authorize the script if prompted.

### 6. Set Up Automatic Updates (Optional):

  - In the Apps Script editor, go to Triggers (clock icon on the left).

  - Click on + Add Trigger.

  - Choose the function to run, select the deployment, and set the desired frequency (e.g., hourly).
GitHub

## 📝 Notes
Ensure that your Google Sheet has the appropriate headers or structure expected by the script.

The script uses Google's built-in services; no additional APIs or keys are required.
