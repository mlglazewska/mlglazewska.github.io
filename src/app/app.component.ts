import {Component} from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'Projekt Zaliczeniowy';
    mainArticleFirst = 'Ta oto strona została stworzona w celu prezentacji znajomości architektury MVC oraz sposobów translacji zawartości stron internetowych.';
    mainArticleSplit = 'Do wykonania jej wykorzystano framework Angular .js, w którym model struktury znajduje się w plikach app.component, a kontroler - w pliku app.module';
    mainArticleSecond = 'Widok natomiast mieści się w pliku index.html.';
    mainArticleThird = 'Do wykonania translacji użyto modułu angular-translate. Zmienić język można poprzez wybranie opcji z listy znajdującej się w menu na górze strony.';
    mainArticleFourth = 'Do hostowanie zestawu prac domowych oraz projektu wykorzystano github pages w wyniku czego zadania domowe nr 6 - MVC oraz 7 - wersje językowe zostały pominięte ze względu na ograniczenia narzucane przez serwis (ilosc stron na użytkownika i ograniczenia w hostowaniu aplikacji webowych).';
    capricornTitle = 'Koziorożec';
    capricornText = 'Tutaj tekst o Koziorożcu';
    leoTitle = 'Koziorożec';
    leoText = 'Tutaj tekst o Koziorożcu';
    constellationTitle = 'Koziorożec';
    constellationText = 'Tutaj tekst o Koziorożcu';
    shootTitle = 'Koziorożec';
    shootText = 'Tutaj tekst o Koziorożcu';
    aboutTextFirst = 'Studiuję Informatykę st. I w trybie stacjonarnym';
    aboutTextSecond = 'Pracuję też jako Junior Developer, skupiając się głównie na automatyzacji procesów biznesowych';
    aboutTextThird = 'Czas wolny spędzam tańcząc i malując.';
    aboutTextFourth = 'Oprócz powyższych tematów interesuję się również szeroko pojętą literaturą oraz kinem sci-fi.';
    goals = 'Moim celem jest dalszy rozwój w zakresie tworzenia oprogramowania, głównie opierając się na frameworku .NET i/lub językach Java lub Python.';
    menuLang = 'Języki';
    menuPol = 'Polski';
    menuEng = 'Angielski';
    menuAbout = 'O mnie';
    menuGoals = 'Cele';
    menuMenu = 'Menu Zadań';

    showAbout() {
        this.mainArticleFirst = this.aboutTextFirst;
        this.mainArticleSecond = this.aboutTextSecond;
        this.mainArticleThird = this.aboutTextThird;
        this.mainArticleFourth = this.aboutTextFourth;
    }

    showGoals() {
        this.mainArticleFirst = this.goals;
        this.mainArticleSecond = '';
        this.mainArticleThird = '';
        this.mainArticleFourth = '';
    }

    switchPol() {
    }

    switchEng() {
    }
}
