# Notes

## Toffe links

- https://caniuse.com - browser support voor web features checken
- [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template) - toffe docs, met voorbeelden en browser support

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

## Methodologies

- Tailwind
- Open-props
- BEM / SMACSS / OOCSS - ouderwets, minder nodig als je gewoon scoped CSS doet
- scoped CSS

### Tailwind

- utility classes
- berg aan classes in je HTML
- matig qua herbruikbaarheid
  - wel beter met Tailwind 4! voorheen moest je custom herbruikbare classes in een `.json`-file plaatsen
- leesbaarheid/onderhoudbaarheid
- voordelen:
  - geen aparte CSS
  - geen dode CSS - Tailwind optimialiseert ongebruikte CSS weg
  - niet voor ieder onbenullig dingetje een functionele naam verzinnen
  - overzichtelijkheid / conflicten: andere pagina's hebben geen last van jouw aanpassingen
  - design system  `.bg-slate-400` `hover:.bg-slade-700`  `accessibility++`
  - inline styling? nee, want:
    - is korter
    - geen media query
    - geen :hover pseudo-classes
- nadelen:
  - heel veel classes
    ```html
    <div class="p-5 m-3 mb-[30px] bg-slate-3 text-shadow hover:bg-slate-8 dark:hover:bg-slate-12">
    ```

### BEM (Block-Element-Modifier)

```css
.panel__heading {

}
.panel__heading--warning {
	color: var(--warning, gold);
}
```
```html
<div class="panel__heading panel__heading--warning">
```

nu.nl gebruikt het!


## Web Sockets

HTTP/1.1
HTTP/2 - multiplexing  SPDY
HTTP/3 - UDP  QUIC  Quality UDP Internet Connections
- fire and forget


realtime applications:
- chat
- multiplayer games
- beurs
- GitHub actions - pipelines
- thuisbezorgd
- streams?
- stackoverflow andere antwoorden
- live server live reload





