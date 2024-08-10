
import Snatrypad from "../Assets/pad.png"
import Beauty from "../Assets/Beauty.jpg"
import Tirepucnture from "../Assets/Bike.png"
import Mobilerepair from "../Assets/Moterrevindign.png"
import Bike from "../Assets/Bike.pdf"
import Santery from "../Assets/Snatry.pdf"
import Beautys from "../Assets/Beauty.pdf"
import Yuvava from "../Assets/YuvaRojgar.pdf"



export const Fomdfata = [
    {
        inputType: "text",
        inputName: "SurName"
    },
    {
        inputType: "text",
        inputName: "First Name"
    },
    {
        inputType: "text",
        inputName: "Father/Husband Name"
    },
    {
        inputType: "date",
        inputName: "Date of Birth"
    },
    {
        inputType: "select",
        inputName: "Gender",
        options: ["Male", "Female", "Other"]
    },
    {
        inputType: "select",
        inputName: "Marital Staus",
        options: ["Married", "Single", "Widow"]
    },
    {
        inputType: "select",
        inputName: "Category",
        options: ["St", "Sc", "Obc","Open","Ews","Other"]
    },
    {

        inputType: "text",
        inputName: "Cast Certificate No"
    },
    {
        inputType: "date",
        inputName: "Cast Certificate Date"
    },
    {

        inputType: "number",
        inputName: "Number"
    },
    {

        inputType: "number",
        inputName: "Age"
    },
    {
        inputType: "select",
        inputName: "Designation",
        options: ["Farmer", "Job","Gov Job"]
    },
    {

        inputType: "text",
        inputName: "Adress"
    },
    {

        inputType: "text",
        inputName: "District"
    },
    {

        inputType: "text",
        inputName: "State"
    },
    {

        inputType: "number",
        inputName: "Pincode"
    },
    {

        inputType: "number",
        inputName: "Adhar Card Number"
    },
     {

        inputType: "number",
        inputName: "Anual Income"
    },
    {

        inputType: "number",
        inputName: "Number of  Family Membor's In Family"
    },
    
    {
        inputType: "select",
        inputName: "Gov Help",
        options: ["YEs", "No"]
    },
     {
        inputType: "select",
        inputName: "Are you Disable",
        options: ["YEs", "No"]
    },
    {
        inputType: "select",
        inputName: "Do you have Your Own House",
        options: ["YEs", "No"]
    },
];



export const Formdetali = {
    1: {
        pdf: Santery,
        Title: "Sanatary pad kit",
        imge: Snatrypad,
        detailtext: "મહિલા હેલ્થ અવેરનેસ પ્રોજેકટ ઘણી મહિલાઓને શિક્ષણ ન હોવાથી માસિક દરમિયાન અલગ અલગ કપડાઓ વાપરતી હોય છે , કપડાઓની નિયમિત સફાઈ ન થવાથી બેક્ટરીયા ઉત્પન થાય છે અને ગુપ્ત રોગ થવાના ચાન્સ વધી જાય છે ,આવું ન થાય તે માટે મહિલાઓને જાગૃત કરીને સેનેટરી પેડ આપવા"
    },
    3: {
        Title: "Motar revainding and light fetting",
        imge: Mobilerepair,
        detailtext: "ધણા યુવાનો જોડે સ્કિલ છે પણ ધંધો શરૂ કરવા માટે સાધનો હોતા નથી , આવા યુવાનો ને સાધનો પૂરા પાડવા જેથી પોતાનો રોજગાર મેળવી શકે . ધણા યુવાનો જોડે સ્કિલ છે એવાં યુવાનો  પ્રાઈવેટ જોબ કરવા માગે છે પણ સર્ટિફિકેટ ના હોવાના કારણે જોબ કરી શકતા નથી તો આવા યુવનાઓને સર્ટિફિકેટ અને સાધનોની  કીટ આપવી."
        ,
        pdf: Bike
    },
    2: {
        Title: "Beauty Parlor Kit",
        imge: Beauty,
        detailtext: "રાજ્યના આર્થિક રીતે મજબૂત ન હોય તેવા નાગરિકો પાસે કૌશલ્ય હોય છે પણ રોજગાર ઊભો કરવા માટે નાણાકીય સગવડ હોતી નથી , ગણી  બહેનોને બ્યુટી પાર્લર ના વ્યવસાય રસ હોય છે પણ બ્યુટી પાર્લર ની વસ્તુઓ મોઘી હોવાથી તે વ્યવસાય કરી સકતી નથી , આવી બહેનો આ કીટ મેળવીને  વ્યવસાય કરી અને પોતાનું જીવન ગુજારે .",
        pdf: Beautys
    },
    4: {
        Title: "Youva Svrojgar Yojna ",
        imge: Tirepucnture,
        detailtext: "ધણા યુવાનો જોડે સ્કિલ છે પણ ધંધો શરૂ કરવા માટે સાધનો હોતા નથી , આવા યુવાનો ને સાધનો પૂરા પાડવા જેથી પોતાનો રોજગાર મેળવી શકે .ધણા યુવાનો જોડે સ્કિલ છે એવાં યુવાનો  પ્રાઈવેટ જોબ કરવા માગે છે પણ સર્ટિફિકેટ ના હોવાના કારણે જોબ કરી શકતા નથી તો આવા યુવનાઓને સર્ટિફિકેટ અને સાધનોની  કીટ આપવી.",
        pdf: Yuvava
    }

} 