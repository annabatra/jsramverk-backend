var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
    res.json(presentation);
});

var presentation = `
      <h1>Min me-sida i kursen jsramverk!<br/><br/></h1>
      <img src="ownlogo.png" className="App-logo" alt="logo" />
      <p>
          Hej, Mitt namn är Christoffer Bolin. Jag är född och uppvuxen i Listerby,
          Blekinge, cirka 15 minuter från Karlskrona.<br/>
          Listerby tillhör Ronneby kommun, så trots det korta avståndet kan jag inte
          kalla mig karlskronit,
          även om jag nu bor i Karlskrona.<br/><br/>

          Jag är flera hobbies, men kanske den som tar mest tid (och ses mer som en
          passion?) är fotboll.<br/>
          Jag har spelat hela livet, tills nyligen då jag slet av mitt korsband men
          också följt det, allt ifrån ligor i
          brasilien till de mer klassiska Premier League, Serie A, Bundesliga och
          framförallt La Liga.<br/>
          Som alla vet så tillhör ju världens största, bästa, vackraste klubb La Liga,
          FC Barcelona.<br/>
          Nu på senare dagar har jag också börjat spela en hel del padel, vilket
          är otroligt roligt.<br/><br/><br/>
          Tycker denna kurs ska bli otroligt kul och har sett fram emot att få
          pilla med react främst och försöka lära mig mer kring det.TESTAR
      </p>`;

module.exports = router;
