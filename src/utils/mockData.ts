export const mockedScheduleXml = {
  data: `
    <Schedule xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
      <PubDate>2021-12-30T00:00:00+02:00</PubDate>
      <Shows>
        <Show>
          <ID>1653666</ID>
          <dtAccounting>2022-01-01T00:00:00</dtAccounting>
          <dttmShowStart>2022-01-01T10:30:00</dttmShowStart>
          <dttmShowStartUTC>2022-01-01T08:30:00Z</dttmShowStartUTC>
          <dttmShowEnd>2022-01-01T13:14:00</dttmShowEnd>
          <dttmShowEndUTC>2022-01-01T11:14:00Z</dttmShowEndUTC>
          <ShowSalesStartTime>2000-01-01T00:00:00</ShowSalesStartTime>
          <ShowSalesStartTimeUTC>2000-01-01T00:00:00Z</ShowSalesStartTimeUTC>
          <ShowSalesEndTime>2021-12-31T10:30:00</ShowSalesEndTime>
          <ShowSalesEndTimeUTC>2021-12-31T08:30:00Z</ShowSalesEndTimeUTC>
          <ShowReservationStartTime>0001-01-01T00:00:00</ShowReservationStartTime>
          <ShowReservationStartTimeUTC>0001-01-01T00:00:00Z</ShowReservationStartTimeUTC>
          <ShowReservationEndTime>0001-01-01T00:00:00</ShowReservationEndTime>
          <ShowReservationEndTimeUTC>0001-01-01T00:00:00Z</ShowReservationEndTimeUTC>
          <EventID>303601</EventID>
          <Title>Oma näytös</Title>
          <OriginalTitle>Oma näytös</OriginalTitle>
          <ProductionYear>2021</ProductionYear>
          <LengthInMinutes>154</LengthInMinutes>
          <dtLocalRelease>2021-02-24T00:00:00</dtLocalRelease>
          <Rating>(none)</Rating>
          <RatingLabel>(none)</RatingLabel>
          <RatingImageUrl>https://media.finnkino.fi/images/rating_large_(none).png</RatingImageUrl>
          <EventType>Movie</EventType>
          <Genres>Oma näytös</Genres>
          <TheatreID>1038</TheatreID>
          <TheatreAuditriumID>1279</TheatreAuditriumID>
          <Theatre>Tennispalatsi, Helsinki</Theatre>
          <TheatreAuditorium>sali 6</TheatreAuditorium>
          <TheatreAndAuditorium>Tennispalatsi, Helsinki, sali 6</TheatreAndAuditorium>
          <PresentationMethodAndLanguage>2D</PresentationMethodAndLanguage>
          <PresentationMethod>2D</PresentationMethod>
          <EventSeries/>
          <ShowURL>http://www.finnkino.fi/websales/show/1653666/</ShowURL>
          <EventURL>http://www.finnkino.fi/event/303601/title/oma_n%C3%A4yt%C3%B6s/</EventURL>
          <SubtitleLanguage1>
            <Name>Valitun elokuvan mukainen</Name>
            <NameInLanguage/>
            <ISOTwoLetterCode>NA</ISOTwoLetterCode>
          </SubtitleLanguage1>
          <Images>
            <EventSmallImagePortrait>http://media.finnkino.fi/1012/Event_13086/portrait_small/juliste_1080x1600.png</EventSmallImagePortrait>
            <EventMediumImagePortrait>http://media.finnkino.fi/1012/Event_13086/portrait_medium/juliste_1080x1600.png</EventMediumImagePortrait>
            <EventLargeImagePortrait>http://media.finnkino.fi/1012/Event_13086/portrait_small/juliste_1080x1600.png</EventLargeImagePortrait>
            <EventSmallImageLandscape>http://media.finnkino.fi/1012/Event_13086/landscape_small/juliste_444x300.png</EventSmallImageLandscape>
            <EventLargeImageLandscape>http://media.finnkino.fi/1012/Event_13086/landscape_large/juliste_670x250.png</EventLargeImageLandscape>
          </Images>
          <ContentDescriptors/>
        </Show>
      </Shows>
    </Schedule>
  `
};

export const mockedDatesXml = {
  data: `
    <Dates xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
      <dateTime>2021-12-26T00:00:00</dateTime>
      <dateTime>2021-12-27T00:00:00</dateTime>
      <dateTime>2022-01-18T00:00:00</dateTime>
      <dateTime>2022-01-19T00:00:00</dateTime>
      <dateTime>2022-01-24T00:00:00</dateTime>
    </Dates>`
  };

export const mockedAreasXml = {
  data: `
    <TheatreAreas xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
      <TheatreArea>
        <ID>1029</ID>
        <Name>Valitse alue/teatteri</Name>
      </TheatreArea>
      <TheatreArea>
        <ID>1014</ID>
        <Name>Pääkaupunkiseutu</Name>
      </TheatreArea>
      <TheatreArea>
        <ID>1012</ID>
        <Name>Espoo</Name>
      </TheatreArea>
      <TheatreArea>
        <ID>1039</ID>
        <Name>Espoo: OMENA</Name>
      </TheatreArea>
      <TheatreArea>
        <ID>1038</ID>
        <Name>Espoo: SELLO</Name>
      </TheatreArea>
    </TheatreAreas>`
};
