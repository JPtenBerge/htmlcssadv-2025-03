# Notes

## Toffe links



## Waarom niet `<div>` overal?

- accessibility (a11y)
  - andere tags geven meer structuur, zeer handig voor screenreaders om snel door navigatie/content te navigeren
- onderhoudbaarheid: developers snappen beter wat je aan het doen bent met betekenisvolle elementen
- gewoonten: goede gewoonten zijn veel waard

Doelgroepen om rekening mee te houden bij het maken van webapps:

- kleurenblinden / blinden / slechtzienden / digibeet / laaggeletterden / dyslexie / ouderen
  - en andere impairments - hersenschudding, arm gebroken, etc.
- crawlers/scrapers/indexers/BOTS/AI
- gemiddelde persoon
- mede developers

## "void" tags/elements - contentloze elementen

`/>` doet niks in HTML, browsers negeren het. Vanuit de HTML-spec zijn sommige elementen "void elements", die mogen geen content hebben:

- `<input>` - `<input>bla</input>`
- `<img>`
- `<meta>`
- `<link>`
- `<br>`
- `<hr>` - `<hr>bla</hr>`

Prettier is stom in dat het wel `/>` forceert en [geen optie biedt om dat niet te doen](https://github.com/prettier/prettier/issues/5246).

Angular / Vue / React / Svelte / Blazor / ... maken het dan nog wat interessanter met eigen template parsers waardoor `/>` bij bijv. `<CustomComponent />` wel degelijk iets doet.
