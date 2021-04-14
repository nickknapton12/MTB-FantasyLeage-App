import '../styles/RaceResultsPageStyle.css'
import '../styles/newsPageStyle.css'
import StandardCard from '../components/standardCard';
import photo1 from '../images/newsPagePhoto1.jpg';
import photo2 from '../images/newsPagePhoto2.jpg';
import photo3 from '../images/newsPagePhoto3.jpg';
import photo4 from '../images/newsPagePhoto4.jpg';

function NewsPage() {
    return (
      <div className="NewsPage">
        <div className="NewsPageHeader">
          <h1 className="ResultsTitle">News</h1>
        </div>
        <StandardCard 
          title="Fort William DH World Cup Cancelled"
          description="The organisers of the Mercedes-Benz UCI Mountain Bike World Cup in Fort William have today announced that the event scheduled for 22-23 
                      May is cancelled. The 2021 DH season will kick off in Leogang June 12-13. See full press release on pinkbike."
          image={photo1}
          link="https://www.pinkbike.com/news/fort-william-dh-world-cup-cancelled.html"
        />
        <StandardCard
          title="Unior-Sinter Signs Three New Riders"
          description="Unior, leading European manufacturer of the specialized tools for the bicycle mechanics, has created its own factory team back in 2010 
                      and has been since racing across the disciplines. Tradition continues in 2021, now in the new alliance with Sinter Brakes – another 
                      progressive Slovenian manufacturer – and three extraordinary Slovenian riders. See full article on pinkbike."
          image={photo2}
          side="leftStandard"
          link="https://www.pinkbike.com/news/unior-sinter-signs-slovenian-riders-jure-zabjek-tanja-zakelj-and-zak-gomilscek-for-the-2021-season.html"
        />
        <StandardCard
          title="Maribor World Cup Postponed"
          description="The organisers of the Maribor World Cup have confirmed the event will now take place in August due to the effects of the COVID-19 pandemic. 
                      The race will now run on August14-15, making it the fourth round of the series, sitting between Les Gets at the start of July and Lenzerheide 
                      in early September. See the full story on pinkbike."
          image={photo3}
          link="https://www.pinkbike.com/news/final-results-maribor-dh-world-cup-2020-round-2.html"
        />
        <StandardCard
          title="Rachel Atherton Announces Pregnancy"
          description="Rachel Atherton has just announced her pregnancy! See what this means for her plans for the 2021 race season on pinkbike in the full
                      interview."
          image={photo4}
          side="leftStandard"
          link="https://www.pinkbike.com/news/final-results-maribor-dh-world-cup-2020-round-1.html"
        />
      </div>
    );
  }
  
  export default NewsPage;