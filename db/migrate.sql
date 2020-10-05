CREATE TABLE IF NOT EXISTS users (
    email VARCHAR(255) NOT NULL,
    password VARCHAR(60) NOT NULL,
    UNIQUE(email)
);


CREATE TABLE IF NOT EXISTS reports (
    week INT NOT NULL,
    report TEXT
);

DELETE FROM reports;
INSERT INTO reports
    (week, report)
VALUES
    (1, '<h1>Redovisning!</h1><p>Denna sida är byggd med React. För att få routes att fungera på sidan har jag med hjälp av <b><u>npm install</u></b> installerat <b><u>react-router-dom</u></b> som hjälper mig med rätt så basic routing nu i början. <br /><br />För att få igång appen och kunna arbeta med den använder jag mig av <b><u>npm start</u></b>, och då ändras de ändringar jag gör i realtid vilket gör det väldigt smidigt att arbeta med.<br /><br />För att redan nu försöka hålla lite ordning på kod osv har jag delat upp de olika sidorna som syns, och exporterar/importerar de olika functionerna för dem, för att försöka hålla ordning och reda.</p><a href="https://github.com/annabatra"target="_blank"rel="noopener noreferrer">Min github finns här</a>'),
    (2, '<h1>Redovisning!</h1><a href="https://github.com/emilfolino/jsramverk"target="_blank"rel="noopener noreferrer">GitHubrepo finns här</a><br><br>För att starta mitt Me-API krävs det att man står i katalogen me-app-backend med terminalen samt skriver npm start ,detta startar då igång så APIet körs.'),
    (3, 'Text kommer senare'),
    (4, 'Text kommer senare'),
    (5, 'Text kommer senare'),
    (6, 'Text kommer senare'),
    (10, 'Text kommer senare')
    ;
