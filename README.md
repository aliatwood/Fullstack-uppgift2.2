# Middle-earth Explorer API

En REST-webbtjänst byggd med NestJS och PostgreSQL för att hantera platser i Middle earth från Sagan om ringen.

## Publikt API

API:et körs på Render och kan nås här:

https://middle-earth-explorer-api.onrender.com

För att hämta alla platser, använd:

https://middle-earth-explorer-api.onrender.com/places

## Tekniker

- Node.js
- NestJS
- TypeScript
- PostgreSQL
- TypeORM
- class-validator
- Postman för testning
- Render för driftsättning

## Funktioner

API:et har fullt CRUD-stöd för platser i Middle-earth.

Varje plats innehåller följande fält:

| Fält | Datatyp | Beskrivning |
|---|---|---|
| id | Integer | Unikt ID för platsen |
| name | String | Platsens namn |
| realm | String | Vilket rike platsen tillhör |
| population | Integer | Antal invånare |
| safe | Boolean | Om platsen är säker eller inte |

## API-endpoints

Alla endpoints använder basadressen:

**Publik adress:** `https://middle-earth-explorer-api.onrender.com`

**Lokal adress:** `http://localhost:3000`

| HTTP-metod | Endpoint | Beskrivning |
|---|---|---|
| GET | `/places` | Hämtar alla platser |
| GET | `/places/:id` | Hämtar en specifik plats |
| POST | `/places` | Skapar en ny plats |
| PUT | `/places/:id` | Uppdaterar en befintlig plats |
| DELETE | `/places/:id` | Raderar en plats |

## Exempel på JSON-data

Vid skapande av en ny plats med POST skickas denna JSON:

```json
{
  "name": "Rivendell",
  "realm": "Elven",
  "population": 5000,
  "safe": true
}
```

Databasen skapar automatiskt ett unikt ID för varje ny plats.

## Installation

### 1. Klona projektet

```bash
git clone https://github.com/aliatwood/Fullstack-uppgift2.2.git
```

### 2. Gå till backend-mappen

```bash
cd Fullstack-uppgift2.2/backend
```

### 3. Installera beroenden

```bash
npm install
```

### 4. Konfigurera miljövariabler

Skapa en `.env`-fil i backend-mappen och fyll i uppgifterna för din PostgreSQL-databas:

```env
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=postgres
DB_PASSWORD=ditt_lösenord
DB_DATABASE=middle_earth_explorer
```

Anpassa värdena efter din databas.

### 5. Starta servern

```bash
npm run start:dev
```

Servern startar på:

`http://localhost:3000`

## Testning

API:et kan testas med Postman genom att skicka HTTP-anrop till endpoints ovan.

Ni kan bland annat testa att:

- Hämta alla platser med GET.
- Hämta en specifik plats med GET och ett ID.
- Skapa en ny plats med POST.
- Uppdatera en plats med PUT.
- Radera en plats med DELETE.

API:et returnerar data i JSON-format.

## Validering och felhantering

API:et använder DTO:er och `class-validator` för att kontrollera inkommande data innan den sparas i databasen.

Om felaktiga datatyper skickas returneras ett felmeddelande med statuskod 400 (Bad Request).

Om en plats med skriven ID inte finns returneras ett felmeddelande med statuskod 404 (Not Found).

## Databas

Projektet använder PostgreSQL som databasserver och TypeORM för att kommunicera med databasen.

Tabellen skapas automatiskt av TypeORM när servern startas med den nuvarande utvecklingskonfigurationen.

## Hosting

API:et körs på Render och använder en PostgreSQL-databas.
