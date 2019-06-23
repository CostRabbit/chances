"use strict";
var Alexa = require("alexa-sdk");
var getACT;
var getGPA;
var handlers = {
    "LaunchRequest": function() {
      this.response.speak("Welcome to the college chances calculator! What is your A.C.T score?").listen("Sorry I didn't get that. What is your ACT score?");
      this.emit(':responseReady');
    },
    "ACTScore": function() {
        getACT = this.event.request.intent.slots.score.value;
        var theEnd = Number(getACT);
        getACT = theEnd;
        this.response.speak("Just to confirm, your A.C.T score is " + getACT + ". What is your GPA?").listen("I didn't quite get that. What is your GPA?");
        this.emit(':responseReady');
    },
    "GPA": function() {
        var getFirstGPA = this.event.request.intent.slots.number.value;
        //console.log(getFirstGPA);
        var firstString = getFirstGPA.toString();
        var getSecondGPA = this.event.request.intent.slots.decimal.value;
        //console.log(getSecondGPA);
        var secondString = getSecondGPA.toString();
        var finalString = firstString + "." + secondString;
        getGPA = parseFloat(finalString);
        //console.log(getGPA);
        this.response.speak("Just to confirm, your GPA is " + getGPA + ". What college would you like to know your chances for? You can choose between University of Illinois Urbana Champaign, University of Wisconsin Madison, Illinois State University, Indiana University Bloomington, Depaul University, University of Iowa, Marquette University, Purdue University, University of Michigan Ann Arbor, and Loyola University.").listen("I didn't quite get that. What college would you like to know your chances for? You can choose between University of Illinois Urbana Champaign, University of Wisconsin Madison, Illinois State University, Indiana University Bloomington, Depaul University, University of Iowa, Marquette University, Purdue University, University of Michigan Ann Arbor, and Loyola University.");
        this.emit(':responseReady');
    },
    "chooseCollege": function() {
        var getCollege = this.event.request.intent.slots.University.value;
        //console.log(getCollege === "michigan");
        //console.log(getCollege);
        var myString;
        if (getCollege === "loyola university" || getCollege === "loyola")
        {
            var LUC50 = parseFloat('27');
            var LUC75 = parseFloat('29');
            var LUC25 = parseFloat('24');
            var LUCGPA = parseFloat('3.73');
            var LUCADMISSIONRATE = parseFloat('63');
            var LOYGPA = (4 * (getGPA - LUCGPA));
            var LOYSCORE = (2 * (getACT - LUC50)) / (LUC75 - LUC25);
            var LOYCOMBO = (LUCADMISSIONRATE/100) * Math.pow(2, LOYSCORE) * Math.pow(2, LOYGPA);
            var LOYCHANCE = (100 * 100 * LOYCOMBO)/((100 * LOYCOMBO + (100 - LUCADMISSIONRATE)));
            var LOYFINALPERCENT = LOYCHANCE.toFixed(2);
            var LOYFINALNUMBER = Number(LOYFINALPERCENT);
            var LOYSTR1 = "You have a " + LOYFINALNUMBER + " percent chance of making Loyola University.";
            myString = LOYSTR1;
        }
        if (getCollege === "university of michigan ann arbor" || getCollege === "michigan" || getCollege === "university of michigan")
        {
            var UM50 = parseFloat('32');
            var UM75 = parseFloat('34');
            var UM25 = parseFloat('30');
            var UMGPA = parseFloat('3.87');
            var UMADMISSIONRATE = parseFloat('29');
            var MUYGPA = (4 * (getGPA - UMGPA));
            var MUYSCORE = (2 * (getACT - UM50)) / (UM75 - UM25);
            var MUYCOMBO = (UMADMISSIONRATE/100) * Math.pow(2, MUYSCORE) * Math.pow(2, MUYGPA);
            var MUYCHANCE = (100 * 100 * MUYCOMBO)/((100 * MUYCOMBO + (100 - UMADMISSIONRATE)));
            var MUYFINALPERCENT = MUYCHANCE.toFixed(2);
            var MUYFINALNUMBER = Number(MUYFINALPERCENT);
            var MUYSTR1 = "You have a " + MUYFINALNUMBER + " percent chance of making University of Michigan Ann Arbor.";
            myString = MUYSTR1;
        }
        if (getCollege === "purdue university" || getCollege === "purdue") 
        {
            var PU50 = parseFloat('28');
            var PU75 = parseFloat('31');
            var PU25 = parseFloat('25');
            var PUGPA = parseFloat('3.72');
            var PUADMISSIONRATE = parseFloat('56');
            var POYGPA = (4 * (getGPA - PUGPA));
            var POYSCORE = (2 * (getACT - PU50)) / (PU75 - PU25);
            var POYCOMBO = (PUADMISSIONRATE/100) * Math.pow(2, POYSCORE) * Math.pow(2, POYGPA);
            var POYCHANCE = (100 * 100 * POYCOMBO)/((100 * POYCOMBO + (100 - PUADMISSIONRATE)));
            var POYFINALPERCENT = POYCHANCE.toFixed(2);
            var POYFINALNUMBER = Number(POYFINALPERCENT);
            var POYSTR1 = "You have a " + POYFINALNUMBER + " percent chance of making Purdue University.";
            myString = POYSTR1;
        }
        if(getCollege === "marquette university" || getCollege === "marquette")
        {
            var MU50 = parseFloat('27');
            var MU75 = parseFloat('29');
            var MU25 = parseFloat('24');
            var MUGPA = parseFloat('3.58');
            var MUADMISSIONRATE = parseFloat('74');
            var MOYGPA = (4 * (getGPA - MUGPA));
            var MOYSCORE = (2 * (getACT - MU50)) / (MU75 - MU25);
            var MOYCOMBO = (MUADMISSIONRATE/100) * Math.pow(2, MOYSCORE) * Math.pow(2, MOYGPA);
            var MOYCHANCE = (100 * 100 * MOYCOMBO)/((100 * MOYCOMBO + (100 - MUADMISSIONRATE)));
            var MOYFINALPERCENT = MOYCHANCE.toFixed(2);
            var MOYFINALNUMBER = Number(MOYFINALPERCENT);
            var MOYSTR1 = "You have a " + MOYFINALNUMBER + " percent chance of making Marquette University.";
            myString = MOYSTR1;
        }
        if(getCollege === "university of iowa" || getCollege === "iowa")
        {
            var UI50 = parseFloat('26');
            var UI75 = parseFloat('26');
            var UI25 = parseFloat('23');
            var UIGPA = parseFloat('3.64');
            var UIADMISSIONRATE = parseFloat('81');
            var UOYGPA = (4 * (getGPA - UIGPA));
            var UOYSCORE = (2 * (getACT - UI50)) / (UI75 - UI25);
            var UOYCOMBO = (UIADMISSIONRATE/100) * Math.pow(2, UOYSCORE) * Math.pow(2, UOYGPA);
            var UOYCHANCE = (100 * 100 * UOYCOMBO)/((100 * UOYCOMBO + (100 - UIADMISSIONRATE)));
            var UOYFINALPERCENT = UOYCHANCE.toFixed(2);
            var UOYFINALNUMBER = Number(UOYFINALPERCENT);
            var UOYSTR1 = "You have a " + UOYFINALNUMBER + " percent chance of making University of Iowa.";
            myString = UOYSTR1;
        }
        if(getCollege === "depaul university" || getCollege === "de paul" || getCollege === "de paul university")
        {
            var DPU50 = parseFloat('25');
            var DPU75 = parseFloat('28');
            var DPU25 = parseFloat('22');
            var DPUGPA = parseFloat('3.56');
            var DPUADMISSIONRATE = parseFloat('72');
            var DOYGPA = (4 * (getGPA - DPUGPA));
            var DOYSCORE = (2 * (getACT - DPU50)) / (DPU75 - DPU25);
            var DOYCOMBO = (DPUADMISSIONRATE/100) * Math.pow(2, DOYSCORE) * Math.pow(2, DOYGPA);
            var DOYCHANCE = (100 * 100 * DOYCOMBO)/((100 * DOYCOMBO + (100 - DPUADMISSIONRATE)));
            var DOYFINALPERCENT = DOYCHANCE.toFixed(2);
            var DOYFINALNUMBER = Number(DOYFINALPERCENT);
            var DOYSTR1 = "You have a " + DOYFINALNUMBER + " percent chance of making DePaul University.";
            myString = DOYSTR1;
        }
        if(getCollege === "indiana university bloomington" || getCollege === "iu" || getCollege === "indiana university") 
        {
            var IU50 = parseFloat('28');
            var IU75 = parseFloat('31');
            var IU25 = parseFloat('25');
            var IUGPA = parseFloat('3.64');
            var IUADMISSIONRATE = parseFloat('78');
            var IOYGPA = (4 * (getGPA - IUGPA));
            var IOYSCORE = (2 * (getACT - IU50)) / (IU75 - IU25);
            var IOYCOMBO = (IUADMISSIONRATE/100) * Math.pow(2, IOYSCORE) * Math.pow(2, IOYGPA);
            var IOYCHANCE = (100 * 100 * IOYCOMBO)/((100 * IOYCOMBO + (100 - IUADMISSIONRATE)));
            var IOYFINALPERCENT = IOYCHANCE.toFixed(2);
            var IOYFINALNUMBER = Number(IOYFINALPERCENT);
            var IOYSTR1 = "You have a " + IOYFINALNUMBER + " percent chance of making Indiana University Bloomington.";
            myString = IOYSTR1;
        }
        if(getCollege === "illinois state university" || getCollege === "isu" || getCollege === "illinois state") 
        {
            var ISU50 = parseFloat('24');
            var ISU75 = parseFloat('26');
            var ISU25 = parseFloat('22');
            var ISUGPA = parseFloat('3.41');
            var ISUADMISSIONRATE = parseFloat('80');
            var BOYGPA = (4 * (getGPA - ISUGPA));
            var BOYSCORE = (2 * (getACT - ISU50)) / (ISU75 - ISU25);
            var BOYCOMBO = (ISUADMISSIONRATE/100) * Math.pow(2, BOYSCORE) * Math.pow(2, BOYGPA);
            var BOYCHANCE = (100 * 100 * BOYCOMBO)/((100 * BOYCOMBO + (100 - ISUADMISSIONRATE)));
            var BOYFINALPERCENT = BOYCHANCE.toFixed(2);
            var BOYFINALNUMBER = Number(BOYFINALPERCENT);
            var BOYSTR1 = "You have a " + BOYFINALNUMBER + " percent chance of making Illinois State University.";
            myString = BOYSTR1;
        }
        if(getCollege === "university of wisconsin madison" || getCollege === "uw madison" || getCollege === "university of wisconsin")
        {
            var UW50 = parseFloat('29');
            var UW75 = parseFloat('31');
            var UW25 = parseFloat('27');
            var UWGPA = parseFloat('3.85');
            var UWADMISSIONRATE = parseFloat('49');
            var YOYGPA = (4 * (getGPA - UWGPA));
            var YOYSCORE = (2 * (getACT - UW50)) / (UW75 - UW25);
            var YOYCOMBO = (UWADMISSIONRATE/100) * Math.pow(2, YOYSCORE) * Math.pow(2, YOYGPA);
            var YOYCHANCE = (100 * 100 * YOYCOMBO)/((100 * YOYCOMBO + (100 - UWADMISSIONRATE)));
            var YOYFINALPERCENT = YOYCHANCE.toFixed(2);
            var YOYFINALNUMBER = Number(YOYFINALPERCENT);
            var YOYSTR1 = "You have a " + YOYFINALNUMBER + " percent chance of making University of Wisconsin Madison.";
            myString = YOYSTR1;
        }
        if(getCollege === "university of illinois urbana champaign" || getCollege === "uiuc" || getCollege === "university of illinois"){
            var UIUC50 = parseFloat('30');
            var UIUC75 = parseFloat('33');
            var UIUC25 = parseFloat('27');
            var UIUCGPA = parseFloat('3.83');
            var UIUCADMISSIONRATE = parseFloat('66');
            var TOYGPA = (4 * (getGPA - UIUCGPA));
            var TOYSCORE = (2 * (getACT - UIUC50)) / (UIUC75 - UIUC25);
            var TOYCOMBO = (UIUCADMISSIONRATE/100) * Math.pow(2, TOYSCORE) * Math.pow(2, TOYGPA);
            var TOYCHANCE = (100 * 100 * TOYCOMBO)/((100 * TOYCOMBO + (100 - UIUCADMISSIONRATE)));
            var TOYFINALPERCENT = TOYCHANCE.toFixed(2);
            var TOYFINALNUMBER = Number(TOYFINALPERCENT);
            var TOYSTR1 = "You have a " + TOYFINALNUMBER + " percent chance of making University of Illinois Urbana Champaign.";
            myString = TOYSTR1;
        }
        this.response.speak(myString);
        this.emit(':responseReady');
    },
    "AMAZON.CancelIntent": function() {
        this.response.speak("Ok, let\'s play again soon.");
        this.emit(':responseReady');
    },
    "AMAZON.StopIntent": function() {
        this.response.speak("Ok, let\'s play again soon.");
        this.emit(':responseReady');
    },
    "AMAZON.HelpIntent": function() {
        var helpOutput = "You can ask Alexa for your college chances.";
        var reprompt = "What would you like to do?";
        this.response.speak(helpOutput + " " + reprompt);
        this.emit(':responseReady');
    },
    "AMAZON.FallbackIntent": function() {
        var fallbackHelp = "You can ask Alexa for your college chances.";
        var fallbackReprompt = "What would you like to do?";
        this.response.speak(fallbackHelp + " " + fallbackReprompt);
        this.emit(':responseReady');
    }
}
exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context, callback);
    alexa.appId = "amzn1.ask.skill.a7d0d3f1-7232-47be-b9c5-4b0f2f29995a";
    alexa.registerHandlers(handlers); 
    alexa.execute(); 
};
