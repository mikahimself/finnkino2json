# finnkino2json

A minimal library you can use to fetch XML responses from Finnkino API and translate them to JSON.

# Features

- Fetch and translate Areas XML
- Fetch and translate Schedule Dates XML
- Fetch and translate Schedule XML
- Optionally store fetched XML on file system

# Examples

## getAreas

`getAreas` fetches a list of theatre areas and optionally saves the fetched XML file on disk:

```typescript
import { getAreas } from "finnkino2json";

const areas = await getAreas();

const saveAreas = await getAreas(true);
```

## getScheduleDates

`getScheduleDates` fetches a list of schedule dates for a theatre areas and optionally stores the fetched XML data on disk. If you do not provide a theatre area code as an argument, `getScheduleDates` fetches schedule dates for the first area on the theatre areas list.

```typescript
import { getScheduleDates } from "finnkino2json";

const datesForFirstArea = await getScheduleDates();

const datesForSpecificArea = await getScheduleDates({ areaId: "1041" });
const datesForSpecificAreaAnd Save = await getScheduleDates({ areaId: "1041", storeXml: true })
```

## getSchedule

`getSchedule` fetches the full schedule of either ALL events or a specific event for a certain date in a certain area, and optionally stores the fetched XML data on disk. If you do not provide any arguments, the function fetches the schedule for ALL events, in the first theatre area on the list for the current day.

```typescript
import { getSchedule } from "finnkino2json";

const schedule = await getSchedule();
const scheduleForArea = await getSchedule({ areaId: "1041" });
const scheduleForAreaAndDate = await getSchedule(
  {
    areaId: "1041",
    date: "2022-12-31"
  }
);
const scheduleForAreaDateAndEvent = await getSchedule(
  {
    areaId: "1041",
    date: "2022-12-31",
    eventId: 303601
  }
);
const scheduleForAreaDateAndEventForThreeDays = await getSchedule(
  {
    areaId: "1041",
    date: "2022-12-31",
    eventId: 303601,
    numberOfDays: 3,
  }
);
```