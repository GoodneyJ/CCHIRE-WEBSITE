import {Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom' 
import Homepage from './pages/homepage.js';
import OurTeam from './pages/ourTeam.js';
import CaseStudies from './pages/caseStudies.js';
import ArticlePage from './pages/articlePage.js';
import Services from './pages/services.js';
import Contact from './pages/contact.js';

import BannerOne from './IMAGES/article-banners/articleOne.jpeg';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch >
          <Route exact path='/'>
            <Redirect to="/home" />
          </Route>
          <Route path='/home' exact component={Homepage} />
          <Route path='/our-team' component={OurTeam} />
          <Route path="/case-studies" component={CaseStudies} />
          <Route path="/services" component={Services} />
          <Route path="/Contact" component={Contact} />
          <Route path='/home/article-one' render={() =>
            <ArticlePage
              title="CCHI Re Rx"
              text={[<h3 className="bold">Health Plans who choose Self Funding do so because they feel the challenges posed by modern healthcare are best managed through Self Funding.</h3>,
              <p>They reject the notion of merely surrendering that task to an Insurance Company. Similarly, surrendering critical drug benefit management to a PBM is equally unacceptable. CCHI Rx consists of several vendors, partner stop-loss carriers and provider professionals who combine to assure that a Self Funded Plan’s PBM is maximizing savings and properly addressing patient outcome. Pharmaceutical benefits are not only one of the most escalating sectors of health care cost, the social impact they represent is staggering.  This service is managed by CCHI Re team member Dr. Olivia McMullen-Fields</p>,
              <p><span className="bold">Make an appointment with your CCHI Re representative for a tutorial on how this works. </span>  It takes about 30 minutes. This is the must have tool for self-funding experts in 2021.</p>,
              <p>Imagine if you had the greatest prospecting tool for new self-funded groups.   Imagine if you had the one tool that will help solidify your value with your client.</p>,
              <p className="italic">CCHI Re builds profitable relationships with you so that you can build profitable relationships with your clients.</p>]}
              img={BannerOne}
              
            />}
          />
          <Route path='/home/article-two' render={() =>
            <ArticlePage
              title="Why you should self-fund your fully insured health plan"
              text={[
              <h3>Self-Funding is usually more efficient than fully insured plans because of one major reason. </h3>, 
              <p>Your fully insured premium includes reserves.   Understanding reserves is critical.   Reserves can make up <span className="bold">roughly</span> 15% of the premium.   The carrier calculates the total premium by using actuaries to predict your over all costs to the carrier, THEN THEY ADD the reserve, in case the group is an outlier.   <span className="bold">Using the law of large numbers of groups, they are going to come very close to spending only 85% of those premium dollars, right?</span> Why are you giving that 15% edge to the carrier? Furthermore, a self funded plan is designed with aggregate stop loss insurance so that your maximum claims are capped. </p>, 
              <p>Provides greater financial control for employers and allows customization of health benefits.</p>,
              <ul>
                <li>Allows employers to hold plan reserves</li>
                <li>Functions as a normal insurance program (Benefits and Provider Network) from the employee perspective</li>
                <li>Wellness benefits inure to the benefit of the employer</li>
                <li>Plans are protected against adversity through Stop Loss Insurance</li>
                <li>Provides control over vendors and the Affordable Care Act</li>
                <li>Benefits administration, banking arrangements and provider networks are organized through a Third Party Administrator</li>
              </ul>,
              <p className="bold">CCHI RE, can do a study for your to see if your group is a candidate for Self Funding.</p>,
              <p>Please contact us for an estimate on the fee to do the study.</p>]}
              img={BannerOne}
            />}
          />
          <Route path='/home/article-three' render={() =>
            <ArticlePage
              title="Are you missing out on key medical stop loss markets?"
              text={[
                <p>Make it stand out. Self-funded plans rely on competitive specific and aggregate rates and limits to remain efficient. Key in obtaining competitive rates is the risk management strategies to mitigate costs within the plan. Also key is the <span className="bold">relationships</span> built with the stop loss carriers in helping them understand why our risk management strategies enable them to offer some of the lowest rates. As the nation’s oldest stop-loss wholesaler, we have developed a large portfolio of carriers to work with. This reduces the chance that there is a better rate out there that the customer may have missed. The bottom line is this…what have you got to lose by letting us shop your group?</p>,
                <p className="bold">You may end up with a stop loss rate and risk management that you will be very pleased with.</p>
              ]}
              img={BannerOne}
            />}
          />
          <Route path='/home/article-four' render={() =>
            <ArticlePage
              title="Valuable strategies to lowering claims costs"
              text={[
                <h3>CCHI RE has it’s roots in the nation’s first wholesaler of stop-loss products.</h3>,
                <p>Beginning in the 1980s, our Founder’s services focused on offering brokers access to markets that they otherwise did not have. Over time markets became available to any broker with only a bit of internet research. To remain competitive, our Founder had to bring value added services to stop loss purchases. Over time, our Founder has innovated new strategies in risk management that mitigated claims costs downward.</p>,
                <p>Because of the effectiveness of these risk management strategies, our partner carriers can and do consider premium discounts and favorable financial incentives making our markets very competitive. Our customers benefit directly through overall better group health and patient advocacy which is often required in high cost medical events. <span className="bold">CCHI Re, the heart of Risk Management.</span></p>,
                <h3>Call us today for more information on how we can possibly reduce your claims costs.</h3>
              ]}
              img={BannerOne}
            />}
          />
          <Route path='/home/article-five' render={() =>
            <ArticlePage
              title="Our Early Intervention program saves money, maximizes patient care quality and retains clients."
              text='Brokers who focus solely on providing the lowest cost plan lose two ways. They cut their profitability, and when underwriters raise premiums they have no point of difference between them and the next cut-rate broker. brokers who work with CCHI can offer a significant risk management service and enhanced patient care to their clients in addition to low, low premiums. '
              img={BannerOne}
            />}
          />                                
        </Switch>
      </Router>
    </div>
  );
}

export default App;
