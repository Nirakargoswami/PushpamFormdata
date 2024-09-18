
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
        inputName: "First Name",
        translate: "પ્રથમ નામ"
    },
    {
        inputType: "text",
        inputName: "Father/Husband Name",
        translate: "પિતાનું/પતિનું નામ"
    },
    {
        inputType: "text",
        inputName: "Surname",
        translate: "અટક"
    },
    {
        inputType: "date",
        inputName: "Date of Birth",
        translate: "Date of Birth"
    },
    {
        inputType: "select",
        inputName: "Gender",
        translate: "Gender",
        options: ["Male", "Female", "Other"]
    },
    {
        inputType: "select",
        inputName: "Marital Staus",
        translate: "વૈવાહિક સ્થિતિ",
        options: ["Married", "Single", "Widow"]
    },
    {
        inputType: "select",
        inputName: "Category",
        translate: "વર્ગ",
        options: ["St", "Sc", "Obc", "Open", "Ews", "Other"]
    },
    {
        inputType: "text",
        inputName: "Cast Certificate No",
        translate: "જાતિ પ્રમાણપત્ર નંબર"
    },
  
    {
        inputType: "number",
        inputName: "Phone Number",
        translate: "નંબર"
    },
    {
        inputType: "number",
        inputName: "Age",
        translate: "ઉંમર"
    },
    {
        inputType: "select",
        inputName: "Designation",
        translate: "હોદ્દો",
        options: ["Farmer", "Job", "Gov Job","House Wife"]
    },
    {
        inputType: "text",
        inputName: "Adress",
        translate: "સરનામું"
    },
    {
        inputType: "text",
        inputName: "District",
        translate: "જિલ્લો"
    },
    {
        inputType: "text",
        inputName: "State",
        translate: "રાજ્ય"
    },
    {
        inputType: "number",
        inputName: "Pincode",
        translate: "પિનકોડ"
    },
    {
        inputType: "number",
        inputName: "Adhar Card Number",
        translate:"આધાર કાર્ડ નંબર"
    },
    {
        inputType: "number",
        inputName: "Anual Income",
        translate: "વાર્ષિક આવક"
    },
    {
        inputType: "number",
        inputName: "Number of Family Membor's In Family",
        translate: "કુટુંબમાં પરિવારના સભ્યોની સંખ્યા"
    },
    {
        inputType: "select",
        inputName: "Gov Help",
        translate: "સરકારી મદદ",
        options: ["Yes", "No"]
    },
    {
        inputType: "select",
        inputName: "Are you Disable",
        translate: "તમે અપંગ છો?",
        options: ["Yes", "No"]
    },
    {
        inputType: "select",
        inputName: "Do you have Your Own House",
        translate: "તમે તમારું ઘર ધરાવો છો?",
        options: ["Yes", "No"]
    }
];




export const Formdetali = {
    1: {
        pdf: Santery,
        Title: "સેનેટરી પેડની કીટ",
        imge: Snatrypad,
        detailtext: "મહિલા હેલ્થ અવેરનેસ પ્રોજેકટ ઘણી મહિલાઓને શિક્ષણ ન હોવાથી માસિક દરમિયાન અલગ અલગ કપડાઓ વાપરતી હોય છે , કપડાઓની નિયમિત સફાઈ ન થવાથી બેક્ટરીયા ઉત્પન થાય છે અને ગુપ્ત રોગ થવાના ચાન્સ વધી જાય છે ,આવું ન થાય તે માટે મહિલાઓને જાગૃત કરીને સેનેટરી પેડ આપવા"
    },
    3: {
        Title: "મોટર રિવાઇન્ડિંગ અને લાઈટ ફિટિંગની કીટ",
        imge: Mobilerepair,
        detailtext: "ધણા યુવાનો જોડે સ્કિલ છે પણ ધંધો શરૂ કરવા માટે સાધનો હોતા નથી , આવા યુવાનો ને સાધનો પૂરા પાડવા જેથી પોતાનો રોજગાર મેળવી શકે . ધણા યુવાનો જોડે સ્કિલ છે એવાં યુવાનો  પ્રાઈવેટ જોબ કરવા માગે છે પણ સર્ટિફિકેટ ના હોવાના કારણે જોબ કરી શકતા નથી તો આવા યુવનાઓને સર્ટિફિકેટ અને સાધનોની  કીટ આપવી.",
        pdf: Bike
    },
    2: {
        Title: "બ્યુટીપાર્લરની  કીટ",
        imge: Beauty,
        detailtext: "રાજ્યના આર્થિક રીતે મજબૂત ન હોય તેવા નાગરિકો પાસે કૌશલ્ય હોય છે પણ રોજગાર ઊભો કરવા માટે નાણાકીય સગવડ હોતી નથી , ગણી  બહેનોને બ્યુટી પાર્લર ના વ્યવસાય રસ હોય છે પણ બ્યુટી પાર્લર ની વસ્તુઓ મોઘી હોવાથી તે વ્યવસાય કરી સકતી નથી , આવી બહેનો આ કીટ મેળવીને  વ્યવસાય કરી અને પોતાનું જીવન ગુજારે .",
        pdf: Beautys
    },
    4: {
        Title: "બાઇક રીપેરીંગ અને ટાયર પંચરની કીટ",
        imge: Tirepucnture,
        detailtext: "ધણા યુવાનો જોડે સ્કિલ છે પણ ધંધો શરૂ કરવા માટે સાધનો હોતા નથી , આવા યુવાનો ને સાધનો પૂરા પાડવા જેથી પોતાનો રોજગાર મેળવી શકે .ધણા યુવાનો જોડે સ્કિલ છે એવાં યુવાનો  પ્રાઈવેટ જોબ કરવા માગે છે પણ સર્ટિફિકેટ ના હોવાના કારણે જોબ કરી શકતા નથી તો આવા યુવનાઓને સર્ટિફિકેટ અને સાધનોની  કીટ આપવી.",
        pdf: Yuvava
    }

} 