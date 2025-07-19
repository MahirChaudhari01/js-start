const countryCodes = {
  america: "US",
  china: "CN",
  india: "IN",
  japan: "JP",
  germany: "DE",
  london: "GB",
  france: "FR",
  italy: "IT",
  canada: "CA",
  southkorea: "KR",
  brazil: "BR",
  russia: "RU",
  australia: "AU",
  mexico: "MX",
  indonesia: "ID",
  saudiarabia: "SA",
  spain: "ES",
  netherlands: "NL",
  switzerland: "CH",
  turkey: "TR",
  argentina: "AR",
  sweden: "SE",
  poland: "PL",
  belgium: "BE",
  thailand: "TH",
  nigeria: "NG",
  egypt: "EG",
  pakistan: "PK",
  vietnam: "VN",
  southafrica: "ZA"
};

let a=4;

export const getCountryName = (name="india") => {
    const convertname = name.toLowerCase().replace(/\s+/g, '');

    const findCountry = countryCodes[convertname];
    a=5;
    console.log(findCountry); 
    
}

const vari = getCountryName()
console.log(a);
