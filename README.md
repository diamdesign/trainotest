Observera: Du bör läsa på dokumentationen om Next.js
om du inte gjort något med Next.js tidigare, den är enkel att förstå och följa.
https://nextjs.org/docs

-   Ta ned detta projekt till din github och dator. Spara det i din github och ge länk till Kevin.
-   Skapa ett React Next.js 14 projekt (Utan Typescript)
-   Skapa en page med slug och hämta slugen som id. Använd id 175. Vet du inte vad slug är, hitta i dokumentationen.
-   Skapa hämta user data ifrån API:et med slug id't. Använd denna för att fetcha user info: https://traino.nu/php/testgetuser.php?id=${id}
-   Skapa en user info ruta som printar ut den datan, med thumbnail, förnamn, efternamn, ålder.
-   Skapa ett formulär under. + styla formuläret med CSS (vanlig css eller module), plus i kanten om det är snyggt gjort. (Förslagsvis, titel input, dropdown med alternativen Tränare och Trainee, textarea med förklaring, en checkbox som visar true eller false och en skicka knapp.)
-   Göra så att formuläret sparar all data i ett objekt och console.log:ar ut vid varje uppdatering av formuläret.
-   Skicka objektet in till databasen med en fetch till en egengjord php fil.
-   Php filen ska kolla efter korrekt method, och använda pdo för insert, och ska skicka tillbaka ett json response till frontend.
-   Du ska inserta i tabellen "testar", med kolumnerna "title" varchar255, "description" varchar255, "user" varchar255, "truefalse" tinyint1
-   Fetchen till php filen kan du använda https://traino.nu/test/namnetpådinphpfil.php - Så lägger vi upp den där och testar med den. Du behöver inte bry dig om pdo connections, utan bara använda variabeln $pdo så lägger vi in korrekt sen.

Enkel förståelig kod är bäst, kommentera gärna kort på saker om du vill, men inget måste.

Du får använda AI, men klart bäst om du klarar det utan. Vi kollar på om och hur du löser uppgiften. Hur koden ser ut och ifall du förstod uppgiften. Kan du inte php, ge AI ett försök att göra jobbet åt dig.

---

1. Klona/forka projektet till din egna github
2. Skapa ett react next js projekt utan typescript
3. Profile/[slug]/form/page.jsx (slug blir id:t sen) localhost://profile/175/form/
4. Fetch funktion med id:t ifrån slug
5. Skapa layout av infon ifrån userdatan (behövs inte mappas, blir bara ett resultat)
6. Skapa form
7. Spara i objekt
8. Använd post method för att skicka objektet i json format till en egengjord php fil
9. Akapa php filen för att ta emot objektet och spara det in i databasen
