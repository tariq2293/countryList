const country1 = [
    {
        name: 'Afghanistan',
        capital: 'Kabul',
        languages: ['Pashto', 'Uzbek', 'Turkmen'],
        population: "42,239,854",
        flag: 'https://flagsapi.com/AF/shiny/64.png',
        currency: 'Afghan afghani'
    },
    {
        name: 'Åland Islands',
        capital: 'Mariehamn',
        languages: ['Swedish'],
        population: 28875,
        flag: 'https://flagsapi.com/AX/shiny/64.png',
        currency: 'Euro'
    },
    {
        name: 'Albania',
        capital: 'Tirana',
        languages: ['Albanian'],
        population: 2886026,
        flag: 'https://flagsapi.com/AL/shiny/64.png',
        currency: 'Albanian lek'
    },
    {
        name: 'Algeria',
        capital: 'Algiers',
        languages: ['Arabic'],
        population: "45,606,480",
        flag: 'https://flagsapi.com/DZ/shiny/64.png',
        currency: 'Algerian dinar'
    },
    {
        name: 'American Samoa',
        capital: 'Pago Pago',
        languages: ['English', 'Samoan'],
        population: 57100,
        flag: 'https://flagsapi.com/AS/shiny/64.png',
        currency: 'United State Dollar'
    },
    {
        name: 'Andorra',
        capital: 'Andorra la Vella',
        languages: ['Catalan'],
        population: 78014,
        flag: 'https://flagdownload.com/wp-content/uploads/Flag_of_Andorra-64x45.png',
        currency: 'Euro'
    },
    {
        name: 'Angola',
        capital: 'Luanda',
        languages: ['Portuguese'],
        population: "36,684,202",
        flag: 'https://flagdownload.com/wp-content/uploads/Flag_of_Angola-64x43.png',
        currency: 'Angolan kwanza'
    },
    {
        name: 'Anguilla',
        capital: 'The Valley',
        languages: ['English'],
        population: 13452,
        flag: 'https://flagsapi.com/AI/shiny/64.png',
        currency: 'East Caribbean dollar'
    },
    {
        name: 'Antarctica',
        capital: '',
        languages: ['English', 'Russian'],
        population: 1000,
        flag: 'https://flagsapi.com/AQ/shiny/64.png',
        currency: 'Australian dollar'
    },
    {
        name: 'Antigua and Barbuda',
        capital: "Saint John's",
        languages: ['English'],
        population: 86295,
        flag: 'https://flagsapi.com/AG/shiny/64.png',
        currency: 'East Caribbean dollar'
    },
    {
        name: 'Argentina',
        capital: 'Buenos Aires',
        languages: ['Spanish', 'Guaraní'],
        population: "45,773,884",
        flag: 'https://flagsapi.com/AR/shiny/64.png',
        currency: 'Argentine peso'
    },
    {
        name: 'Armenia',
        capital: 'Yerevan',
        languages: ['Armenian', 'Russian'],
        population: 2994400,
        flag: 'https://flagsapi.com/AM/shiny/64.png',
        currency: 'Armenian dram'
    },
    {
        name: 'Aruba',
        capital: 'Oranjestad',
        languages: ['Dutch', '(Eastern) Punjabi'],
        population: 107394,
        flag: 'https://flagsapi.com/AW/shiny/64.png',
        currency: 'Aruban florin'
    },
    {
        name: 'Australia',
        capital: 'Canberra',
        languages: ['English'],
        population: "26,439,111",
        flag: 'https://flagsapi.com/AU/shiny/64.png',
        currency: 'Australian dollar'
    },
    {
        name: 'Austria',
        capital: 'Vienna',
        languages: ['German'],
        population: 8725931,
        flag: 'https://flagsapi.com/AT/shiny/64.png',
        currency: 'Euro'
    },
    {
        name: 'Azerbaijan',
        capital: 'Baku',
        languages: ['Azerbaijani'],
        population: 9730500,
        flag: 'https://flagsapi.com/AZ/shiny/64.png',
        currency: 'Azerbaijani manat'
    },
    {
        name: 'Bahamas',
        capital: 'Nassau',
        languages: ['English'],
        population: 378040,
        flag: 'https://flagsapi.com/BS/shiny/64.png',
        currency: 'Bahamian dollar'
    },
    {
        name: 'Bahrain',
        capital: 'Manama',
        languages: ['Arabic'],
        population: 1404900,
        flag: 'https://flagsapi.com/BH/shiny/64.png',
        currency: 'Bahraini dinar'
    },
    {
        name: 'Bangladesh',
        capital: 'Dhaka',
        languages: ['Bengali'],
        population: "172,954,319",
        flag: 'https://flagsapi.com/BD/shiny/64.png',
        currency: 'Bangladeshi taka'
    },
    {
        name: 'Barbados',
        capital: 'Bridgetown',
        languages: ['English'],
        population: 285000,
        flag: 'https://flagsapi.com/BB/shiny/64.png',
        currency: 'Barbadian dollar'
    },
    {
        name: 'Belarus',
        capital: 'Minsk',
        languages: ['Belarusian', 'Russian'],
        population: 9498700,
        flag: 'https://flagsapi.com/BY/shiny/64.png',
        currency: 'New Belarusian ruble'
    },
    {
        name: 'Belgium',
        capital: 'Brussels',
        languages: ['Dutch', 'French', 'German'],
        population: '11,686,140',
        flag: 'https://flagsapi.com/BE/shiny/64.png',
        currency: 'Euro'
    },
    {
        name: 'Belize',
        capital: 'Belmopan',
        languages: ['English', 'Spanish'],
        population: 370300,
        flag: 'https://flagsapi.com/BZ/shiny/64.png',
        currency: 'Belize dollar'
    },
    {
        name: 'Benin',
        capital: 'Porto-Novo',
        languages: ['French'],
        population: "13,712,828",
        flag: 'https://flagsapi.com/BJ/shiny/64.png',
        currency: 'West African CFA franc'
    },
    {
        name: 'Bermuda',
        capital: 'Hamilton',
        languages: ['English'],
        population: 61954,
        flag: 'https://flagsapi.com/BM/shiny/64.png',
        currency: 'Bermudian dollar'
    },
    {
        name: 'Bhutan',
        capital: 'Thimphu',
        languages: ['Dzongkha'],
        population: 775620,
        flag: 'https://flagsapi.com/BT/shiny/64.png',
        currency: 'Bhutanese ngultrum'
    },
    {
        name: 'Bolivia (Plurinational State of)',
        capital: 'Sucre',
        languages: ['Spanish', 'Aymara', 'Quechua'],
        population: "12,388,571",
        flag: 'https://flagsapi.com/BO/shiny/64.png',
        currency: 'Bolivian boliviano'
    },
    {
        name: 'Bosnia and Herzegovina',
        capital: 'Sarajevo',
        languages: ['Bosnian', 'Croatian', 'Serbian'],
        population: 3531159,
        flag: 'https://flagsapi.com/BA/shiny/64.png',
        currency: 'Bosnia and Herzegovina convertible mark'
    },
    {
        name: 'Botswana',
        capital: 'Gaborone',
        languages: ['English', 'Tswana'],
        population: 2141206,
        flag: 'https://flagsapi.com/BW/shiny/64.png',
        currency: 'Botswana pula'
    },
    {
        name: 'Bouvet Island',
        capital: '',
        languages: ['Norwegian', 'Norwegian Bokmål', 'Norwegian Nynorsk'],
        population: 0,
        flag: 'https://flagsapi.com/BV/shiny/64.png',
        currency: 'Norwegian krone'
    },
    {
        name: 'Brazil',
        capital: 'Brasília',
        languages: ['Portuguese'],
        population: "216,422,446",
        flag: 'https://flagsapi.com/BR/shiny/64.png',
        currency: 'Brazilian real'
    },
    {
        name: 'British Indian Ocean Territory',
        capital: 'Diego Garcia',
        languages: ['English'],
        population: 3000,
        flag: 'https://flagdownload.com/wp-content/uploads/Flag_of_Commissioner_of_British_Indian_Ocean_Territory-64x32.png',
        currency: 'United States dollar'
    },
    {
        name: 'Brunei Darussalam',
        capital: 'Bandar Seri Begawan',
        languages: ['Malay'],
        population: 411900,
        flag: 'https://flagsapi.com/BN/shiny/64.png',
        currency: 'Brunei dollar'
    },
    {
        name: 'Bulgaria',
        capital: 'Sofia',
        languages: ['Bulgarian'],
        population: 7153784,
        flag: 'https://flagsapi.com/BG/shiny/64.png',
        currency: 'Bulgarian lev'
    },
    {
        name: 'Burkina Faso',
        capital: 'Ouagadougou',
        languages: ['French', 'Fula'],
        population: "23,251,485",
        flag: 'https://flagsapi.com/BF/shiny/64.png',
        currency: 'West African CFA franc'
    },
    {
        name: 'Burundi',
        capital: 'Bujumbura',
        languages: ['French', 'Kirundi'],
        population: "13,238,559",
        flag: 'https://flagsapi.com/BI/shiny/64.png',
        currency: 'Burundian franc'
    },
    {
        name: 'Cambodia',
        capital: 'Phnom Penh',
        languages: ['Khmer'],
        population: "16,944,826",
        flag: 'https://flagdownload.com/wp-content/uploads/Flag_of_Cambodia-64x41.png',
        currency: 'Cambodian riel'
    },
    {
        name: 'Cameroon',
        capital: 'Yaoundé',
        languages: ['English', 'French'],
        population: "28,647,293",
        flag: 'https://flagsapi.com/CM/shiny/64.png',
        currency: 'Central African CFA franc'
    },
    {
        name: 'Canada',
        capital: 'Ottawa',
        languages: ['English', 'French'],
        population: "38,781,291",
        flag: 'https://flagsapi.com/CA/shiny/64.png',
        currency: 'Canadian dollar'
    },
    {
        name: 'Cabo Verde',
        capital: 'Praia',
        languages: ['Portuguese'],
        population: 531239,
        flag: 'https://flagsapi.com/CV/shiny/64.png',
        currency: 'Cape Verdean escudo'
    },
    {
        name: 'Cayman Islands',
        capital: 'George Town',
        languages: ['English'],
        population: 58238,
        flag: 'https://flagdownload.com/wp-content/uploads/Flag_of_Cayman_Islands-64x43.png',
        currency: 'Cayman Islands dollar'
    },
    {
        name: 'Central African Republic',
        capital: 'Bangui',
        languages: ['French', 'Sango'],
        population: 4998000,
        flag: 'https://flagdownload.com/wp-content/uploads/Flag_of_Central_African_Republic-64x43.png',
        currency: 'Central African CFA franc'
    },
    {
        name: 'Chad',
        capital: "N'Djamena",
        languages: ['French', 'Arabic'],
        population: "18,278,568",
        flag: 'https://flagdownload.com/wp-content/uploads/Flag_of_Chad-64x43.png',
        currency: 'Central African CFA franc'
    },
    {
        name: 'Chile',
        capital: 'Santiago',
        languages: ['Spanish'],
        population: "19,629,590",
        flag: 'https://flagsapi.com/CL/shiny/64.png',
        currency: 'Chilean peso'
    },
    {
        name: 'China',
        capital: 'Beijing',
        languages: ['Chinese'],
        population: "1,425,671,352",
        flag: 'https://flagsapi.com/CN/shiny/64.png',
        currency: 'Chinese yuan'
    },
    {
        name: 'Christmas Island',
        capital: 'Flying Fish Cove',
        languages: ['English'],
        population: 2072,
        flag: 'https://flagsapi.com/CX/shiny/64.png',
        currency: 'Australian dollar'
    },
    {
        name: 'Cocos (Keeling) Islands',
        capital: 'West Island',
        languages: ['English'],
        population: 550,
        flag: 'https://flagdownload.com/wp-content/uploads/Flag_of_Cocos_Keeling_Islands-64x32.png',
        currency: 'Australian dollar'
    },
    {
        name: 'Colombia',
        capital: 'Bogotá',
        languages: ['Spanish'],
        population: "52,085,168",
        flag: 'https://flagsapi.com/CO/shiny/64.png',
        currency: 'Colombian peso'
    },
    {
        name: 'Comoros',
        capital: 'Moroni',
        languages: ['Arabic', 'French'],
        population: 806153,
        flag: 'https://flagdownload.com/wp-content/uploads/Flag_of_Comoros-64x38.png',
        currency: 'Comorian franc'
    },
    {
        name: 'Congo',
        capital: 'Brazzaville',
        languages: ['French', 'Lingala'],
        population: "102,262,808",
        flag: 'https://flagsapi.com/CG/shiny/64.png',
        currency: 'Central African CFA franc'
    },
    {
        name: 'Cook Islands',
        capital: 'Avarua',
        languages: ['English'],
        population: 18100,
        flag: 'https://flagsapi.com/CK/shiny/64.png',
        currency: 'New Zealand dollar'
    },
    {
        name: 'Costa Rica',
        capital: 'San José',
        languages: ['Spanish'],
        population: 4890379,
        flag: 'https://flagsapi.com/CR/shiny/64.png',
        currency: 'Costa Rican colón'
    },
    {
        name: 'Croatia',
        capital: 'Zagreb',
        languages: ['Croatian'],
        population: 4190669,
        flag: 'https://flagdownload.com/wp-content/uploads/Flag_of_Croatia-64x32.png',
        currency: 'Croatian kuna'
    },
    {
        name: 'Cuba',
        capital: 'Havana',
        languages: ['Spanish'],
        population: "11,194,449",
        flag: 'https://flagsapi.com/CU/shiny/64.png',
        currency: 'Cuban convertible peso'
    },
    {
        name: 'Curaçao',
        capital: 'Willemstad',
        languages: ['Dutch', '(Eastern) Punjabi', 'English'],
        population: 154843,
        flag: 'https://flagsapi.com/CW/shiny/64.png',
        currency: 'Netherlands Antillean guilder'
    },
    {
        name: 'Cyprus',
        capital: 'Nicosia',
        languages: ['Greek (modern)', 'Turkish', 'Armenian'],
        population: 847000,
        flag: 'https://flagsapi.com/CY/shiny/64.png',
        currency: 'Euro'
    },
    {
        name: 'Czech Republic',
        capital: 'Prague',
        languages: ['Czech', 'Slovak'],
        population: 10558524,
        flag: 'https://flagsapi.com/CZ/shiny/64.png',
        currency: 'Czech koruna'
    },
    {
        name: 'Denmark',
        capital: 'Copenhagen',
        languages: ['Danish'],
        population: 5717014,
        flag: 'https://flagsapi.com/DK/shiny/64.png',
        currency: 'Danish krone'
    },
    {
        name: 'Djibouti',
        capital: 'Djibouti',
        languages: ['French', 'Arabic'],
        population: 900000,
        flag: 'https://flagsapi.com/DJ/shiny/64.png',
        currency: 'Djiboutian franc'
    },
    {
        name: 'Dominica',
        capital: 'Roseau',
        languages: ['English'],
        population: 71293,
        flag: 'https://flagdownload.com/wp-content/uploads/Flag_of_Dominica-64x32.png',
        currency: 'East Caribbean dollar'
    },
    {
        name: 'Dominican Republic',
        capital: 'Santo Domingo',
        languages: ['Spanish'],
        population: "11,332,972",
        flag: 'https://flagsapi.com/DO/shiny/64.png',
        currency: 'Dominican peso'
    },
    {
        name: 'Ecuador',
        capital: 'Quito',
        languages: ['Spanish'],
        population: "18,190,484",
        flag: 'https://flagsapi.com/EC/shiny/64.png',
        currency: 'United States dollar'
    },
    {
        name: 'Egypt',
        capital: 'Cairo',
        languages: ['Arabic'],
        population: "112,716,598",
        flag: 'https://flagsapi.com/EG/shiny/64.png',
        currency: 'Egyptian pound'
    },
    {
        name: 'El Salvador',
        capital: 'San Salvador',
        languages: ['Spanish'],
        population: 6520675,
        flag: 'https://flagdownload.com/wp-content/uploads/Flag_of_El_Salvador-64x36.png',
        currency: 'United States dollar'
    },
    {
        name: 'Equatoriala',
        capital: 'Malabo',
        languages: ['Spanish', 'French'],
        population: 1222442,
        flag: 'https://flagdownload.com/wp-content/uploads/Flag_of_Equatorial_Guinea-64x43.png',
        currency: 'Central African CFA franc'
    },
    {
        name: 'Eritrea',
        capital: 'Asmara',
        languages: ['Tigrinya', 'Arabic', 'English'],
        population: 5352000,
        flag: 'https://flagsapi.com/ER/shiny/64.png',
        currency: 'Eritrean nakfa'
    },
    {
        name: 'Estonia',
        capital: 'Tallinn',
        languages: ['Estonian'],
        population: 1315944,
        flag: 'https://flagsapi.com/EE/shiny/64.png',
        currency: 'Euro'
    },
    {
        name: 'Ethiopia',
        capital: 'Addis Ababa',
        languages: ['Amharic'],
        population: "126,527,060",
        flag: 'https://flagsapi.com/ET/shiny/64.png',
        currency: 'Ethiopian birr'
    },
    {
        name: 'Falkland Islands (Malvinas)',
        capital: 'Stanley',
        languages: ['English'],
        population: 2563,
        flag: 'https://flagsapi.com/FK/shiny/64.png',
        currency: 'Falkland Islands pound'
    },
    {
        name: 'Faroe Islands',
        capital: 'Tórshavn',
        languages: ['Faroese'],
        population: 49376,
        flag: 'https://flagsapi.com/FO/shiny/64.png',
        currency: 'Danish krone'
    },
    {
        name: 'Fiji',
        capital: 'Suva',
        languages: ['English', 'Fijian', 'Hindi', 'Urdu'],
        population: 867000,
        flag: 'https://flagsapi.com/FJ/shiny/64.png',
        currency: 'Fijian dollar'
    },
    {
        name: 'Finland',
        capital: 'Helsinki',
        languages: ['Finnish', 'Swedish'],
        population: 5491817,
        flag: 'https://flagsapi.com/FI/shiny/64.png',
        currency: 'Euro'
    },
    {
        name: 'France',
        capital: 'Paris',
        languages: ['French'],
        population: "64,756,584",
        flag: 'https://flagsapi.com/FR/shiny/64.png',
        currency: 'Euro'
    },
    {
        name: 'French Guiana',
        capital: 'Cayenne',
        languages: ['French'],
        population: 254541,
        flag: 'https://flagdownload.com/wp-content/uploads/Flag_of_French_Guiana-64x43.png',
        currency: 'Euro'
    },
    {
        name: 'French Polynesia',
        capital: 'Papeetē',
        languages: ['French'],
        population: 271800,
        flag: 'https://flagdownload.com/wp-content/uploads/Flag_of_French_Polynesia-64x43.png',
        currency: 'CFP franc'
    },
    {
        name: 'Gabon',
        capital: 'Libreville',
        languages: ['French'],
        population: 1802278,
        flag: 'https://flagdownload.com/wp-content/uploads/Flag_of_Gabon-64x48.png',
        currency: 'Central African CFA franc'
    },
    {
        name: 'Gambia',
        capital: 'Banjul',
        languages: ['English'],
        population: 1882450,
        flag: 'https://flagsapi.com/GM/shiny/64.png',
        currency: 'Gambian dalasi'
    },
    {
        name: 'Georgia',
        capital: 'Tbilisi',
        languages: ['Georgian'],
        population: 3720400,
        flag: 'https://flagsapi.com/GE/shiny/64.png',
        currency: 'Georgian Lari'
    },
    {
        name: 'Germany',
        capital: 'Berlin',
        languages: ['German'],
        population: "83,294,633",
        flag: 'https://flagdownload.com/wp-content/uploads/Flag_of_Germany-64x38.png',
        currency: 'Euro'
    },
    {
        name: 'Ghana',
        capital: 'Accra',
        languages: ['English'],
        population: "34,121,985",
        flag: 'https://flagsapi.com/GH/shiny/64.png',
        currency: 'Ghanaian cedi'
    },
    {
        name: 'Gibraltar',
        capital: 'Gibraltar',
        languages: ['English'],
        population: 33140,
        flag: 'https://flagsapi.com/GI/shiny/64.png',
        currency: 'Gibraltar pound'
    },
    {
        name: 'Greece',
        capital: 'Athens',
        languages: ['Greek (modern)'],
        population: 10858018,
        flag: 'https://flagsapi.com/GR/shiny/64.png',
        currency: 'Euro'
    },
    {
        name: 'Greenland',
        capital: 'Nuuk',
        languages: ['Kalaallisut'],
        population: 55847,
        flag: 'https://flagsapi.com/GL/shiny/64.png',
        currency: 'Danish krone'
    },
    {
        name: 'Grenada',
        capital: "St. George's",
        languages: ['English'],
        population: 103328,
        flag: 'https://flagsapi.com/GD/shiny/64.png',
        currency: 'East Caribbean dollar'
    },
    {
        name: 'Guadeloupe',
        capital: 'Basse-Terre',
        languages: ['French'],
        population: 400132,
        flag: 'https://flagdownload.com/wp-content/uploads/Flag_of_Guadeloupe-64x43.png',
        currency: 'Euro'
    },
    {
        name: 'Guam',
        capital: 'Hagåtña',
        languages: ['English', 'Chamorro', 'Spanish'],
        population: 184200,
        flag: 'https://flagsapi.com/GU/shiny/64.png',
        currency: 'United States dollar'
    },
    {
        name: 'Guatemala',
        capital: 'Guatemala City',
        languages: ['Spanish'],
        population: "18,092,026",
        flag: 'https://flagsapi.com/GT/shiny/64.png',
        currency: 'Guatemalan quetzal'
    },
    {
        name: 'Guernsey',
        capital: 'St. Peter Port',
        languages: ['English', 'French'],
        population: 62999,
        flag: 'https://flagsapi.com/GG/shiny/64.png',
        currency: 'British pound'
    },
    {
        name: 'Guinea',
        capital: 'Conakry',
        languages: ['French', 'Fula'],
        population: 12947000,
        flag: 'https://flagsapi.com/GN/shiny/64.png',
        currency: 'Guinean franc'
    },
    {
        name: 'Guinea-Bissau',
        capital: 'Bissau',
        languages: ['Portuguese'],
        population: 1547777,
        flag: 'https://flagsapi.com/GW/shiny/64.png',
        currency: 'West African CFA franc'
    },
    {
        name: 'Guyana',
        capital: 'Georgetown',
        languages: ['English'],
        population: 746900,
        flag: 'https://flagsapi.com/GY/shiny/64.png',
        currency: 'Guyanese dollar'
    },
    {
        name: 'Haiti',
        capital: 'Port-au-Prince',
        languages: ['French', 'Haitian'],
        population: "11,724,763",
        flag: 'https://flagsapi.com/HT/shiny/64.png',
        currency: 'Haitian gourde'
    },
    {
        name: 'Honduras',
        capital: 'Tegucigalpa',
        languages: ['Spanish'],
        population: 8576532,
        flag: 'https://flagsapi.com/HN/shiny/64.png',
        currency: 'Honduran lempira'
    },
    {
        name: 'Hong Kong',
        capital: 'City of Victoria',
        languages: ['English', 'Chinese'],
        population: 7324300,
        flag: 'https://flagsapi.com/HK/shiny/64.png',
        currency: 'Hong Kong dollar'
    },
    {
        name: 'Hungary',
        capital: 'Budapest',
        languages: ['Hungarian'],
        population: 9823000,
        flag: 'https://flagsapi.com/HU/shiny/64.png',
        currency: 'Hungarian forint'
    },
    {
        name: 'Iceland',
        capital: 'Reykjavík',
        languages: ['Icelandic'],
        population: 334300,
        flag: 'https://flagsapi.com/IS/shiny/64.png',
        currency: 'Icelandic króna'
    },
    {
        name: 'India',
        capital: 'New Delhi',
        languages: ['Hindi', 'English'],
        population: "1,428,627,663",
        flag: 'https://flagsapi.com/IN/shiny/64.png',
        currency: 'Indian rupee'
    },
    {
        name: 'Indonesia',
        capital: 'Jakarta',
        languages: ['Indonesian'],
        population: "277,534,122",
        flag: 'https://flagsapi.com/ID/shiny/64.png',
        currency: 'Indonesian rupiah'
    },
    {
        name: "Côte d'Ivoire",
        capital: 'Yamoussoukro',
        languages: ['French'],
        population: "28,873,034",
        flag: 'https://flagdownload.com/wp-content/uploads/Flag_of_Co%CC%82te_dIvoire-64x43.png',
        currency: 'West African CFA franc'
    },
    {
        name: 'Iran (Islamic Republic of)',
        capital: 'Tehran',
        languages: ['Persian (Farsi)'],
        population: "89,172,767",
        flag: 'https://flagsapi.com/IR/shiny/64.png',
        currency: 'Iranian rial'
    },
    {
        name: 'Iraq',
        capital: 'Baghdad',
        languages: ['Arabic', 'Kurdish'],
        population: "45,504,560",
        flag: 'https://flagsapi.com/IQ/shiny/64.png',
        currency: 'Iraqi dinar'
    },
    {
        name: 'Ireland',
        capital: 'Dublin',
        languages: ['Irish', 'English'],
        population: 6378000,
        flag: 'https://flagsapi.com/IE/shiny/64.png',
        currency: 'Euro'
    },
    {
        name: 'Isle of Man',
        capital: 'Douglas',
        languages: ['English', 'Manx'],
        population: 84497,
        flag: 'https://flagsapi.com/IM/shiny/64.png',
        currency: 'British pound'
    },
    {
        name: 'Israel',
        capital: 'Jerusalem',
        languages: ['Hebrew (modern)', 'Arabic'],
        population: 8527400,
        flag: 'https://flagsapi.com/IL/shiny/64.png',
        currency: 'Israeli new shekel'
    },
    {
        name: 'Italy',
        capital: 'Rome',
        languages: ['Italian'],
        population: "58,870,762",
        flag: 'https://flagsapi.com/IT/shiny/64.png',
        currency: 'Euro'
    },
    {
        name: 'Jamaica',
        capital: 'Kingston',
        languages: ['English'],
        population: 2723246,
        flag: 'https://flagsapi.com/JM/shiny/64.png',
        currency: 'Jamaican dollar'
    },
    {
        name: 'Japan',
        capital: 'Tokyo',
        languages: ['Japanese'],
        population: "123,294,513",
        flag: 'https://flagsapi.com/JP/shiny/64.png',
        currency: 'Japanese yen'
    },
    {
        name: 'Jersey',
        capital: 'Saint Helier',
        languages: ['English', 'French'],
        population: 100800,
        flag: 'https://flagsapi.com/JE/shiny/64.png',
        currency: 'British pound'
    },
    {
        name: 'Jordan',
        capital: 'Amman',
        languages: ['Arabic'],
        population: "11,337,052",
        flag: 'https://flagsapi.com/JO/shiny/64.png',
        currency: 'Jordanian dinar'
    },
    {
        name: 'Kazakhstan',
        capital: 'Astana',
        languages: ['Kazakh', 'Russian'],
        population: "19,606,633",
        flag: 'https://flagsapi.com/KZ/shiny/64.png',
        currency: 'Kazakhstani tenge'
    },
    {
        name: 'Kenya',
        capital: 'Nairobi',
        languages: ['English', 'Swahili'],
        population: "55,100,586",
        flag: 'https://flagsapi.com/KE/shiny/64.png',
        currency: 'Kenyan shilling'
    },
    {
        name: 'Kiribati',
        capital: 'South Tarawa',
        languages: ['English'],
        population: 113400,
        flag: 'https://flagsapi.com/KI/shiny/64.png',
        currency: 'Australian dollar'
    },
    {
        name: 'Kuwait',
        capital: 'Kuwait City',
        languages: ['Arabic'],
        population: 4183658,
        flag: 'https://flagsapi.com/KW/shiny/64.png',
        currency: 'Kuwaiti dinar'
    },
    {
        name: 'Kyrgyzstan',
        capital: 'Bishkek',
        languages: ['Kyrgyz', 'Russian'],
        population: 6047800,
        flag: 'https://flagsapi.com/KG/shiny/64.png',
        currency: 'Kyrgyzstani som'
    },
    {
        name: "Lao People's Democratic Republic",
        capital: 'Vientiane',
        languages: ['Lao'],
        population: 6492400,
        flag: 'https://flagsapi.com/LA/shiny/64.png',
        currency: 'Lao kip'
    },
    {
        name: 'Latvia',
        capital: 'Riga',
        languages: ['Latvian'],
        population: 1961600,
        flag: 'https://flagsapi.com/LV/shiny/64.png',
        currency: 'Euro'
    },
    {
        name: 'Lebanon',
        capital: 'Beirut',
        languages: ['Arabic', 'French'],
        population: 5988000,
        flag: 'https://flagsapi.com/LB/shiny/64.png',
        currency: 'Lebanese pound'
    },
    {
        name: 'Lesotho',
        capital: 'Maseru',
        languages: ['English', 'Southern Sotho'],
        population: 1894194,
        flag: 'https://flagsapi.com/LS/shiny/64.png',
        currency: 'Lesotho loti'
    },
    {
        name: 'Liberia',
        capital: 'Monrovia',
        languages: ['English'],
        population: 4615000,
        flag: 'https://flagsapi.com/LR/shiny/64.png',
        currency: 'Liberian dollar'
    },
    {
        name: 'Libya',
        capital: 'Tripoli',
        languages: ['Arabic'],
        population: 6385000,
        flag: 'https://flagsapi.com/LY/shiny/64.png',
        currency: 'Libyan dinar'
    },
    {
        name: 'Liechtenstein',
        capital: 'Vaduz',
        languages: ['German'],
        population: 37623,
        flag: 'https://flagsapi.com/LI/shiny/64.png',
        currency: 'Swiss franc'
    },
    {
        name: 'Lithuania',
        capital: 'Vilnius',
        languages: ['Lithuanian'],
        population: 2872294,
        flag: 'https://flagsapi.com/LT/shiny/64.png',
        currency: 'Euro'
    },
    {
        name: 'Luxembourg',
        capital: 'Luxembourg',
        languages: ['French', 'German', 'Luxembourgish'],
        population: 576200,
        flag: 'https://flagsapi.com/LU/shiny/64.png',
        currency: 'Euro'
    },
    {
        name: 'Macao',
        capital: '',
        languages: ['Chinese', 'Portuguese'],
        population: 649100,
        flag: 'https://flagsapi.com/MO/shiny/64.png',
        currency: 'Macanese pataca'
    },
    {
        name: 'Madagascar',
        capital: 'Antananarivo',
        languages: ['French', 'Malagasy'],
        population: "30,325,732",
        flag: 'https://flagsapi.com/MG/shiny/64.png',
        currency: 'Malagasy ariary'
    },
    {
        name: 'Malawi',
        capital: 'Lilongwe',
        languages: ['English', 'Chichewa'],
        population: "20,931,751",
        flag: 'https://flagsapi.com/MW/shiny/64.png',
        currency: 'Malawian kwacha'
    },
    {
        name: 'Malaysia',
        capital: 'Kuala Lumpur',
        languages: ['Malaysian'],
        population: "34,308,525",
        flag: 'https://flagsapi.com/MY/shiny/64.png',
        currency: 'Malaysian ringgit'
    },
    {
        name: 'Maldives',
        capital: 'Malé',
        languages: ['Divehi'],
        population: 344023,
        flag: 'https://flagsapi.com/MV/shiny/64.png',
        currency: 'Maldivian rufiyaa'
    },
    {
        name: 'Mali',
        capital: 'Bamako',
        languages: ['French'],
        population: "23,293,698",
        flag: 'https://flagdownload.com/wp-content/uploads/Flag_of_Mali-64x43.png',
        currency: 'West African CFA franc'
    },
    {
        name: 'Malta',
        capital: 'Valletta',
        languages: ['Maltese', 'English'],
        population: 425384,
        flag: 'https://flagsapi.com/ML/shiny/64.png',
        currency: 'Euro'
    },
    {
        name: 'Marshall Islands',
        capital: 'Majuro',
        languages: ['English', 'Marshallese'],
        population: 54880,
        flag: 'https://flagsapi.com/MH/shiny/64.png',
        currency: 'United States dollar'
    },
    {
        name: 'Martinique',
        capital: 'Fort-de-France',
        languages: ['French'],
        population: 378243,
        flag: 'https://flagsapi.com/MQ/shiny/64.png',
        currency: 'Euro'
    },
    {
        name: 'Mauritania',
        capital: 'Nouakchott',
        languages: ['Arabic'],
        population: 3718678,
        flag: 'https://flagsapi.com/MR/shiny/64.png',
        currency: 'Mauritanian ouguiya'
    },
    {
        name: 'Mauritius',
        capital: 'Port Louis',
        languages: ['English'],
        population: 1262879,
        flag: 'https://flagsapi.com/MU/shiny/64.png',
        currency: 'Mauritian rupee'
    },
    {
        name: 'Mayotte',
        capital: 'Mamoudzou',
        languages: ['French'],
        population: 226915,
        flag: 'https://flagdownload.com/wp-content/uploads/Flag_of_Mayotte-64x43.png',
        currency: 'Euro'
    },
    {
        name: 'Mexico',
        capital: 'Mexico City',
        languages: ['Spanish'],
        population: "128,455,567",
        flag: 'https://flagsapi.com/MX/shiny/64.png ',
        currency: 'Mexican peso'
    },
    {
        name: 'Moldova (Republic of)',
        capital: 'Chișinău',
        languages: ['Romanian'],
        population: 3553100,
        flag: 'https://flagsapi.com/MD/shiny/64.png',
        currency: 'Moldovan leu'
    },
    {
        name: 'Monaco',
        capital: 'Monaco',
        languages: ['French'],
        population: 38400,
        flag: 'https://flagsapi.com/MO/shiny/64.png',
        currency: 'Euro'
    },
    {
        name: 'Mongolia',
        capital: 'Ulan Bator',
        languages: ['Mongolian'],
        population: 3093100,
        flag: 'https://flagsapi.com/MN/shiny/64.png',
        currency: 'Mongolian tögrög'
    },
    {
        name: 'Montenegro',
        capital: 'Podgorica',
        languages: ['Serbian', 'Bosnian', 'Albanian', 'Croatian'],
        population: 621810,
        flag: 'https://flagsapi.com/ME/shiny/64.png',
        currency: 'Euro'
    },
    {
        name: 'Montserrat',
        capital: 'Plymouth',
        languages: ['English'],
        population: 4922,
        flag: 'https://flagsapi.com/MS/shiny/64.png',
        currency: 'East Caribbean dollar'
    },
    {
        name: 'Morocco',
        capital: 'Rabat',
        languages: ['Arabic'],
        population: "37,840,044",
        flag: 'https://flagsapi.com/MA/shiny/64.png',
        currency: 'Moroccan dirham'
    },
    {
        name: 'Mozambique',
        capital: 'Maputo',
        languages: ['Portuguese'],
        population: "33,897,354",
        flag: 'https://flagsapi.com/MZ/shiny/64.png',
        currency: 'Mozambican metical'
    },
    {
        name: 'Myanmar',
        capital: 'Naypyidaw',
        languages: ['Burmese'],
        population: "54,577,997",
        flag: 'https://flagsapi.com/MM/shiny/64.png',
        currency: 'Burmese kyat'
    },
    {
        name: 'Namibia',
        capital: 'Windhoek',
        languages: ['English', 'Afrikaans'],
        population: 2324388,
        flag: 'https://flagsapi.com/NA/shiny/64.png',
        currency: 'Namibian dollar'
    },
    {
        name: 'Nauru',
        capital: 'Yaren',
        languages: ['English', 'Nauruan'],
        population: 10084,
        flag: 'https://flagsapi.com/NR/shiny/64.png',
        currency: 'Australian dollar'
    },
    {
        name: 'Nepal',
        capital: 'Kathmandu',
        languages: ['Nepali'],
        population: "30,896,590",
        flag: 'https://flagsapi.com/NP/shiny/64.png',
        currency: 'Nepalese rupee'
    },
    {
        name: 'Netherlands',
        capital: 'Amsterdam',
        languages: ['Dutch'],
        population: "17,618,299",
        flag: 'https://flagsapi.com/NL/shiny/64.png',
        currency: 'Euro'
    },
    {
        name: 'New Caledonia',
        capital: 'Nouméa',
        languages: ['French'],
        population: 268767,
        flag: 'https://flagsapi.com/NC/shiny/64.png',
        currency: 'CFP franc'
    },
    {
        name: 'New Zealand',
        capital: 'Wellington',
        languages: ['English', 'Māori'],
        population: 4697854,
        flag: 'https://flagsapi.com/NZ/shiny/64.png',
        currency: 'New Zealand dollar'
    },
    {
        name: 'Nicaragua',
        capital: 'Managua',
        languages: ['Spanish'],
        population: 6262703,
        flag: 'https://flagsapi.com/NI/shiny/64.png',
        currency: 'Nicaraguan córdoba'
    },
    {
        name: 'Niger',
        capital: 'Niamey',
        languages: ['French'],
        population: "27,202,843",
        flag: 'https://flagsapi.com/NE/shiny/64.png',
        currency: 'West African CFA franc'
    },
    {
        name: 'Nigeria',
        capital: 'Abuja',
        languages: ['English'],
        population: "223,804,632",
        flag: 'https://flagsapi.com/NG/shiny/64.png',
        currency: 'Nigerian naira'
    },
    {
        name: 'Niue',
        capital: 'Alofi',
        languages: ['English'],
        population: 1470,
        flag: 'https://flagsapi.com/NU/shiny/64.png',
        currency: 'New Zealand dollar'
    },
    {
        name: 'Norfolk Island',
        capital: 'Kingston',
        languages: ['English'],
        population: 2302,
        flag: 'https://flagsapi.com/NF/shiny/64.png',
        currency: 'Australian dollar'
    },
    {
        name: 'Northern Mariana Islands',
        capital: 'Saipan',
        languages: ['English', 'Chamorro'],
        population: 56940,
        flag: 'https://flagdownload.com/wp-content/uploads/Flag_of_Northern_Mariana_Islands-64x32.png',
        currency: 'United States dollar'
    },
    {
        name: 'Norway',
        capital: 'Oslo',
        languages: ['Norwegian', 'Norwegian Bokmål', 'Norwegian Nynorsk'],
        population: 5223256,
        flag: 'https://flagsapi.com/NO/shiny/64.png',
        currency: 'Norwegian krone'
    },
    {
        name: 'Oman',
        capital: 'Muscat',
        languages: ['Arabic'],
        population: 4420133,
        flag: 'https://flagsapi.com/OM/shiny/64.png',
        currency: 'Omani rial'
    },
    {
        name: 'Pakistan',
        capital: 'Islamabad',
        languages: ['English', 'Urdu'],
        population: "240,485,658",
        flag: 'https://flagsapi.com/PK/shiny/64.png',
        currency: 'Pakistani rupee'
    },
    {
        name: 'Palau',
        capital: 'Ngerulmud',
        languages: ['English'],
        population: 17950,
        flag: 'https://flagsapi.com/PW/shiny/64.png',
        currency: '[E]'
    },
    {
        name: 'Palestine, State of',
        capital: 'Ramallah',
        languages: ['Arabic'],
        population: 4682467,
        flag: 'https://flagsapi.com/PS/shiny/64.png',
        currency: 'Israeli new sheqel'
    },
    {
        name: 'Panama',
        capital: 'Panama City',
        languages: ['Spanish'],
        population: 3814672,
        flag: 'https://flagsapi.com/PA/shiny/64.png',
        currency: 'Panamanian balboa'
    },
    {
        name: 'Papua New Guinea',
        capital: 'Port Moresby',
        languages: ['English'],
        population: 8083700,
        flag: 'https://flagsapi.com/PG/shiny/64.png',
        currency: 'Papua New Guinean kina'
    },
    {
        name: 'Paraguay',
        capital: 'Asunción',
        languages: ['Spanish', 'Guaraní'],
        population: 6854536,
        flag: 'https://flagsapi.com/PY/shiny/64.png',
        currency: 'Paraguayan guaraní'
    },
    {
        name: 'Peru',
        capital: 'Lima',
        languages: ['Spanish'],
        population: "34,352,719",
        flag: 'https://flagsapi.com/PE/shiny/64.png',
        currency: 'Peruvian sol'
    },
    {
        name: 'Philippines',
        capital: 'Manila',
        languages: ['English'],
        population: "117,337,368",
        flag: 'https://flagsapi.com/PH/shiny/64.png',
        currency: 'Philippine peso'
    },
    {
        name: 'Pitcairn',
        capital: 'Adamstown',
        languages: ['English'],
        population: 56,
        flag: 'https://flagsapi.com/PN/shiny/64.png',
        currency: 'New Zealand dollar'
    },
    {
        name: 'Poland',
        capital: 'Warsaw',
        languages: ['Polish'],
        population: "41,026,067", population: "41,026,067",
        flag: 'https://flagsapi.com/PL/shiny/64.png',
        currency: 'Polish złoty'
    },
    {
        name: 'Portugal',
        capital: 'Lisbon',
        languages: ['Portuguese'],
        population: 10374822,
        flag: 'https://flagsapi.com/PT/shiny/64.png',
        currency: 'Euro'
    },
    {
        name: 'Puerto Rico',
        capital: 'San Juan',
        languages: ['Spanish', 'English'],
        population: 3474182,
        flag: 'https://flagdownload.com/wp-content/uploads/Flag_of_Puerto_Rico-64x43.png',
        currency: 'United States dollar'
    },
    {
        name: 'Qatar',
        capital: 'Doha',
        languages: ['Arabic'],
        population: 2587564,
        flag: 'https://flagsapi.com/QA/shiny/64.png',
        currency: 'Qatari riyal'
    },
    {
        name: 'Réunion',
        capital: 'Saint-Denis',
        languages: ['French'],
        population: 840974,
        flag: 'https://flagsapi.com/RE/shiny/64.png',
        currency: 'Euro'
    },
    {
        name: 'Romania',
        capital: 'Bucharest',
        languages: ['Romanian'],
        population: "19,892,812",
        flag: 'https://flagsapi.com/RO/shiny/64.png',
        currency: 'Romanian leu'
    },
    {
        name: 'Russian Federation',
        capital: 'Moscow',
        languages: ['Russian'],
        population: 146599183,
        flag: 'https://flagsapi.com/RU/shiny/64.png',
        currency: 'Russian ruble'
    },
    {
        name: 'Rwanda',
        capital: 'Kigali',
        languages: ['Kinyarwanda', 'English', 'French'],
        population: "14,094,683",
        flag: 'https://flagsapi.com/RW/shiny/64.png',
        currency: 'Rwandan franc'
    },
    {
        name: 'Saint Barthélemy',
        capital: 'Gustavia',
        languages: ['French'],
        population: 9417,
        flag: 'https://flagdownload.com/wp-content/uploads/Flag_of_Saint_Barthelemy-64x45.png',
        currency: 'Euro'
    },
    {
        name: 'Saint Helena, Ascension and Tristan da Cunha',
        capital: 'Jamestown',
        languages: ['English'],
        population: 4255,
        flag: 'https://flagsapi.com/SH/shiny/64.png',
        currency: 'Saint Helena pound'
    },
    {
        name: 'Saint Kitts and Nevis',
        capital: 'Basseterre',
        languages: ['English'],
        population: 46204,
        flag: 'https://flagdownload.com/wp-content/uploads/Flag_of_Saint_Kitts_and_Nevis-64x43.png',
        currency: 'East Caribbean dollar'
    },
    {
        name: 'Saint Lucia',
        capital: 'Castries',
        languages: ['English'],
        population: 186000,
        flag: 'https://flagdownload.com/wp-content/uploads/Flag_of_Saint_Lucia-64x32.png',
        currency: 'East Caribbean dollar'
    },
    {
        name: 'Saint Pierre and Miquelon',
        capital: 'Saint-Pierre',
        languages: ['French'],
        population: 6069,
        flag: 'https://flagdownload.com/wp-content/uploads/Flag_of_Saint-Pierre_and_Miquelon-64x43.png',
        currency: 'Euro'
    },
    {
        name: 'Saint Vincent and the Grenadines',
        capital: 'Kingstown',
        languages: ['English'],
        population: 109991,
        flag: 'https://flagdownload.com/wp-content/uploads/Flag_of_Saint_Vincent_and_the_Grenadines-64x43.png',
        currency: 'East Caribbean dollar'
    },
    {
        name: 'Samoa',
        capital: 'Apia',
        languages: ['Samoan', 'English'],
        population: 194899,
        flag: 'https://flagdownload.com/wp-content/uploads/Flag_of_Samoa-64x32.png',
        currency: 'Samoan tālā'
    },
    {
        name: 'San Marino',
        capital: 'City of San Marino',
        languages: ['Italian'],
        population: 33005,
        flag: 'https://flagsapi.com/SM/shiny/64.png',
        currency: 'Euro'
    },
    {
        name: 'Sao Tome and Principe',
        capital: 'São Tomé',
        languages: ['Portuguese'],
        population: 187356,
        flag: 'https://flagsapi.com/ST/shiny/64.png',
        currency: 'São Tomé and Príncipe dobra'
    },
    {
        name: 'Saudi Arabia',
        capital: 'Riyadh',
        languages: ['Arabic'],
        population: "36,947,025",
        flag: 'https://flagsapi.com/SA/shiny/64.png',
        currency: 'Saudi riyal'
    },
    {
        name: 'Senegal',
        capital: 'Dakar',
        languages: ['French'],
        population: "17,763,163",
        flag: 'https://flagdownload.com/wp-content/uploads/Flag_of_Senegal-64x43.png',
        currency: 'West African CFA franc'
    },
    {
        name: 'Serbia',
        capital: 'Belgrade',
        languages: ['Serbian'],
        population: 7076372,
        flag: 'https://flagsapi.com/RS/shiny/64.png',
        currency: 'Serbian dinar'
    },
    {
        name: 'Seychelles',
        capital: 'Victoria',
        languages: ['French', 'English'],
        population: 91400,
        flag: 'https://flagdownload.com/wp-content/uploads/Flag_of_Seychelles-64x32.png',
        currency: 'Seychellois rupee'
    },
    {
        name: 'Sierra Leone',
        capital: 'Freetown',
        languages: ['English'],
        population: 7075641,
        flag: 'https://flagdownload.com/wp-content/uploads/Flag_of_Sierra_Leone-64x43.png',
        currency: 'Sierra Leonean leone'
    },
    {
        name: 'Singapore',
        capital: 'Singapore',
        languages: ['English', 'Malay', 'Tamil', 'Chinese'],
        population: 5535000,
        flag: 'https://flagsapi.com/SG/shiny/64.png',
        currency: 'Brunei dollar'
    },
    {
        name: 'Slovakia',
        capital: 'Bratislava',
        languages: ['Slovak'],
        population: 5426252,
        flag: 'https://flagsapi.com/SK/shiny/64.png',
        currency: 'Euro'
    },
    {
        name: 'Slovenia',
        capital: 'Ljubljana',
        languages: ['Slovene'],
        population: 2064188,
        flag: 'https://flagsapi.com/SI/shiny/64.png',
        currency: 'Euro'
    },
    {
        name: 'Solomon Islands',
        capital: 'Honiara',
        languages: ['English'],
        population: 642000,
        flag: 'https://flagsapi.com/SB/shiny/64.png',
        currency: 'Solomon Islands dollar'
    },
    {
        name: 'Somalia',
        capital: 'Mogadishu',
        languages: ['Somali', 'Arabic'],
        population: "18,143,378",
        flag: 'https://flagsapi.com/SO/shiny/64.png',
        currency: 'Somali shilling'
    },
    {
        name: 'South Africa',
        capital: 'Pretoria',
        languages: [
            'Afrikaans',
            'English',
            'Southern Ndebele',
            'Southern Sotho',
            'Swati',
            'Tswana',
            'Tsonga',
            'Venda',
            'Xhosa',
            'Zulu'
        ],
        population: "60,414,495",
        flag: 'https://flagsapi.com/ZA/shiny/64.png',
        currency: 'South African rand'
    },
    {
        name: 'South Georgia and the South Sandwich Islands',
        capital: 'King Edward Point',
        languages: ['English'],
        population: 30,
        flag: 'https://flagdownload.com/wp-content/uploads/Flag_of_South_Georgia_and_the_South_Sandwich_Islands-64x32.png',
        currency: 'British pound'
    },
    {
        name: 'Korea (Republic of)',
        capital: 'Seoul',
        languages: ['Korean'],
        population: "51,784,059",
        flag: 'https://flagsapi.com/KR/shiny/64.png',
        currency: 'South Korean won'
    },
    {
        name: 'South Sudan',
        capital: 'Juba',
        languages: ['English'],
        population: 12131000,
        flag: 'https://flagsapi.com/SS/shiny/64.png',
        currency: 'South Sudanese pound'
    },
    {
        name: 'Spain',
        capital: 'Madrid',
        languages: ['Spanish'],
        population: "47,519,628",
        flag: 'https://flagdownload.com/wp-content/uploads/Flag_of_Spain-64x43.png',
        currency: 'Euro'
    },
    {
        name: 'Sri Lanka',
        capital: 'Colombo',
        languages: ['Sinhalese', 'Tamil'],
        population: "21,893,579",
        flag: 'https://flagdownload.com/wp-content/uploads/Flag_of_Sri_Lanka-64x32.png',
        currency: 'Sri Lankan rupee'
    },
    {
        name: 'Sudan',
        capital: 'Khartoum',
        languages: ['Arabic', 'English'],
        population: "48,109,006",
        flag: 'https://flagsapi.com/SD/shiny/64.png',
        currency: 'Sudanese pound'
    },
    {
        name: 'Suriname',
        capital: 'Paramaribo',
        languages: ['Dutch'],
        population: 541638,
        flag: 'https://flagdownload.com/wp-content/uploads/Flag_of_Suriname-64x43.png',
        currency: 'Surinamese dollar'
    },
    {
        name: 'Swaziland',
        capital: 'Lobamba',
        languages: ['English', 'Swati'],
        population: 1132657,
        flag: 'https://flagsapi.com/SZ/shiny/64.png',
        currency: 'Swazi lilangeni'
    },
    {
        name: 'Sweden',
        capital: 'Stockholm',
        languages: ['Swedish'],
        population: 9894888,
        flag: 'https://flagdownload.com/wp-content/uploads/Flag_of_Sweden-64x40.png',
        currency: 'Swedish krona'
    },
    {
        name: 'Switzerland',
        capital: 'Bern',
        languages: ['German', 'French', 'Italian'],
        population: 8341600,
        flag: 'https://flagdownload.com/wp-content/uploads/Flag_of_Switzerland-64x64.png',
        currency: 'Swiss franc'
    },
    {
        name: 'Syrian Arab Republic',
        capital: 'Damascus',
        languages: ['Arabic'],
        population: "23,227,014",
        flag: 'https://flagsapi.com/SY/shiny/64.png',
        currency: 'Syrian pound'
    },
    {
        name: 'Taiwan',
        capital: 'Taipei',
        languages: ['Chinese'],
        population: "23,923,276",
        flag: 'https://flagdownload.com/wp-content/uploads/Flag_of_Taiwan_Republic_of_China-64x43.png',
        currency: 'New Taiwan dollar'
    },
    {
        name: 'Tajikistan',
        capital: 'Dushanbe',
        languages: ['Tajik', 'Russian'],
        population: 8593600,
        flag: 'https://flagsapi.com/TJ/shiny/64.png',
        currency: 'Tajikistani somoni'
    },
    {
        name: 'Tanzania, United Republic of',
        capital: 'Dodoma',
        languages: ['Swahili', 'English'],
        population: "67,438,106",
        flag: 'https://flagsapi.com/TZ/shiny/64.png',
        currency: 'Tanzanian shilling'
    },
    {
        name: 'Thailand',
        capital: 'Bangkok',
        languages: ['Thai'],
        population: "71,801,279",
        flag: 'https://flagsapi.com/TH/shiny/64.png',
        currency: 'Thai baht'
    },
    {
        name: 'Timor-Leste',
        capital: 'Dili',
        languages: ['Portuguese'],
        population: 1167242,
        flag: 'https://flagsapi.com/TL/shiny/64.png',
        currency: 'United States dollar'
    },
    {
        name: 'Togo',
        capital: 'Lomé',
        languages: ['French'],
        population: 7143000,
        flag: 'https://flagsapi.com/TG/shiny/64.png',
        currency: 'West African CFA franc'
    },
    {
        name: 'Tokelau',
        capital: 'Fakaofo',
        languages: ['English'],
        population: 1411,
        flag: 'https://flagsapi.com/TK/shiny/64.png',
        currency: 'New Zealand dollar'
    },
    {
        name: 'Tonga',
        capital: "Nuku'alofa",
        languages: ['English', 'Tonga (Tonga Islands)'],
        population: 103252,
        flag: 'https://flagsapi.com/TO/shiny/64.png',
        currency: 'Tongan paʻanga'
    },
    {
        name: 'Trinidad and Tobago',
        capital: 'Port of Spain',
        languages: ['English'],
        population: 1349667,
        flag: 'https://flagsapi.com/TT/shiny/64.png',
        currency: 'Trinidad and Tobago dollar'
    },
    {
        name: 'Tunisia',
        capital: 'Tunis',
        languages: ['Arabic'],
        population: "12,458,223",
        flag: 'https://flagsapi.com/TN/shiny/64.png',
        currency: 'Tunisian dinar'
    },
    {
        name: 'Turkey',
        capital: 'Ankara',
        languages: ['Turkish'],
        population: "85,816,199",
        flag: 'https://flagsapi.com/TR/shiny/64.png',
        currency: 'Turkish lira'
    },
    {
        name: 'Turkmenistan',
        capital: 'Ashgabat',
        languages: ['Turkmen', 'Russian'],
        population: 4751120,
        flag: 'https://flagsapi.com/TM/shiny/64.png',
        currency: 'Turkmenistan manat'
    },
    {
        name: 'Turks and Caicos Islands',
        capital: 'Cockburn Town',
        languages: ['English'],
        population: 31458,
        flag: 'https://flagsapi.com/TC/shiny/64.png',
        currency: 'United States dollar'
    },
    {
        name: 'Tuvalu',
        capital: 'Funafuti',
        languages: ['English'],
        population: 10640,
        flag: 'https://flagsapi.com/TV/shiny/64.png',
        currency: 'Australian dollar'
    },
    {
        name: 'Uganda',
        capital: 'Kampala',
        languages: ['English', 'Swahili'],
        population: "48,582,334",
        flag: 'https://flagdownload.com/wp-content/uploads/Flag_of_Uganda_Flat_Round-128x128.png',
        currency: 'Ugandan shilling'
    },
    {
        name: 'Ukraine',
        capital: 'Kiev',
        languages: ['Ukrainian'],
        population: "36,744,634",
        flag: 'https://flagsapi.com/UA/shiny/64.png',
        currency: 'Ukrainian hryvnia'
    },
    {
        name: 'United Arab Emirates',
        capital: 'Abu Dhabi',
        languages: ['Arabic'],
        population: 9856000,
        flag: 'https://flagsapi.com/AE/shiny/64.png',
        currency: 'United Arab Emirates dirham'
    },
    {
        name: 'United States of America',
        capital: 'Washington, D.C.',
        languages: ['English'],
        population: "339,996,563",
        flag: 'https://flagsapi.com/US/shiny/64.png',
        currency: 'United States dollar'
    },
    {
        name: 'Uruguay',
        capital: 'Montevideo',
        languages: ['Spanish'],
        population: 3480222,
        flag: 'https://flagsapi.com/UY/shiny/64.png',
        currency: 'Uruguayan peso'
    },
    {
        name: 'Uzbekistan',
        capital: 'Tashkent',
        languages: ['Uzbek', 'Russian'],
        population: "35,163,944",
        flag: 'https://flagsapi.com/UZ/shiny/64.png',
        currency: "Uzbekistani so'm"
    },
    {
        name: 'Vanuatu',
        capital: 'Port Vila',
        languages: ['Bislama', 'English', 'French'],
        population: 277500,
        flag: 'https://flagsapi.com/VU/shiny/64.png',
        currency: 'Vanuatu vatu'
    },
    {
        name: 'Venezuela (Bolivarian Republic of)',
        capital: 'Caracas',
        languages: ['Spanish'],
        population: "28,838,499",
        flag: 'https://flagsapi.com/VE/shiny/64.png',
        currency: 'Venezuelan bolívar'
    },
    {
        name: 'VietNam',
        capital: 'Hanoi',
        languages: ['Vietnamese'],
        population: "98,858,950",
        flag: 'https://flagsapi.com/VN/shiny/64.png',
        currency: 'Vietnamese đồng'
    },
    {
        name: 'Wallis and Futuna',
        capital: 'Mata-Utu',
        languages: ['French'],
        population: 11750,
        flag: 'https://flagsapi.com/WF/shiny/64.png',
        currency: 'CFP franc'
    },
    {
        name: 'Yemen',
        capital: "Sana'a",
        languages: ['Arabic'],
        population: "34,449,825",
        flag: 'https://flagsapi.com/YE/shiny/64.png',
        currency: 'Yemeni rial'
    },
    {
        name: 'Zambia',
        capital: 'Lusaka',
        languages: ['English'],
        population: "20,569,737",
        flag: 'https://flagsapi.com/ZM/shiny/64.png',
        currency: 'Zambian kwacha'
    },
    {
        name: 'Zimbabwe',
        capital: 'Harare',
        languages: ['English', 'Shona', 'Northern Ndebele'],
        population: "16,665,409",
        flag: 'https://flagsapi.com/ZW/shiny/64.png',
        currency: 'Botswana pula'
    }
]


