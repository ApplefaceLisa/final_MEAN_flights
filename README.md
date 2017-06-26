# MEAN stack flights SPA

MEAN stack course final project.

### mongodb database:
- database name: myFlightsDB
- collections name:
  - Carriers
  - Routes
  - flightDetails

#### database exported by
```
mongoexport /db:myFlightsDB /collection:Carriers /out:Carriers.json
mongoexport /db:myFlightsDB /collection:Routes /out:Routes.json
mongoexport /db:myFlightsDB /collection:flightDetails /out:flightDetails.json
```