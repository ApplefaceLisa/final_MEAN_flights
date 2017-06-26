# MEAN stack flights SPA

MEAN stack course final project.

### mongodb database:
- database name: myFlightsDB
- collections name:
  - Carriers
  - Routes
  - flightDetails

#### Database operation
- collections exported using command
```
mongoexport /db:myFlightsDB /collection:Carriers /out:Carriers.json
mongoexport /db:myFlightsDB /collection:Routes /out:Routes.json
mongoexport /db:myFlightsDB /collection:flightDetails /out:flightDetails.json
```
And stored under /server/myFlightsDB.

- database importing before running code
```
mongoimport /db:myFlightsDB /collection:Carriers /file:Carriers.json
mongoimport /db:myFlightsDB /collection:Routes /file:Routes.json
mongoimport /db:myFlightsDB /collection:flightDetails /file:flightDetails.json
```