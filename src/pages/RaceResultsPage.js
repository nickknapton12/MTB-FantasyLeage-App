import '../styles/RaceResultsPageStyle.css'
import StandardCard from '../components/standardCard';
import photo1 from '../images/resultsPagePhoto1.jpg';
import photo2 from '../images/resultsPagePhoto2.jpg';
import photo3 from '../images/resultsPagePhoto3.jpg';
import photo4 from '../images/resultsPagePhoto4.jpg';

function RaceResultsPage() {
    return (
      <div className="RaceResultsPage">
        <div className="ResultsPageHeader">
          <h1 className="ResultsTitle">Latest Results</h1>
        </div>
        <StandardCard 
          title="Final Results: Lousa DH World Cup 2020 - Round 4"
          description="The results are in from the final DH world cup of 2020 in Lousa. Loic Bruni takes the number 1 spot
          for Elite Men, and Marine Cabirou takes the number 1 for Elite Women. See the full results on linked above on pinkbike."
          image={photo1}
          link="https://www.pinkbike.com/news/final-results-lousa-dh-world-cup-2020-round-4.html"
        />
        <StandardCard
          title="Final Results: Lousa DH World Cup 2020 - Round 3"
          description="The results are in from the DH world cup 2020 in Lousa. Greg Minnaar takes the number 1 spot
          for Elite Men, and Myriam Nicole takes the number 1 for Elite Women. See the full results on linked above on pinkbike."
          image={photo2}
          side="leftStandard"
          link="https://www.pinkbike.com/news/final-results-lousa-world-cup-dh-2020-round-3.html"
        />
        <StandardCard
          title="Final Results: Maribor DH World Cup 2020 - Round 2"
          description="The results are in from the DH world cup 2020 in Maribor. Loris Vergier takes the number 1 spot
          for Elite Men, and Nina Hoffmann takes the number 1 for Elite Women. See the full results on linked above on pinkbike."
          image={photo3}
          link="https://www.pinkbike.com/news/final-results-maribor-dh-world-cup-2020-round-2.html"
        />
        <StandardCard
          title="Final Results: Maribor DH World Cup 2020 - Round 1"
          description="The results are in from the DH world cup 2020 in Maribor. Loris Vergier takes the number 1 spot
          for Elite Men, and Marine Cabirou takes the number 1 for Elite Women. See the full results on linked above on pinkbike."
          image={photo4}
          side="leftStandard"
          link="https://www.pinkbike.com/news/final-results-maribor-dh-world-cup-2020-round-1.html"
        />
      </div>
    );
  }
  
  export default RaceResultsPage;