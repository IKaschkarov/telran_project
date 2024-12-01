# Dokumentation des Projekts „Online Shop für Haus- und Gartenprodukte“ (Gartenprodukte)

# Projektname

„Online-Shop für Haus- und Gartenprodukte“ (Gartenprodukte)

# Verweise auf das Layout, TOR oder Anforderungen, die endgültige Umsetzung

Layout: [Figma](https://www.figma.com/file/SDNWLzCWkh9ZXdCpWEaByv/project-frontend?type=design&node-id=280-1136&mode=design&t=NJTGdloftvn8I6Vz-0)

Aufgabenbereich : [Google Docs](https://docs.google.com/document/d/1j4GO3_P2-h80rrrUuVHan2i8saFXPJlk/edit)

Eingesetzte Realisation: [GardenStore](https://project-garden.onrender.com)

# Allgemeine Beschreibung
Bei dem Projekt handelt es sich um eine Webanwendung für einen Online-Shop für Haus- und Gartenprodukte. Ziel ist es, den Nutzern eine benutzerfreundliche Schnittstelle zur Verfügung zu stellen, um Produkte anzusehen, sie zu kategorisieren, in den Warenkorb zu legen und eine Bestellung aufzugeben.

# Die wichtigsten Funktionen des Projekts

Hauptseite:
 - Anzeige einer Liste von 4 Kategorien.
 - 5%-Rabatt-Formular: Validierung der Eingabedaten auf der Client-Seite unter Verwendung der React Hook Form-Bibliothek.
 - Anzeige von 4 zufälligen rabattierten Produkten.
 - 
Modales Fenster „Produkt des Tages“:
 - Wird in der Kopfzeile platziert und von jeder Seite aus geöffnet.
 - Das Fenster zeigt ein zufälliges Produkt mit einem Rabatt von 50 % an.
 - Vom modalen Fenster aus kann das Produkt in den Warenkorb gelegt werden.
 - Nach dem Schließen des modalen Fensters bleibt der Benutzer auf derselben Seite, von der aus er geklickt hat.

Produktkategorien:
 - Zeigen Sie eine Liste aller verfügbaren Produktkategorien an.
 - Durch Anklicken der Kategoriekarte gelangen Sie in den Abschnitt Waren nach Kategorie für die ausgewählte Kategorie.

Waren nach Kategorie:
 - Zeigen Sie eine Liste der Produkte in der ausgewählten Kategorie an.
 - Möglichkeit, Produkte zu sortieren (standardmäßig, nach absteigendem Preis, nach aufsteigendem Preis, in alphabetischer Reihenfolge).
 - Möglichkeit, Produkte zu filtern (nach Rabatt und nach Preisspanne).
 - Durch Anklicken der Produktkarte gelangen Sie zur detaillierten Beschreibung eines bestimmten Produkts.
 
Alle Produkte:
 - Anzeige der vollständigen Liste der Produkte.
 - Möglichkeit, Produkte zu sortieren (standardmäßig, nach absteigendem Preis, nach aufsteigendem Preis, in alphabetischer Reihenfolge).
 - Möglichkeit, Produkte zu filtern (nach Rabatt und nach Preisspanne).
   
Ermäßigte Produkte:
 - Anzeige einer Liste mit rabattierten Artikeln.
 - Möglichkeit, Produkte zu sortieren (standardmäßig, absteigender Preis, aufsteigender Preis, alphabetisch).
 - Möglichkeit, Produkte nach Preisspanne zu filtern.

Bevorzugte Produkte:
 - Zeigt eine Liste der bevorzugten Produkte an (Produkte, die gefallen haben).
 - Möglichkeit, Produkte zu sortieren (standardmäßig absteigend nach Preis, aufsteigend nach Preis, alphabetisch).
 - Möglichkeit, Produkte zu filtern (nach Preisspanne).

Ausführliche Beschreibung des Produkts:
 - Vollständige Informationen über das ausgewählte Produkt (Name, Preis, Beschreibung, Bilder).
 - Möglichkeit, ein Produkt in den Warenkorb zu legen.

Warenkorb:
 - Anzeige der Liste der ausgewählten Waren mit ihrer Menge und dem Gesamtpreis.
 - Möglichkeit, die Menge der Waren zu ändern und Waren aus dem Warenkorb zu entfernen.
 - Berechnung und Anzeige der Gesamtkosten der Waren im Warenkorb.
 - Möglichkeit zum Senden von Bestelldaten beim Absenden eines Formulars.

Seite nicht gefunden:
 - Zeigt eine Seite mit einer Meldung an, dass die angeforderte Seite nicht gefunden wurde.
 - Möglichkeit, zur Startseite zurückzukehren.

Seiten-Skelett (Loader):
 - Beim Laden der Seiten „Alle Produkte“, „Lieblingsprodukte“, „Rabattierte Produkte“ und „Produkte nach Kategorie“ wird ein Seitenskelett angezeigt, bevor die Produkte auf den Seiten erscheinen.

Dunkles Thema:
 - Wechselt zu einem dunklen Thema. Alle Seiten nehmen das Aussehen des Themas an.
 - Das ausgewählte Thema wird im lokalen Speicher gespeichert.

Mobile Anpassungsfähigkeit: 
 - Die Anwendung wird auf verschiedenen Geräten entsprechend dem Layout korrekt angezeigt.

# Technologie-Stack

React: Das wichtigste Framework für die UI-Entwicklung. Es wird für die Erstellung von Komponenten und die Verwaltung des Zustands der Anwendung verwendet.
Redux Toolkit: Verwaltung des Anwendungsstatus. Bietet eine zentralisierte Zustandsspeicherung und vereinfacht den Datentransfer zwischen Komponenten.
React Router: Routing in der Anwendung. Wird verwendet, um die Navigation zwischen Seiten zu erstellen.
Styled Components: Stilisierung von Komponenten. Ermöglicht die Erstellung und Verwaltung von CSS-Styles innerhalb von JavaScript.
Git und GitHub: Versionskontrollsystem und Codehosting. Dient der Verwaltung von Codeänderungen und der Zusammenarbeit an einem Projekt.

# Die Autoren des Projekts:

# Olha Litvinova

Link für LinkedIn: https://www.linkedin.com/in/olha-litvinova-830318287/
Link für GitHub: https://github.com/LitvinovaOlha1905?tab=repositories

Implementierte Fiches:
 - Startseite: Implementieren Sie die Logik, um 4 zufällige rabattierte Produkte anzuzeigen.
 - Alle Produkte
 - Ermäßigte Produkte
 - Bevorzugte Produkte
 - Mobile Anpassungsfähigkeit
 - Code überprüfen
   
# Irina Kaschkarov
Link für LinkedIn: https://www.linkedin.com/in/irina-kaschkarov-baba3a312/
Link für GitHub:  https://github.com/IKaschkarov?tab=repositories

Implementierte Funktionen:
 - Startseite: Anzeige einer Liste von 4 Kategorien.
 - Modales Fenster „Produkt des Tages
 - Dunkles Thema
 - Produkt-Kategorien
 - Produkte nach Kategorie
 - Detaillierte Beschreibung der Produkte
 - Fußzeile der Seite

# Olena Mykhaylenko

Link für GitHub: https://github.com/OlenaMykhaylenko?tab=repositories

Implementierte Fiches:
 - Startseite: Erstellen Sie ein Formular, um 5% Rabatt zu erhalten
 - Korb
 - Skelettseite (Loader)

# Anna Tkachenko

Link für GitHub: https://github.com/acroanny?tab=repositories

Implementierte Funktionen:
 - Kopfzeile
 - Modales Navigationsfenster für 360px und 480px Bildschirmgröße 
 - Seite nicht gefunden
