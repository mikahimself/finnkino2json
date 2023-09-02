import { getAreas } from "./getAreas";
import { getScheduleDates } from "./getScheduleDates";
import { getSchedule } from "./getSchedule";

export { getAreas, getScheduleDates, getSchedule }

const getAreasTest = async () => {
  const data = await getAreas();
  console.log(data)
}

const getScheduleDatesTest = async () => {
  const data = await getScheduleDates({ storeXml: true });
  console.log(data);
}

const getScheduleTest = async () => {
  const data = await getSchedule();
  console.log(data);
}

const test = async () => { await getScheduleDatesTest() };

test();