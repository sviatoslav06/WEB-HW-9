//Task 1
class CSSClasses {
    constructor(name, styles) {
        this.name = name;
        this.styles = styles;
    }
    addStyle(style) {
        this.styles.push(style);
    }
    delStyle() {
        this.styles.pop();
    }
    getStyles() {
        for (let i = 0; i < this.styles.length; i++) {
            return this.styles[i] + '; ';
        }
    }
    getCSS() {
        // console.log('.' + this.name + ' { ' + this.getStyles() + ' }');
        document.write('<p>' + '.' + this.name + '{' + '</p>');
        for (let i = 0; i < this.styles.length; i++) {
            document.write('<p>' + this.styles[i] + '; ' + '</p>');
        }
        document.write('<p>' + '}' + '</p>')
    }
}

myClass = new CSSClasses('obj', ['margin: 0 auto', 'text-align: center']);
myClass.getCSS();

myClass.addStyle('margin-left: 10px');
myClass.getCSS();

myClass.delStyle();
myClass.getCSS();

//Task 2
class Button {
    constructor(width, height, content) {
        this.width = width;
        this.height = height;
        this.content = content;
    }
    showBtn() {
        document.write('<button style="width: ' + this.width + 'px; height: ' + this.height + 'px;">' + this.content + '</button>');
    }
}

button = new Button(200, 100, 'Hello');
button.showBtn();

class BootstrapButton extends Button {
    constructor(width, height, content, color) {
        super(width, height, content);
        this.color = color;
    }
    showBtn() {
        document.write('<button style=" margin-left: 10px; width: ' + this.width + 'px; height: ' + this.height + 'px; background-color:' + this.color + ';">' + this.content + '</button>');
    }
}

bootstrapButton = new BootstrapButton(100, 50, 'Sviat', 'green');
bootstrapButton.showBtn();

//Task 3
class ExtendedDate extends Date {
    constructor(year, month, day) {
        super();
        this.year = year;
        this.month = month;
        this.day = day;
    }
    printDate() {
        document.write('<p>' + this.day + ':' + this.month + '</p>');
    }
    pastOrFuture() {
        if (this.year < super.getFullYear())
            return false;
        else if (this.year == super.getFullYear() && this.month < super.getMonth())
            return false;
        else if (this.year == super.getFullYear() && this.month == super.getMonth() && this.day < super.getDate())
            return false;
        else
            return true;
    }
    vusokosnuy() {
        if (this.year % 4 == 0 && this.year % 100 != 0 || this.year % 400 == 0)
            return true;
        else
            return false;
    }
    nextDate() {
        this.day++;
        if (this.day > 30) {
            this.day = 1;
            this.month++;
            if (this.month > 12) {
                this.month = 1;
                this.year++;
            }
        }
        document.write('<p>' + this.day + ':' + this.month + ':' + this.year + '</p>');
    }
}

extendedDate = new ExtendedDate(2006, 3, 19);
extendedDate.printDate();

document.write('<p>' + extendedDate.pastOrFuture() + '</p>');
document.write('<p>' + extendedDate.vusokosnuy() + '</p>');

extendedDate.nextDate();