// Select the container elements
const countryListContainer = document.getElementById('countryList');
const countrySelect = document.getElementById('countrySelect');

// Populate the dropdown with country names
country1.forEach((country, index) => {
    const option = document.createElement('option');
    option.value = index;
    option.textContent = country.name;
    countrySelect.appendChild(option);
});

countrySelect.addEventListener('change', function() {
    const selectedIndex = this.value;
    if (selectedIndex === "") {
        countryListContainer.innerHTML = ""; // Clear if no selection
    } else {
        const country = country1[selectedIndex];
        displayCountryDetails(country);
    }
});

// Function to display country details
function displayCountryDetails(country) {
    // Clear previous content
    countryListContainer.innerHTML = "";

    // Create container for country
    const countryContainer = document.createElement('div');
    countryContainer.classList.add('country');

    // Create and append country name
    const nameElement = document.createElement('h2');
    nameElement.textContent = country.name;
    countryContainer.appendChild(nameElement);

    // Create and append capital
    const capitalElement = document.createElement('p');
    capitalElement.textContent = `Capital: ${country.capital}`;
    countryContainer.appendChild(capitalElement);

    // Create and append languages
    const languagesElement = document.createElement('p');
    languagesElement.textContent = `Languages: ${country.languages.join(', ')}`;
    countryContainer.appendChild(languagesElement);

    // Create and append population
    const populationElement = document.createElement('p');
    populationElement.textContent = `Population: ${country.population}`;
    countryContainer.appendChild(populationElement);

    // Create and append currency
    const currencyElement = document.createElement('p');
    currencyElement.textContent = `Currency: ${country.currency}`;
    countryContainer.appendChild(currencyElement);

    // Create and append flag image
    const flagElement = document.createElement('img');
    flagElement.src = country.flag;
    flagElement.alt = `${country.name} Flag`;
    countryContainer.appendChild(flagElement);

    // Append country container to list container
    countryListContainer.appendChild(countryContainer);
}
