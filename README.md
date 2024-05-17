# SaveAPlate: Reducing Food Waste in Dining Halls

## Inspiration
At the University of Maryland, the noticeable amount of food waste in our dining halls was staggering. Trays of perfectly good food being discarded daily inspired us to ask a pivotal question: How can we make a meaningful difference in reducing this waste?

## What SaveAPlate Does
SaveAPlate leverages predictive modeling to analyze past consumption patterns, seasonal trends, and real-time feedback in dining halls. By optimizing meal preparation, our application aims to reduce excess food production and subsequently minimize waste.

## Features
- **Predictive Analytics**: Uses machine learning to forecast food needs based on historical data and real-time inputs.
- **User-Friendly Interface**: Provides a simple and intuitive web interface for dining hall staff to enter and visualize data.
- **Real-Time Feedback Incorporation**: Adjusts predictions based on live feedback from dining facilities.
- **Seasonal Trend Analysis**: Incorporates seasonal variations in food consumption to enhance prediction accuracy.

## Technology Stack
- **Frontend**: React
- **Backend**: Node.js, Express
- **Database**: MySQL
- **Machine Learning**: Scikit-Learn for predictive modeling
- **Web Scraping**: BeautifulSoup for collecting menu data

## Installation

### Prerequisites
- Node.js
- npm or yarn
- MySQL

### Setup Instructions
1. Clone the repository:
git clone https://github.com/yourusername/SaveAPlate.git
cd SaveAPlate
2. Install dependencies:
npm install
3. Set up the database:
- Create a MySQL database named `WasteTrackerDB`.
- Import the provided SQL schema located in `database/schema.sql`.
4. Configure environment variables:
- Rename `.env.example` to `.env`.
- Update the database credentials and other settings in the `.env` file. 
5. Start the server:
npm start
6. Access the application:
- Open `http://localhost:3000` in your browser.

## Usage
- **Data Entry**: Dining hall staff can enter daily food production and waste figures.
- **View Predictions**: Staff can view predictions for upcoming meals to adjust food preparation accordingly.

## Contributing
Contributions are welcome! Feel free to fork the repository and submit pull requests.

## License
Distributed under the MIT License. See `LICENSE` for more information.

